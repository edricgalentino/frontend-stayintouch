"use client";
import Button from "@/components/Common/Button";
import MainLayout from "@/components/Common/template/MainLayout";
import { Confession } from "@/components/Confession/type";
import confessionService from "@/components/Confession/services/service";
import Link from "next/link";
import HighlightTextEditor from "@/components/Common/TextEditor/Highlight";
import { useEffect, useState } from "react";
import { RiEyeFill, RiHeartFill, RiHeartLine } from "react-icons/ri";
import useAuth from "@/lib/global/Auth/useAuthentication";
import useSnackbar from "@/lib/global/Snackbar/useSnackbar";
import { getErrorMessage } from "@/lib/helpers/request";
import Auth from "@/lib/helpers/auth";
import { useRouter } from "next/navigation";
import TagsChip from "@/components/Common/Tags";

type ConfessionData = {
  data: Confession[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
};

const HomepageConfession = () => {
  const { isLogIn, user } = useAuth();
  const { setSnackbar } = useSnackbar();
  const [data, setData] = useState<ConfessionData["data"]>([]);
  const [meta, setMeta] = useState<ConfessionData["meta"]>({
    total: 0,
    page: 0,
    limit: 0,
  });
  const userFromCookie = Auth.getUserFromCookie();
  const [listLiked, setListLiked] = useState<number[]>(
    userFromCookie?.liked_confession.length > 0 ? userFromCookie?.liked_confession.map((confessionId) => confessionId) : []
  );
  const router = useRouter();
  const [tags, setTags] = useState<string[]>([]);

  const getData = async () => {
    const data = await confessionService.getConfessions<ConfessionData>([
      {
        page_number: 1,
        limit: 10,
      },
    ]);
    setData(data.data);
    setMeta(data.meta);
  };

  const handleLike = async (id: number, isLiked: boolean) => {
    try {
      const res = await confessionService.likeConfession(id, isLiked);
      if (res.status === 201) {
        if (isLiked) {
          setListLiked((prev) => prev.filter((confessionId) => confessionId !== id));
          if (!isLogIn) {
            Auth.updateAnonymousUser({
              liked_confession: userFromCookie?.liked_confession.filter((confessionId) => confessionId !== id),
            });
          }
        } else {
          setListLiked((prev) => [...prev, id]);
          if (!isLogIn) {
            Auth.updateAnonymousUser({
              liked_confession: [...userFromCookie?.liked_confession, id],
            });
          }
        }
        getData();
      }
    } catch (error) {
      console.log(error);
      setSnackbar({
        message: `Create confession failed: ${getErrorMessage(error)}`,
        type: "error",
      });
    }
  };

  useEffect(() => {
    getData();
    console.log(userFromCookie?.liked_confession, user?.liked_confession, user.tempId);
  }, []);

  useEffect(() => {
    if (tags.length > 0) {
      router.push(`?tags=${tags?.join(",")}`);
    } else {
      router.replace("");
    }
  }, [tags]);

  return (
    <MainLayout className="flex flex-col gap-8 p-4">
      <div className="flex justify-between items-center">
        <h1>Confessions</h1>
        <Link href="/confession/create">
          <Button color="primary">Create One !</Button>
        </Link>
      </div>
      <div className="flex gap-4 w-full">
        <div className="flex flex-col justify-start items-center gap-4 w-1/4">
          <div className="flex flex-col gap-4 justify-center items-start">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold">Filter</p>
              <p className="text-sm font-semibold">Filter by tags</p>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-1 w-full">
              <TagsChip tags={tags} setTags={setTags} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-3/4">
          {data.map((confession, index) => {
            const isThisConfessionLiked = listLiked.includes(confession.id);
            return (
              <div key={index} className="flex flex-col gap-4 border rounded-lg p-4 w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col w-full justify-center items-start gap-1">
                    <p className="text-sm">From: {confession.name}</p>
                    <p className="text-sm">To: {confession.to}</p>
                  </div>
                  <div className="flex flex-col-reverse items-center gap-x-4 gap-y-1">
                    <div
                      className="inline-flex items-center gap-1 group px-2 hover:bg-primary rounded-lg cursor-pointer"
                      onClick={() => handleLike(confession.id, isThisConfessionLiked)}
                    >
                      {isThisConfessionLiked ? (
                        <RiHeartFill className="text-secondary group-hover:scale-150 transition-all" />
                      ) : (
                        <RiHeartLine className="text-secondary group-hover:scale-150 transition-all" />
                      )}
                      <p>{confession.likes}</p>
                    </div>
                    <div className="inline-flex items-center gap-1">
                      <RiEyeFill className="text-tertiary" />
                      <p>{confession.seen}</p>
                    </div>
                  </div>
                </div>
                <hr />
                <Link href={`/confession/${confession.id}`}>
                  <HighlightTextEditor
                    value={confession.message?.length > 100 ? `${confession.message?.substring(0, 100)}...` : confession.message}
                  />
                </Link>
                <hr />
                <div className="flex flex-wrap justify-start items-center gap-1 w-full">
                  {confession.tags.map((tag, i) => (
                    <p key={i} className="w-fit bg-primary text-tertiary text-xs rounded-lg px-2 py-1">
                      #{tag}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default HomepageConfession;

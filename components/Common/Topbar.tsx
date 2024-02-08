"use client";

import Auth from "@/lib/helpers/auth";
import useAuth from "@/lib/global/Auth/useAuthentication";
import { useEffect } from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

const Topbar = () => {
  const { isLogIn, user } = useAuth();
  useEffect(() => {}, [isLogIn]);
  return (
    <>
      <div className="navbar justify-between text-tertiary font-medium">
        <div>
          <div className="dropdown">
            <Button tabIndex={0} className="lg:hidden" color="ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </Button>
            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-64 z-50">
              <div className="lg:hidden">
                <li>
                  <Link className="hover:bg-primary" href="/tutorial">
                    How to create
                  </Link>
                </li>
                <li>
                  <Link className="hover:bg-primary" href="/confession">
                    Confessions
                  </Link>
                </li>
                <li>
                  <Link className="hover:bg-primary" href="/room-confession">
                    Room Confessions
                  </Link>
                </li>
              </div>
              {isLogIn ? (
                <></>
              ) : (
                <>
                  <div className="gap-2 items-center sm:hidden flex mt-2 w-full">
                    <Link className="w-full" href="/login">
                      <Button className="w-full" color="secondary">
                        Login
                      </Button>
                    </Link>
                    <Link className="w-full" href="/sign-up">
                      <Button className="w-full" color="primary">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </ul>
          </div>
          <Link href="/" className="btn bg-transparent hover:bg-transparent shadow-none text-secondary text-lg border-0">
            <Image src="/static/logo/Stay In Touch Head Logo.png" alt="Stay In Touch Head Logo" width={30} height={30} /> Stay
            <span className="px-2 p-0.5 bg-primary rounded-md">In Touch</span>
          </Link>
          <div className={`${isLogIn ? " hidden lg:flex" : "hidden lg:flex"} gap-2`}>
            <Link href="/tutorial">
              <Button color="ghost">How to create</Button>
            </Link>
            <Link href="/confession">
              <Button color="ghost">Confessions</Button>
            </Link>
            <Link href="/room-confession">
              <Button color="ghost">Room Confessions</Button>
            </Link>
          </div>
        </div>

        <div className={`flex`}>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt={`${user.username || user.email || "User"}'s avatar`}
                  className="object-cover w-full h-full rounded-full"
                  src={
                    isLogIn ? user.avatar || "https://picsum.photos/200" || "/static/img/default-avatar.png" : "/static/img/default-avatar.png"
                  }
                />
              </div>
            </label>
            <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {isLogIn ? (
                <>
                  <li>
                    <div className="flex flex-col justify-center items-start gap-0 hover:bg-primary">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">
                        {(user.username || user.email).length > 30
                          ? `${(user.username || user.email).substring(0, 30)}...`
                          : user.username || user.email || "User"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <Link className="hover:bg-primary" href="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:bg-primary" href="/settings">
                      Settings
                    </Link>
                  </li>
                  <Button color="secondary" className="mt-2" onClick={async () => await Auth.logoutUser()}>
                    Logout
                  </Button>
                </>
              ) : (
                <div className="gap-2 items-center flex flex-col w-full">
                  <Link href="/login" className="w-full">
                    <Button className="w-full" color="secondary">
                      Login
                    </Button>
                  </Link>
                  <Link href="/sign-up" className="w-full">
                    <Button className="w-full" color="primary">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;

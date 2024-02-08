"use client";
import React, { useState } from "react";
import Input from "@/components/Common/Input";
import Fetch from "@/lib/core/base-api/base-api";
import url from "@/lib/core/url";
import Button from "@/components/Common/Button";
import SnackbarMessage from "@/components/Common/Snackbar/SnackbarMessage";
import { RiLock2Fill, RiMailFill, RiUser3Fill } from "react-icons/ri";
import Loading from "../../Common/Loading";
import useTabs from "../../Tabs/useTabs";
import Tabs from "../../Tabs";
import { LoginRes, RegisterRes } from "../type";

const AuthForm = () => {
  const { tabs, activeTab, setActiveTab } = useTabs([
    { text: "login", is_active: true },
    { text: "register", is_active: false },
  ]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorInput, setErrorInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    let payload: { username?: string; email: string; password: string } = {
      email,
      password,
    };

    if (activeTab === "register") {
      payload = {
        ...payload,
        username,
      };
    }

    try {
      const res = await Fetch.post<LoginRes>(`${activeTab === "login" ? url.auth.login : url.user.register}`, payload);
      console.log(res);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitLogin} className="flex flex-col gap-4 p-4 w-4/12 rounded-lg shadow-md bg-white">
      <SnackbarMessage isError={isError} message="Oops you've enter invalid email or password, please try again." />
      <h3 className="text-center text-lg">Stay In Touch</h3>
      <Tabs tabs={tabs} setActiveTab={setActiveTab} />
      {activeTab === "register" && (
        <div className="flex gap-3 justify-center items-start">
          <RiUser3Fill size={24} className="mt-1.5" />
          <Input
            type="text"
            placeholder="John Doe"
            onChange={(e) => {
              setErrorInput((prev) => ({ ...prev, username: "" }));
              setUsername(e.target.value);
            }}
            errorMsg={errorInput.username}
            onBlur={() => {
              if (!username) {
                setErrorInput((prev) => ({ ...prev, username: "username is required" }));
              } else {
                setErrorInput((prev) => ({ ...prev, username: "" }));
              }
            }}
          />
        </div>
      )}
      <div className="flex gap-3 justify-center items-start">
        <RiMailFill size={24} className="mt-1.5" />
        <Input
          type="email"
          placeholder="example@mail.co"
          onChange={(e) => {
            setErrorInput((prev) => ({ ...prev, email: "" }));
            setEmail(e.target.value);
          }}
          errorMsg={errorInput.email}
          onBlur={() => {
            if (!email) {
              setErrorInput((prev) => ({ ...prev, email: "Email is required" }));
            } else {
              setErrorInput((prev) => ({ ...prev, email: "" }));
            }
          }}
        />
      </div>
      <div className="flex gap-3 justify-center items-start">
        <RiLock2Fill size={24} className="mt-1.5" />
        <Input
          type="password"
          placeholder="Your password"
          onChange={(e) => {
            setErrorInput((prev) => ({ ...prev, password: "" }));
            setPassword(e.target.value);
          }}
          errorMsg={errorInput.password}
          onBlur={() => {
            if (!password) {
              setErrorInput((prev) => ({ ...prev, password: "Password is required" }));
            } else {
              setErrorInput((prev) => ({ ...prev, password: "" }));
            }
          }}
        />
      </div>
      <Button type="submit" color="primary" variant="default" className="w-full">
        {isLoading ? <Loading /> : activeTab === "login" ? "Log In" : "Register"}
      </Button>
    </form>
  );
};

export default AuthForm;

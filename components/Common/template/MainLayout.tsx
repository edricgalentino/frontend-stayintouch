"use client";
import Topbar from "../Topbar";
import Footer from "../Footer";
import { useEffect } from "react";
import Auth from "@/lib/helpers/auth";
import useAuth from "@/lib/global/Auth/useAuthentication";
import crypto from "@/lib/helpers/crypto";
type MainLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const MainLayout = ({ children, className }: MainLayoutProps) => {
  useEffect(() => {
    const userInCookie = Auth.getUserFromCookie();
    const { setUser } = useAuth.getState();
    // generate temporary id for user and store it in local storage and cookie. check if user already have one
    if (!userInCookie || !userInCookie.tempId) {
      Auth.setTemporaryUserDataToCookie();
    } else {
      setUser({
        ...userInCookie,
        tempId: crypto.decrypt(userInCookie.tempId),
      });
    }
  }, []);
  return (
    <>
      <main className="w-full bg-base-primary max-w-6xl font-normal transition-all duration-500 mx-auto min-h-screen">
        <Topbar />
        <div className={`min-h-screen w-full pb-8 py-4 ${className}`}>{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;

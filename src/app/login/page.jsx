"use client"
import LoginForm from "@/components/loginform/LoginForm";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function login() {
  const {data:session, error} = useSession()
  const router = useRouter();
  useEffect(()=>{
    if(session){
      router.push("./")
    }
  },[session])
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col" />
        <div className="mt-5 col-7">
          <LoginForm />
        </div>
        <div className="col" />
      </div>
    </div>
  );
}

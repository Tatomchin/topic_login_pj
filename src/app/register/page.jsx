"use client";
import RegisterForm from "@/components/registerform/RegisterForm";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function register() {
  const { data: session, error } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("./");
    }
  }, [session]);
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col" />
        <div className="mt-5 col-7">
          <RegisterForm />
        </div>
        <div className="col" />
      </div>
    </div>
  );
}

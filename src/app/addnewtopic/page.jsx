"use client";
import Addtopic from "@/components/addnewtopicform/Addtopic";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function addTopic() {
  const { data: session, error } = useSession();
  const router = useRouter();
  const [addTopic, setAddTopic] = useState(<></>);

  useEffect(() => {
    if (session) {
      setAddTopic(<Addtopic />);
    } else if (session === null) {
      router.push("./login")
    } else {
      setAddTopic(<></>);
    }
  }, [session]);

  return <div className="container p-3">{addTopic}</div>;
}

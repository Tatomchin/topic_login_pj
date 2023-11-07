"use client";
import Editcontentform from "@/components/editcontentform/Editcontentform";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Editcontentpage({ params }) {
  const { data: session, error } = useSession();
  const router = useRouter();
  const [editContent, setEditContent] = useState(<></>);
  const [topic, setTopic] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const getTopic = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/topic/${params.id}`,
          { medthod: "GET" }
        );
        if (res.ok) {
          const dataTopic = await res.json();
          setTopic(dataTopic);
        } else {
          setEditContent(<h3>404 Not found.</h3>)
          console.log("editcontent page fetch data fail");
        }
      } catch (error) {}
    };

    if (session) {
      setEmail(session.user.email)
      getTopic();

    } else if (session === null) {
      router.push("../login");
    } else {
      setEditContent(<>Loading ....</>);
    }
  }, [session]);

  useEffect(()=>{
    if(topic){
      setEditContent(<Editcontentform id={params.id} topic={topic.topic.topic} description={topic.topic.description} email={email}/>);
    } 
  },[topic])

  return <div className="container p-3">{editContent}</div>;
}

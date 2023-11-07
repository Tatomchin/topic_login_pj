"use client";
import Editcontentform from "@/components/editcontentform/Editcontentform";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Editcommentform from "@/components/readtopic/editcommentform/Editcommentform";

export default function Editcommentpage({ params }) {
  const { data: session, error } = useSession();
  const router = useRouter();
  const [comment, setComment] = useState(null);
  const [ email , setEmail] = useState(null);

  useEffect(() => {
    const getTopic = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/comment/editcomment/${params.id}`,
          { medthod: "GET" }
        );
        if (res.ok) {
          const dataComment = await res.json();
          setComment(dataComment);
        } else {
          console.log("editcontent page fetch data fail");
        }
      } catch (error) {}
    };

    if (session) {
      setEmail(session.user.email)
      getTopic();
    } else if (session === null) {
      router.push("/login");
    } else {
    }
  }, [session]);

  if (session) {
    return (
      <div className="container p-3">
        {comment ? (
          <Editcommentform
            id={params.id}
            description={comment.comment.description}
            topic_id={comment.comment.topic_id}
            email={email}
          />
        ) : (
          <>Loading...</>
        )}
      </div>
    );
  } else {
    return <></>;
  }
}

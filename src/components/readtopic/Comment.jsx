"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Comment({ id, email, description, topic_email , getComment}) {
  const { data: session } = useSession();
  const [tagEdit, setTagEdit] = useState(<></>);
  const [tagDelete, setTagDelete] = useState(<></>);

  const deleteComment = async () => {
    if (confirm("Are you sure to delete this comment?")) {
      try {
        const resDel = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/comment?id=${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({email}),
          }
        );
        if (resDel.ok) {
          alert("Comment deleted.");
          getComment();
        }
      } catch (error) {}
    }
};

  useEffect(() => {
    if (session) {
      const emailSession = session.user.email;
      if (emailSession === email) {
        setTagEdit(
          <Link href={`${process.env.NEXT_PUBLIC_LOCAL_URL}/editcomment/${id}`}>
            <button className="btn btn-primary position-absolute bottom-0 start-0">
              Edit
            </button>
          </Link>
        );
        setTagDelete(
          <button className="btn btn-danger position-absolute bottom-0 end-0" onClick={()=>{deleteComment()}}>
            Delete
          </button>
        );
      }
      if (emailSession === topic_email) {
        setTagDelete(
          <button className="btn btn-danger position-absolute bottom-0 end-0" onClick={()=>{deleteComment()}}>
            Delete
          </button>
        );
      }
    }
  }, [session]);

  return (
    <div className="mt-3 p-4 rounded bg-light text-dark">
      <h5>User : {" " + email}</h5>
      <p>{description}</p>
      <div className="p-3 position-relative">{tagEdit}{tagDelete}</div>
    </div>
  );
}

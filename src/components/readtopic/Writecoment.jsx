"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Writecoment({ topic_id, getComment }) {
  const { data: session } = useSession();
  const [description, setDescription] = useState("");
  const [emailSession, setEmailSession] = useState(null);

  const router = useRouter();

  const haddleComment = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/comment/addcomment`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({email: emailSession, description, topic_id }),
      });
      if (res.ok) {
        alert("You are commented !");
        getComment();
        setDescription("");
      } else {
        console.log("Comment fail response not ok.");
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (session) {
      setEmailSession(session.user.email);
    }
  }, [session]);

  if (session) {
    return (
      <div className="container">
        <form onSubmit={haddleComment} action="">
          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control mt-3"
              name="comment"
              type="text"
              rows={3}
              placeholder="Type your comments."
            />
            <button type="submit" className="btn btn-success mt-4">
              Comment
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return <></>;
  }
}

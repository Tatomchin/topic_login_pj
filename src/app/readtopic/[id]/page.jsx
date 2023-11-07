"use client";
import Comment from "@/components/readtopic/Comment";
import Maintopic from "@/components/readtopic/Maintopic";
import Writecoment from "@/components/readtopic/Writecoment";
import React, { useEffect, useState } from "react";

export default function Readtopicpage({ params }) {
  const [topic, setTopic] = useState(null);
  const [allComments, setAllComments] = useState(null);

  // GET COMMENTS
  const getComment = async () => {
    const rescom = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/comment/${params.id}`,
      {
        method: "GET",
      }
    );
    if (rescom.ok) {
      const dataComment = await rescom.json();
      if (dataComment) {
        setAllComments(dataComment);
      }
    } else {
      console.log("Respone Get comenmt fail.");
    }
  };

  useEffect(() => {
    let isMounted = true;

    //GET TOPIC
    const getTopic = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/topic/${params.id}`,
          {
            method: "GET",
          }
        );
        if (res.ok) {
          const dataTopic = await res.json();
          if (dataTopic) {
            setTopic(dataTopic);
            getComment();
          }
        }
      } catch (error) {}
    };

    getTopic();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {!topic ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <div className="m-3 p-4 rounded bg-dark text-white position-relative">
            <Maintopic
              id={params.id}
              topic={topic.topic.topic}
              email={topic.topic.email}
              description={topic.topic.description}
            />
          </div>

          <div className="m-3 p-4 rounded bg-dark text-white position-relative">
            <h3>Comments</h3>
            {!allComments ? (
              <p>Comments are Loading...</p>
            ) : (
              allComments.comments.map((c) => (
                <Comment
                  key={c._id}
                  id={c._id}
                  email={c.email}
                  description={c.description}
                  topic_email={topic.topic.email}
                  getComment={getComment}
                />
              ))
            )}
          </div>

          <div className="m-3 p-4 rounded position-relative">
            <Writecoment topic_id={params.id} getComment={getComment} />
          </div>
        </div>
      )}
    </>
  );
}

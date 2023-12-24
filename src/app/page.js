"use client";
import Topic from "@/components/topic/Topic";
import { useEffect, useState } from "react";

export default function Home() {
  const [allTopic, setAllTipic] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const getAlltopic = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/topic`,
          {
            method: "GET",
          }
        );
        if (res.ok) {
          const dataTopic = await res.json();
          if (dataTopic) {
            setAllTipic(dataTopic.topics.reverse());
          } else {
            console.log("No data !");
          }
        }
      } catch (error) {}
    };

    getAlltopic();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container-md">
      {!allTopic ? (
        <p>Loading...</p>
      ) : (
        allTopic.map((t) => (
          <Topic
            key={t._id}
            id={t._id}
            topicName={t.topic}
            email={t.email}
            description={t.description}
          />
        ))
      )}
    </div>
  );
}

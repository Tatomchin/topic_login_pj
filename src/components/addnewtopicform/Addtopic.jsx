"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Addtopic() {
  const { data: session, status, error } = useSession();
  const email = session.user.email;
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const confirmUser = () => {
    if (confirm("Are you sure to post?")) {
      hadldleSumit();
    }
  };

  const hadldleSumit = async (e) => {
    e.preventDefault();
    if (confirm("Are you sure to post?")) {
      try {
        console.log(email);
        const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/topic/addnewtopic`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email, topic, description }),
        });

        if (res.ok) {
          alert("Topic Posted.");
          router.push("./");
        } else {
          alert("Failed to create a Topic, Already topic name or Other Error")
          throw new Error("Failed to create a User");
        }
      } catch (error) {}
    }
  };
  return (
    <div>
      <h2>Add new Topic</h2>
      <form onSubmit={hadldleSumit} action="">
        <div className="form-group">
          <input
            onChange={(e) => setTopic(e.target.value)}
            value={topic}
            type="text"
            className="form-control mt-3"
            placeholder="Topic"
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="form-control mt-3"
            type="text"
            rows="3"
            placeholder="Description"
          ></textarea>
          <button type="submit" className="btn btn-success mt-4">
            Submit
          </button>
          <Link href={"/"}>
            <button className="btn btn-primary ms-1 mt-4">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

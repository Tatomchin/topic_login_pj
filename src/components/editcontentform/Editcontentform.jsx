"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Editcontentform({ id, topic, description, email }) {
  const [newTopic, setNewTopic] = useState(topic);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const updateContent = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/topic/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newTopic, newDescription }),
        }
      );

      if (res.ok) {
        router.push(`../readtopic/${id}`);
      } else {
        alert("Already topic name, Fail to create topic");
      }
    } catch (error) {}
  };

  const deleteTopic = async () => {
    if (confirm("Are you sure to delete this topic?")) {
      try {
        const resDel = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/topic?id=${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        if (resDel.ok) {
          alert("Topic deleted.");
          router.push(`../`);
        } else {
          alert("Fail to delele a Topic");
          console.log("delete content fail.");
        }
      } catch (error) {}
    }
  };

  return (
    <div>
      <h2>Edit Content Topic</h2>
      <form onSubmit={updateContent} action="">
        <div className="form-group">
          <input
            onChange={(e) => setNewTopic(e.target.value)}
            value={newTopic}
            type="text"
            className="form-control mt-3"
            placeholder="Topic"
          />
          <textarea
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            className="form-control mt-3"
            type="text"
            rows="3"
            placeholder="Description"
          ></textarea>
          <button type="submit" className="btn btn-success mt-2">
            Update
          </button>
          <Link href={`../readtopic/${id}`}>
            <button className="btn btn-primary ms-2 mt-2">Back</button>
          </Link>
        </div>
      </form>
      <button
        className="btn btn-danger ms-0 mt-2"
        onClick={() => {
          deleteTopic();
        }}
      >
        Delete
      </button>
    </div>
  );
}

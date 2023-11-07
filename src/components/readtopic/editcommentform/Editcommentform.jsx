"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Editcommentform({ id, description, topic_id ,email}) {
  const { data: session, error } = useSession();
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const updateComment = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/comment/editcomment/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newDescription }),
        }
      );

      if (res.ok) {
        router.push(`../readtopic/${topic_id}`);
      } else {
        console.log("Fail to update comment.");
      }
    } catch (error) {}
  };

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
            alert("Deleted");
          }
        } catch (error) {}
      }
  };

  return (
    <div>
      <h2>Edit Comment</h2>
      <form onSubmit={updateComment} action="">
        <div className="form-group">
          <textarea
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            className="form-control mt-3"
            type="text"
            rows="3"
            placeholder="Description"
          />
          <button type="submit" className="btn btn-success mt-4">
            Update
          </button>
          <button
            className="btn btn-danger ms-1 mt-4"
            onClick={() => {
              deleteComment();
            }}
          >
            Delete
          </button>
          <Link href={`../readtopic/${topic_id}`}>
            <button className="btn btn-primary ms-1 mt-4">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

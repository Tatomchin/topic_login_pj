"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Maintopic({ id, topic, email, description }) {
  const { data: session } = useSession();
  const [tagEdit, setTagEdit] = useState(<></>);

  useEffect(() => {
    if (session) {
      const emailSession = session.user.email;
      if (emailSession === email) {
        setTagEdit(
          <Link href={`${process.env.NEXT_PUBLIC_LOCAL_URL}/editcontent/${id}`}>
            <button className="btn btn-light position-absolute bottom-0 end-0">
              Edit
            </button>
          </Link>
        );
      }
    }
  }, [session]);
  return (
    <div>
      <h3>{topic}</h3>
      <p>by : {email}</p>
      <p>{description}</p>
      <div className="p-3 position-relative">{tagEdit}</div>
    </div>
  );
}

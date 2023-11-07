"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, error } = useSession();
  const [detail, setDetail] = useState(<></>);
 
  
  useEffect(() => {
    if (session === null) {
      setDetail(
        <>
          <div>
            <Link href={"/login"}>
              <button className="btn btn-light m-1">Login</button>
            </Link>
            <Link href={"/register"}>
              <button className="btn btn-success m-1">Register</button>
            </Link>
          </div>
        </>
      );
    } else if (session) {
      const email = session.user.email;
      setDetail(
        <>
          <h5 className="text-start text-light">Email : {' '+email}</h5>
          <div>
          
            <Link href={"/addnewtopic"}>
              <button className="btn btn-primary m-1">Add Topic</button>
            </Link>
            <Link href={"/"}>
              <button
                onClick={() => {
                  signOut();
                }}
                className="btn btn-danger m-1"
              >
                Log out
              </button>
            </Link>
          </div>
        </>
      );
    }
  }, [session]);

  return (
    <div className="d-flex justify-content-between navbar navbar-dark bg-dark p-2">
      <Link className="text-decoration-none" href={"/"}>
        <div className="navbar-brand text-decoration-none">
          <h4>TopicLogin PJ</h4>
        </div>
      </Link>
      {detail}
    </div>
  );
}

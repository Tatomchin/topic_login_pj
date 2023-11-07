"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const haddleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please provide email and password!");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("../");
      } else {
        alert("Failed to create a User, Already Email or Other Error");
        throw new Error("Failed to create a User");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-2 ">
      <h3>Register</h3>
      <form onSubmit={haddleSubmit}>
        <div className="form-group">
          <label className="mt-4">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control mt-2"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label className="mt-3">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control mt-2"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

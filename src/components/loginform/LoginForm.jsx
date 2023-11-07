"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //error check
  const [errCheck, setErrCheck] = useState(null);

  //check session
  const { data: session, error } = useSession();

  //navigation
  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();
    setErrCheck(null)
    if (!email || !password) {
      alert("Please provide email and password.");
      return;
    }
    try {
      const result = await signIn(`credentials`, {
        redirect: false,
        email,
        password,
      });
      setErrCheck(result.error);
    } catch (err) {
    }
  };

  useEffect(() => {
    if (errCheck) {
      console.log(errCheck)
      if (email === "" || password === "") {
        alert("Please provide E-mail or Password.");
      } else {
        alert("E-mail or Password is wrong.");
      }
      return;
    }
  }, [errCheck]);

  return (
    <div className="p-2 ">
      <h3>Login</h3>
      <form onSubmit={login}>
        <div className="form-group">
          <label className="mt-4">Email address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            className="form-control mt-2"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label className="mt-3">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            className="form-control mt-2"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Sign in
        </button>
      </form>
    </div>
  );
}

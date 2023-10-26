import LoginForm from "@/components/loginform/LoginForm";
import React from "react";

export default function login() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col" />
        <div className="mt-5 col-7">
          <LoginForm />
        </div>
        <div className="col" />
      </div>
    </div>
  );
}

import RegisterForm from "@/components/registerform/RegisterForm";
import React from "react";

export default function register() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col" />
        <div className="mt-5 col-7">
          <RegisterForm />
        </div>
        <div className="col" />
      </div>
    </div>
  );
}

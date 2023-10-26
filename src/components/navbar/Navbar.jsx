import React from "react";

export default function Navbar() {
  return (
    <div className="d-flex justify-content-between navbar navbar-dark bg-dark p-2">
      <div className="navbar-brand"> 
        <h4>TopicLogin PJ</h4>
      </div>
      <div>
        <button className="btn btn-light m-1">Login</button>
        <button className="btn btn-success m-1">Register</button>
      </div>
    </div>
  );
}

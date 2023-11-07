import Link from "next/link";
import React from "react";

export default function Topic({ id, topicName, email, description }) {
  return (
    <div className="d-block bg-secondary text-white mt-3 p-3 rounded position-relative">
      <h4>{topicName}</h4>
      <h6>
        <b>E-mail :</b>{" " + email}
      </h6>
      <p>{description}</p>
      <div className="p-3 position-relative">
        <Link href={`./readtopic/${id}`}>
          <button className="btn btn-light position-absolute bottom-0 end-0">
            Read more...
          </button>
        </Link>
      </div>
    </div>
  );
}

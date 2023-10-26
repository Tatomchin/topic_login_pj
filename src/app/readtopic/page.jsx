import Comment from "@/components/readtopic/Comment";
import Maintopic from "@/components/readtopic/Maintopic";
import Writecoment from "@/components/readtopic/Writecoment";
import React from "react";

export default function readTopic() {
  return (
    <div className="container">
      <div className="m-3 p-4 rounded bg-dark text-white position-relative">
        <Maintopic />
      </div>

      <div className="m-3 p-4 rounded bg-dark text-white position-relative">
        <h3>Comments</h3>
        <Comment />
        <Comment />
      </div>

      <div className="m-3 p-4 rounded position-relative">
        <Writecoment />
      </div>
    </div>
  );
}

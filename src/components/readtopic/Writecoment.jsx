import React from "react";

export default function Writecoment() {
  return (
    <form onSubmit={""} action="">
      <div>
        <textarea
          // onChange={(e) => setDescription(e.target.value)}
          // value={description}
          className="form-control mt-3"
          type="text"
          rows="3"
          placeholder="Type your comments."
        ></textarea>
        <button type="submit" className="btn btn-success mt-4">
          Comment
        </button>
      </div>
    </form>
  );
}

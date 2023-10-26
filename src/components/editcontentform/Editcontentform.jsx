import React from 'react'
import Link from 'next/link'

export default function Editcontentform() {
  return (
    <div>
        <h2>Edit Content Topic</h2>
      <form onSubmit={""} action="">
        <div className="form-group">
          <input
            // onChange={(e) => setTitle(e.target.value)}
            // value={title}
            type="text"
            className="form-control mt-3"
            placeholder="Topic"
          />
          <textarea
            // onChange={(e) => setDescription(e.target.value)}
            // value={description}
            className="form-control mt-3"
            type="text"
            rows="3"
            placeholder="Description"
          ></textarea>
          <button type="submit" className="btn btn-success mt-4">
            Edit
          </button>
          <Link href={"/"}>
            <button className="btn btn-danger ms-1 mt-4">Delete</button>
          </Link>
          <Link href={"/"}>
            <button className="btn btn-primary ms-1 mt-4">Back</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

import React from 'react'

export default function RegisterForm() {
  return (
    <div className="p-2 ">
        <h3>Register</h3>
        <form>
            <div className="form-group">
                <label className="mt-4" >Email address</label>
                <input type="email" className="form-control mt-2"  placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label className="mt-3">Password</label>
                <input type="password" className="form-control mt-2"  placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
  )
}

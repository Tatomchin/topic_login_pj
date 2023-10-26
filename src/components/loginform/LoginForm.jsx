import React from 'react'

export default function LoginForm() {
  return (
    <div className="p-2 ">
        <h3>Login</h3>
        <form>
            <div className="form-group">
                <label className="mt-4" >Email address</label>
                <input type="email" className="form-control mt-2"  placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label className="mt-3">Password</label>
                <input type="password" className="form-control mt-2"  placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Sign in</button>
        </form>
    </div>
  )
}

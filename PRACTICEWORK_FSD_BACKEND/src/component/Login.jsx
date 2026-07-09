import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  return (
    <div className="container mt-5">
      <form className="p-4 shadow rounded bg-light">
        <h2 className="mb-4 text-center">Login</h2>
        
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
          />
        </div>

        <div className="form-check mb-3">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="exampleCheck1" 
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <section className="d-flex w-100  justify-content-center align-items-center login">
        <div className="w-50 p-5 border rounded card-shadow">
          <h1 className="text-center fs-1 fw-bold">LogIn</h1>
          <form>
            <input
              type="email"
              className="form-control mt-4"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="form-control mt-4"
              placeholder="Password"
              minLength={6}
            />
            <button
              className="btn btn-primary w-100 mt-4"
              type="submit"
              onClick={() => navigation("/")}
            >
              Login
            </button>
            <Link to="/register" className="text-decoration-underline">
              Register
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login

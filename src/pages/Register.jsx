import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    let navigation=useNavigate()
    function handleSubmit(){
        e.preventDefault()
        navigation("/")
    }
  return (
    <>
      <section className="d-flex w-100  justify-content-center align-items-center login">
        <div className="w-50 p-5 border rounded card-shadow">
          <h1 className="text-center fs-1 fw-bold">Register</h1>
          <form>
            <input
              type="text"
              className="form-control mt-4"
              placeholder="First name"
              required
            />
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Last name"
              required
            />
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
              required
              minLength={6}
            />
            <input
              type="password"
              className="form-control mt-4"
              placeholder="Confirm Password"
              minLength={6}
              required
            />
            <button className="btn btn-primary w-100 mt-4" type="submit" onClick={()=> navigation("/")}>
              Register
            </button>
            <Link to="/login" className="text-decoration-underline">
              Login
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;

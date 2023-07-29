import React from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  let navigation = useNavigate()
  let tokenId = localStorage.getItem("token")
  useEffect(() => {
    if (tokenId) {
      navigation("/")
    }
  }, []);
   function handleSubmit(e) {
     e.preventDefault();
     localStorage.setItem("token", "123e4567-e89b-12d3-a456-426614174000");
     toast("logged", {
       type: "success",
     });
     navigation("/")
   }
  return (
    <>
      <section className="d-flex w-100  justify-content-center align-items-center login">
        <div className="w-50 p-5 border rounded  login-card">
          <h1 className="text-center fs-1 fw-bold text-light">LogIn</h1>
          <form onSubmit={(e)=> handleSubmit(e)}>
            <input
              id='email'
              name='email'
              type="email"
              className="form-control mt-4"
              placeholder="Email"
              required
            />
            <input
              id='password'
              name='password'
              type="password"
              className="form-control mt-4"
              placeholder="Password"
              minLength={6}
            />
            <button
              className="btn btn-warning w-100 mt-4 text-light"
              type="submit"
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

import { useEffect } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
    let navigation=useNavigate()
    let tokenId = localStorage.getItem("token");
    useEffect(() => {
       if (tokenId) {
         navigation("/")
       }
     }, [])
    function handleSubmit(e){
      e.preventDefault()
      let password=e.target.password.value
      let confirmPassword=e.target.confirmPassword.value
      if(password !== confirmPassword){
       return toast("password and confirmPassword are not the same", {
         type: "error",
       });
      }
      localStorage.setItem("token", "123e4567-e89b-12d3-a456-426614174000");
      toast("registred", {
        type: "success",
      });
      navigation("/")
    }
  return (
    <>
      <section className="d-flex w-100  justify-content-center align-items-center login">
        <div className="w-50 p-5 border rounded login-card">
          <h1 className="text-center fs-1 fw-bold text-light">Register</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="form-control mt-4"
              placeholder="First name"
              required
              minLength={3}
            />
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Last name"
              required
              minLength={3}
            />
            <input
              type="email"
              className="form-control mt-4"
              placeholder="Email"
              required
            />
            <input
              id="password"
              type="password"
              name="password"
              className="form-control mt-4"
              placeholder="Password"
              required
              minLength={6}
            />
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              className="form-control mt-4"
              placeholder="Confirm Password"
              minLength={6}
              required
            />
            <button className="btn btn-warning w-100 mt-4 text-light" type="submit">
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

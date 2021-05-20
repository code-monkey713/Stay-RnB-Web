import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

export const Login = () => {
  const [host, setHost] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = {
        email: email,
        password: password
      };
      await API.login(userData);
      console.log("successful login!")
      // !host ? window.location.pathname = 'listing' : window.location.pathname = 'profile'
    } catch(err) {
      console.log(err)
    }
  };

  return (
    <div>
      <form>
        <h2 className="text-center mt-5 mb-1">
          Already have an account? Sign In!
        </h2>
        <h3 className="text-center mb-1">
          Sign in as a User to see and book listings
        </h3>
        <h3 className="text-center mb-3">
          Sign in as a Host to make and host listings
        </h3>

        <div className="form-group row mb-3">
          <div className="col-6 m-auto">
            <label className="fs-4">Email address</label>
            <input
              type="email"
              id="email"
              required
              ref={emailRef}
              className="form-control"
              placeholder="Enter email"
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <div className="col-6 m-auto">
            <label className="fs-4">Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordRef}
              className="form-control"
              placeholder="Enter password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col form-check d-flex justify-content-center">
            <input
              type="checkbox"
              className="form-check-input"
              value=""
              id="rememberCheck"
            />
            <label htmlFor="rememberCheck" className="mx-2 mb-2 fs-6">
              Remember me
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col form-check d-flex justify-content-center">
            <input
              type="checkbox"
              className="form-check-input"
              id="hostLogin"
              onClick={() => (!host ? setHost(true) : setHost(false))}
            />
            <label htmlFor="hostLogin" className="mx-2 mb-2 fs-6">
              Host Login
            </label>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <p className="forgot-password fs-5">
            Forgot <Link to="/recover"> password?</Link>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <p className="forgot-password fs-5">
            Not a user yet? Sign up <Link to="/signup">here.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

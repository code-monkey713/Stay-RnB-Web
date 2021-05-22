import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

export const Signup = () => {
  const [signupForm, setSignupForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    hostLogin: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await API.createUser(signupForm);
      !signupForm.hostLogin
        ? (window.location.pathname = "/listing")
        : (window.location.pathname = "/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form>
        <h3 className="text-center mt-5 mb-3">
          New to Stay RnB? Please sign up:
        </h3>

        <div className="row mb-3">
          <div className="col-6 m-auto">
            <div className="form-group">
              <label className="fs-4">Username </label>
              <input
                type="text"
                className="form-control"
                placeholder="What username would you like to use?"
                onChange={({ target }) =>
                  setSignupForm({ ...signupForm, username: target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6 m-auto">
            <div className="form-group">
              <label className="fs-4">First Name </label>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="First Name"
                onChange={({ target }) =>
                  setSignupForm({ ...signupForm, firstName: target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6 m-auto">
            <div className="form-group">
              <label className="fs-4">Last name</label>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="Last Name"
                onChange={({ target }) =>
                  setSignupForm({ ...signupForm, lastName: target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6 m-auto">
            <div className="form-group">
              <label className="fs-4">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={({ target }) =>
                  setSignupForm({ ...signupForm, email: target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6 m-auto">
            <div className="form-group">
              <label className="fs-4">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                onChange={({ target }) =>
                  setSignupForm({ ...signupForm, password: target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col form-check d-flex justify-content-center">
            <input
              type="checkbox"
              className="form-check-input"
              id="hostSignUp"
              onClick={() =>
                !signupForm.hostLogin
                  ? setSignupForm({ ...signupForm, hostLogin: true })
                  : setSignupForm({ ...signupForm, hostLogin: false })
              }
            />
            <label htmlFor="hostSignUp" className="mx-2 mb-2 fs-6">
              Host Signup
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
              Sign Up
            </button>
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <p className="forgot-password fs-5">
            Already registered? Sign in<Link to="/login"> here.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

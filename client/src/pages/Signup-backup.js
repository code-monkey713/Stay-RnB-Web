import React, { useRef } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

export const Signup = () => {
  const username = useRef("");
  const firstName = useRef("");
  const lastName = useRef("");
  const emailAddress = useRef("");
  const password = useRef("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log("add validation for data entered");

    API.createUser({
      username: username.current.value,
      password: password.current.value,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: emailAddress.current.value,
    }).then(() => {
      alert("The user has been created successfully!");
    });
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
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
                ref={username}
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
                className="form-control"
                placeholder="First Name"
                ref={firstName}
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
                className="form-control"
                placeholder="Last Name"
                ref={lastName}
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
                ref={emailAddress}
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
                ref={password}
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <p className="forgot-password">
            Already registered? Sign in<Link to="/login"> here.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

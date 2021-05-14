import React from 'react';
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
      <form>
        <h2 className="text-center mt-5 mb-3">Already a user? Sign In!</h2>

        <div className="form-group row mb-3">
          <div className="col-6 m-auto">
            <label className="fs-4">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <div className="col-6 m-auto">
            <label className="fs-4">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
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
            <label htmlFor="rememberCheck" className="fs-6">
              Remember me
            </label>
          </div>
        </div>



        <div className="row mb-3">
          <div className="col d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="row">
          <div className="col form-check d-flex justify-content-center">
            <p className="forgot-password fs-6">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col form-check d-flex justify-content-center">
            <p className="forgot-password fs-6">
              Not a user yet? <Link to="/signup">Sign up!</Link>
            </p>
          </div>
        </div>
    </div>
  );
};

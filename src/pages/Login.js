import { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import env from 'react-dotenv';
import AuthContext from '../store/auth-context';

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    // add validation on input

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.API_KEY}`;
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        // history.replace('/');
      })
      .catch((err) => {
        alert(err.message);
      });

    console.log(`Email: ${enteredEmail} | Password: ${enteredPassword}`);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2 className="text-center mt-5 mb-3">Already a user? Sign In!</h2>

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

        <div className="row mb-3">
          <div className="col d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-block">
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

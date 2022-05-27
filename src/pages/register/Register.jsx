import React from "react";

// import CheckBox from './../login/CheckBox';
export default function Register() {
  return (
    <div className="login-container">
      <div className="cardlogin">
        <div className="container">
          <form>
            <h1>Register</h1>
            <label htmlFor="Username">
              Username
              <input
                type="username"
                minLength="3"
                placeholder="Username"
                autoComplete="off"
                required
                className="loginInput"
              />
            </label>
            <label htmlFor="email">
              Email Address
              <input
                placeholder="Email"
                required
                className="loginInput"
                type="email"
                autoComplete="off"
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                placeholder="Password"
                required
                className="loginInput"
                type="password"
                minLength="6"
              />
            </label>
            <label htmlFor="Password Again">
              Password Again
              <input
                placeholder="Password Again"
                required
                className="loginInput"
                type="password"
              />
            </label>
            <button className="loginRegisterButton" type="submit">
              Sign Up
            </button>
            <button className="btn btn-outline-danger btn-sm">Login</button>
            {/* <div><CheckBox/></div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

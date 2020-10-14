import React from "react";
import { Link } from "react-router-dom";
import "./css/login.css";

export default () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <img src="images/twitterlogo.png" alt="logo" className="logo2" />
        <br />
        <h2>Log in to Twitter</h2>
        <div className="input1">
          <div>Phone, email, or username</div>
          <input type="text" name="username" className="lgninput" />
        </div>
        <br />
        <div className="input2">
          <div>Password</div>
          <input type="password" name="password" className="lgninput" />
          <br />
        </div>
        <Link to="/home" className="lgnbtn">
          Log in
        </Link>
        <br />
        <span className="bottomstyle">
          <Link to="passreset" className="bottomlink">
            Forgot password?
          </Link>
          &middot;
          <Link to="/signup" className="bottomlink">
            Sign up for Twitter
          </Link>
        </span>
      </div>
    </div>
  );
};

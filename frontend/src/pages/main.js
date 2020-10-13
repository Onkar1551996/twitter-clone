import React from "react";
import { Link } from "react-router-dom";
import "./css/main.css";

export default () => {
  return (
    <div className="main-page">
      <div className="main-box">
        <img src="images/twitterlogo.png" alt="logo" id="logo1" />
        <br />
        <Link to="/signup" id="signup" className="signup">
          Sign up
        </Link>
        <br />
        <Link to="/login" id="login" className="signup">
          Log in
        </Link>
      </div>
    </div>
  );
};

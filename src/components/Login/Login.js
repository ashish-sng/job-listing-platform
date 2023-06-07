import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import userPageImage from "../../assets/userpageImages/userpage.png";

const Login = () => {
  const navigate = useNavigate();

  const signupRedirect = () => {
    navigate("/register");
  };

  return (
    <div className="login__page">
      <div className="login__page__left">
        <div className="login__title">
          <h1>Already have an account?</h1>
          <span>Your personal job finder is here</span>
        </div>
        <div className="login__form">
          <input type="email" placeholder="Email" />
          <input type="passowrd" placeholder="Password" />
        </div>
        <div className="login__footer">
          <button id="login__signin">Sign In</button>
          <div className="login__footer__text">
            <span>Don't have an account? </span>
            <u onClick={signupRedirect}>Sign Up</u>
          </div>
        </div>
      </div>
      <div className="login__page__right">
        <img src={`${userPageImage}`} alt="" />
      </div>
    </div>
  );
};

export default Login;

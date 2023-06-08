import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/login");
  };

  const signupPage = () => {
    navigate("/register");
  };

  return (
    <div className="header">
      <div className="job__title">JobFinder</div>
      <div className="signup__buttons">
        <button className="header__login" onClick={loginPage}>
          Login
        </button>
        <button className="header__register" onClick={signupPage}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;

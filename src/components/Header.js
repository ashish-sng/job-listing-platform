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
      {/* <div className="headerImage__1">
        <img src="../assets/headerImages/header2.png" alt="" />
      </div>
      <div className="headerImage__2">
        <img src="../assets/headerImages/header3.png" alt="" />
      </div>
      <div className="headerImage__3">
        <img src="../assets/headerImages/header4.png" alt="" />
      </div> */}
      <div className="job__title">jobFinder</div>
      <div className="signup__buttons">
        <button className="login" onClick={loginPage}>
          Login
        </button>
        <button className="register" onClick={signupPage}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;

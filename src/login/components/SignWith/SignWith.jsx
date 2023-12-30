import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SignWith = ({
  className,
  text = "Sign up with Google",
  googleIcon = "https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/google-icon-1.png",
}) => {
  return (
    <div className={`sign-with ${className}`}>
      <img className="google-icon" alt="Google icon" src={googleIcon} />
      <div className="sign-up-with-google-wrapper">
        <div className="sign-up-with-google">{text}</div>
      </div>
    </div>
  );
};

SignWith.propTypes = {
  text: PropTypes.string,
  googleIcon: PropTypes.string,
};

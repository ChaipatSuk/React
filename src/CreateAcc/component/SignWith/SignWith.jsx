/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SignWith = ({
  className,
  googleIcon = "https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/google-icon-1.png",
  text = "Sign up with Google",
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
  googleIcon: PropTypes.string,
  text: PropTypes.string,
};

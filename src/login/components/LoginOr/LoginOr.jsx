import React from "react";
import "./style.css";

export const LoginOr = ({ className }) => {
  return (
    <div className={`login-or ${className}`}>
      <div className="overlap-group">
        <img
          className="line"
          alt="Line"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-7.svg"
        />
        <div className="frame">
          <div className="text-wrapper">Or</div>
        </div>
      </div>
    </div>
  );
};

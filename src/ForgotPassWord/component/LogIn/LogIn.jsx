import React from "react";
import "./style.css";

export const LogIn = ({ className }) => {
  return (
    <div className={`log-in ${className}`}>
      <div className="overlap-group">
        <img
          className="line"
          alt="Line"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-8.svg"
        />
        <img
          className="img"
          alt="Line"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-9.svg"
        />
      </div>
    </div>
  );
};

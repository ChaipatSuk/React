import React from "react";
import "./style.css";

export const ButtonLogin = ({ className }) => {
  return (
    <button className={`button-login ${className}`}>
      <div className="text-wrapper-8">login</div>
    </button>
  );
};

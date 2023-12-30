/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const LoginOr = ({ className }) => {
  return (
    <div className={`login-or ${className}`}>
      <div className="overlap-group">
        <img className="line" alt="Line" />
        <div className="frame">
          <div className="text-wrapper">Or</div>
        </div>
      </div>
    </div>
  );
};

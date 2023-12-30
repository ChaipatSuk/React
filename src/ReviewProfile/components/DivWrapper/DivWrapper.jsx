import PropTypes from "prop-types";
import React from "react";
import { Profile } from "../Profile";
import "./style.css";

export const DivWrapper = ({
  className,
  profileProfileClassName,
  text = "นมโกโก้โอ้โหอร่อยนะ",
  text1 = "รสชาติพอดี กลมกล่อมมากเลยครับ ถูกใจสุดๆ",
  text2 = "Username",
  divClassName,
}) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
      <div className="div">รีวิว :</div>
      <div className="text-wrapper-2">เมนู :</div>
      <img
        className="line"
        alt="Line"
        src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/657aada56acc5443e2abc279/img/line-14.svg"
      />
      <div className="text-wrapper-3">{text1}</div>
      <Profile className={profileProfileClassName} />
      <div className="username">{text2}</div>
    </div>
  );
};

DivWrapper.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

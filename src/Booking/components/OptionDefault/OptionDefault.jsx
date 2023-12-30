import React from "react";
import "./style.css";

export const OptionDefault = ({ className }) => {
  return (
    <div className={`option-default ${className}`}>
      <img
        className="dropdown"
        alt="Dropdown"
        src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/656ae2836922aedfb93f6fe5/img/dropdown-1@2x.png"
      />
      <div className="text-wrapper-5">เลือกช่วงเวลา</div>
    </div>
  );
};

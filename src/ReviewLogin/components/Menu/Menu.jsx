import React from "react";
import "./style.css";

export const Menu = ({ vectorClassName }) => {
  return (
    <div className="menu">
      <div className="text-wrapper-4">สั่งเมนู</div>
      <img
        className={`vector ${vectorClassName}`}
        alt="Vector"
        src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/cursor@2x.png"
      />
    </div>
  );
};

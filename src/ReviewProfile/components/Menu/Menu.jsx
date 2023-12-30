import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Menu = ({
  vectorClassName,
  vector = "https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/6575d5b0ed28baa6bd577948/img/vector-4@2x.png",
}) => {
  return (
    <div className="menu">
      <div className="text-wrapper-4">สั่งเมนู</div>
      <img className={`vector ${vectorClassName}`} alt="Vector" src={vector} />
    </div>
  );
};

Menu.propTypes = {
  vector: PropTypes.string,
};

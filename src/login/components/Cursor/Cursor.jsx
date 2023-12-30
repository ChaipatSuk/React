import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Cursor = ({
  property1,
  className,
  cursorClassName,
  cursor = "https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/vector-4-9@2x.png",
}) => {
  return (
    <div className={`cursor ${property1} ${className}`}>
      {property1 === "invisible" && <img className={`img-2 ${cursorClassName}`} alt="Cursor" src={cursor} />}
    </div>
  );
};

Cursor.propTypes = {
  property1: PropTypes.oneOf(["invisible", "visible"]),
  cursor: PropTypes.string,
};
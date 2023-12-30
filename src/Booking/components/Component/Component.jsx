import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ className, divClassName, divClassNameOverride, text = "Shiawase.s" }) => {
  return (
    <div className={`component ${className}`}>
      <div className={`text-wrapper-6 ${divClassName}`}>Shiawase</div>
      <div className={`shiawase-s ${divClassNameOverride}`}>{text}</div>
    </div>
  );
};

Component.propTypes = {
  text: PropTypes.string,
};

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonCreate = ({ className, divClassName, text = "Create Account" }) => {
  return (
    <div className={`button-create ${className}`}>
      <div className={`create-account ${divClassName}`}>{text}</div>
    </div>
  );
};

ButtonCreate.propTypes = {
  text: PropTypes.string,
};

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1, className }) => {
  return <div className={`property-default-wrapper ${className}`} />;
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};

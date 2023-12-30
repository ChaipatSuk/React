import PropTypes from "prop-types";
import React from "react";
import { Component } from "../Component";
import "./style.css";

export const ComponentWrapper = ({
  className,
  componentText = "Shiawase.s",
  componentDivClassName,
  componentDivClassNameOverride,
}) => {
  return (
    <div className={`component-wrapper ${className}`}>
      <Component
        className="component-4"
        divClassName={componentDivClassNameOverride}
        divClassNameOverride={componentDivClassName}
        text={componentText}
      />
      <img
        className="image"
        alt="Image"
        src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/656ae2836922aedfb93f6fe5/img/image-2@2x.png"
      />
      <img
        className="image-2"
        alt="Image"
        src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/656ae2836922aedfb93f6fe5/img/image-1@2x.png"
      />
    </div>
  );
};

ComponentWrapper.propTypes = {
  componentText: PropTypes.string,
};
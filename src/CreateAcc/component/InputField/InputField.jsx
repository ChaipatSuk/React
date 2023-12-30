/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Cursor } from "../Cursor";
import "./style.css";

export const InputField = ({ property1, className, text = "First name", frameClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`input-field ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {["default", "hover"].includes(state.property1) && (
        <div className={`first-name-wrapper ${frameClassName}`}>
          <div className="first-name">{text}</div>
        </div>
      )}

      {state.property1 === "click" && (
        <>
          <div className="div-wrapper">
            <div className="first-name-2">{text}</div>
          </div>
          <Cursor
            className="cursor-instance"
            cursor="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/vector-4@2x.png"
            cursorClassName="instance-node"
            property1="invisible"
          />
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "hover",
        };
    }
  }

  if (state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "click":
        return {
          property1: "click",
        };
    }
  }

  if (state.property1 === "click") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

InputField.propTypes = {
  property1: PropTypes.oneOf(["click", "hover", "default"]),
  text: PropTypes.string,
};

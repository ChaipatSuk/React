import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PrivateTable = ({ stateProp, className, divClassName, text = "P1" }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`private-table state-2-${state.state} ${className}`}
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
      <div className={`p ${divClassName}`}>{text}</div>
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hover",
        };
    }
  }

  if (state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "default",
        };

      case "click":
        return {
          state: "click",
        };
    }
  }

  if (state.state === "click") {
    switch (action) {
      case "click":
        return {
          state: "default",
        };
    }
  }

  return state;
}

PrivateTable.propTypes = {
  stateProp: PropTypes.oneOf(["click", "hover", "default"]),
  text: PropTypes.string,
};

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const StateDefaultWrapper = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`state-default-wrapper state-${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    />
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

StateDefaultWrapper.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "default"]),
};

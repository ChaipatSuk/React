import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const MeetingTable = ({ stateProp, className, divClassName, text = "M1" }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`meeting-table state-4-${state.state} ${className}`}
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
      <div className={`m ${divClassName}`}>{text}</div>
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

MeetingTable.propTypes = {
  stateProp: PropTypes.oneOf(["click", "hover", "default"]),
  text: PropTypes.string,
};

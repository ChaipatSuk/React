import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const CalendarIcon = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`calendar-icon ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <img
        className={`img-2 state-6-${state.state}`}
        alt="Calendar icon"
        src={
          state.state === "hover"
            ? "https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/656ae2836922aedfb93f6fe5/img/calendar-icon-1-1@2x.png"
            : "https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/656ae2836922aedfb93f6fe5/img/calendar-icon-1@2x.png"
        }
      />
    </div>
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

CalendarIcon.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "default"]),
};

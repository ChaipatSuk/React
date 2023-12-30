import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const NavInfomation = ({ property1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`nav-infomation property-1-2-${state.property1}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="text-wrapper-3">ข้อมูลร้าน</div>
      {state.property1 === "variant-2" && (
        <img
          className="vector-3"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/vector-3-4.svg"
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

NavInfomation.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};

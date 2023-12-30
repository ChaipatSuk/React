import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export const NavReviewProfile = ({ property1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <Link
      className={`nav-review-profile property-1-0-${state.property1}`}
      to="/index"
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="text-wrapper-6">รีวิว</div>
      {state.property1 === "variant-2" && (
        <img
          className="vector-2"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/vector-3-5.svg"
        />
      )}
    </Link>
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

NavReviewProfile.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
//import { Link } from "react-router-dom";
import "./style.css";

export const NavReviewLogin = ({ property1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });
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

NavReviewLogin.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};

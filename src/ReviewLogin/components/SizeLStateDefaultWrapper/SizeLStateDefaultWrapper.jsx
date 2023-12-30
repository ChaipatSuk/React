import PropTypes from "prop-types";
import React from "react";
import { HeaderNavLogin } from "../../icons/HeaderNavLogin/HeaderNavLogin"
import { HeaderNavMenu3 } from "../../icons/HeaderNavMenu3/HeaderNavMenu3";
import { ButtonLogin } from "../ButtonLogin";
import { Menu } from "../Menu";
import { NavBookLogin } from "../NavBookLogin";
import { NavInfomation } from "../NavInfomation";
import { NavReviewLogin } from "../NavReviewLogin";
import "./style.css";

export const SizeLStateDefaultWrapper = ({ size, state, className, menuVectorClassName }) => {
  return (
    <div className={`size-l-state-default-wrapper ${size} ${className}`}>
      {size === "l" && (
        <div className="nav-center">
          <Menu vectorClassName={menuVectorClassName} />
          <NavBookLogin property1="default" />
          <NavReviewLogin property1="default" />
          <NavInfomation property1="default" />
        </div>
      )}

      {["l", "s"].includes(size) && (
        <img
          className="png"
          alt="Png"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/-----------png-1.png"
        />
      )}

      {size === "l" && <ButtonLogin className="button-login-instance" />}

      {size === "m" && (
        <div className="nav-logo">
          <img
            className="line-2"
            alt="Line"
            src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-5-2.svg"
          />
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="shiawase"> shiawase</div>
        </div>
      )}

      {size === "s" && (
        <>
          <HeaderNavMenu3 className="header-nav-menu" />
          <HeaderNavLogin className="header-nav-login" />
        </>
      )}
    </div>
  );
};

SizeLStateDefaultWrapper.propTypes = {
  size: PropTypes.oneOf(["l", "m", "s"]),
  state: PropTypes.oneOf(["default"]),
};

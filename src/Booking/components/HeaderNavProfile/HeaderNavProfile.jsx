import PropTypes from "prop-types";
import React from "react";
import { ButtonProfile } from "./ButtonProfile";
import { Menu } from "../Menu";
import { NavBookProfile } from "./NavBookProfile";
import { NavInfomation } from "../NavInfomation";
import { NavReviewProfile } from "../NavReviewProfile";
import { StateDefaultWrapper } from "../StateDefaultWrapper";
import "./style.css";

export const HeaderNavProfile = ({
  property1,
  property2,
  className,
  menuVectorClassName,
  stateDefaultWrapperStateDefaultClassName,
}) => {
  return (
    <div className={`header-nav-profile ${className}`}>
      <img
        className="png"
        alt="Png"
        src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/656ae2836922aedfb93f6fe5/img/-----------png-1@2x.png"
      />
      <div className="nav-center">
        <div className="nav-center-2">
          <Menu vectorClassName={menuVectorClassName} />
          <NavBookProfile property1="default" />
          <NavReviewProfile property1="default" />
          <NavInfomation property1="default" />
        </div>
      </div>
      <ButtonProfile className="button-profile-default" />
      <StateDefaultWrapper className={stateDefaultWrapperStateDefaultClassName} stateProp="default" />
    </div>
  );
};

HeaderNavProfile.propTypes = {
  property1: PropTypes.oneOf(["l-profile"]),
  property2: PropTypes.oneOf(["default"]),
};

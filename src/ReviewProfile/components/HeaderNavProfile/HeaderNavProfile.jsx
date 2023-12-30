import PropTypes from "prop-types";
import React from "react";
import { ButtonProfile } from "../ButtonProfile";
import { Menu } from "../Menu";
import { NavBookProfile } from "../NavBookProfile";
import { NavInfomation } from "../NavInfomation";
//import { NavReviewProfile } from "../NavReviewProfile";
import { StateDefaultWrapper } from "../StateDefaultWrapper";
import "./style.css";

export const HeaderNavProfile = ({
  property1,
  property2,
  className,
  menuVectorClassName,
  menuVector = "https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/6575d5b0ed28baa6bd577948/img/vector-4@2x.png",
  stateDefaultWrapperStateDefaultClassName,
}) => {
  return (
    <div className={`header-nav-profile ${className}`}>
      <img
        className="png"
        alt="Png"
        src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/-----------png-1.png"
      />
      <div className="nav-center">
        <div className="nav-center-2">
          <Menu vector={menuVector} vectorClassName={menuVectorClassName} />
          <NavBookProfile property1="default" />
          
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
  menuVector: PropTypes.string,
};

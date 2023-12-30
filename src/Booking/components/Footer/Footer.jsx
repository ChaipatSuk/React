import React from "react";
import { ComponentWrapper } from "../ComponentWrapper";
import "./style.css";

export const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="text-wrapper-7">ABOUT US</div>
      <p className="address">
        <span className="span">
          Address : <br />
        </span>
        <span className="text-wrapper-8">
          9997 Bakerysocute Road, Coppcereals Sub-district, <br />
          Muang District, Bangkok, 10400
        </span>
      </p>
      <p className="phone-number">
        <span className="span">
          Phone number : <br />
        </span>
        <span className="text-wrapper-8">09x-xxxxxxx</span>
      </p>
      <div className="text-wrapper-9">Social media :</div>
      <ComponentWrapper
        className="component-5"
        componentDivClassName="component-instance"
        componentDivClassNameOverride="component-5-instance"
        componentText="shiawase.s"
      />
      <p className="text-wrapper-10">©2023 Coffee Concepts Retail Co.,Ltd. All rights reserved.</p>
    </div>
  );
};

import React,{useState} from "react";
import { ButtonCreate } from "./component/ButtonCreate";
import { InputField } from "./component/InputField";
import { LogIn } from "./component/LogIn";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const ForgotPassWord = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Login');
  };

  const handleButtonLoginClick = () => {
    navigate('/');
  };
  return (
    <div className="ForgotPassword">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="white-bg-wrapper">
            <div className="white-bg">
              <div className="div">Forgot Password</div>
              <InputField
                className="input-field-instance"
                frameClassName="design-component-instance-node"
                property1="default"
                text="Email"
              />
              <LogIn className="log-in-instance" />
              <ButtonCreate className="button-create-account" divClassName="button-create-instance" text="Send" />
              <div className="text-wrapper-2" onClick={handleButtonClick}>Back to login</div>
            </div>
          </div>
          <div className="nav-logo">
            <div className="shiawase" onClick={handleButtonLoginClick}> shiawase</div>
            <img
              className="line-2"
              alt="Line"
              src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-5.svg"
            />
            <div className="ellipse" />
            <div className="ellipse-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassWord;

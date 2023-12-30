import React,{useState} from "react";
import { ButtonCreate } from "./component/ButtonCreate/ButtonCreate";
import { InputField } from "./component/InputField/InputField";
import { LogIn } from "./component/LogIn/LogIn";
import { LoginOr } from "./component/LoginOr/LoginOr";
import { SignWith } from "./component/SignWith/SignWith";
// import { InputField } from "./components/InputField";
// import { LogIn } from "./components/LogIn";
// import { LoginOr } from "./components/LoginOr";
// import { SignWith } from "./components/SignWith";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const CreateAccount = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Login');
  };
  const handleButtonLoginClick = () => {
    navigate('/');
  };
  return (
    <div className="CreateAccount">
      <div className="frame-wrapper">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-2">
              <div className="white-bg">
                <div className="text-wrapper-3">Create Account</div>
                <LoginOr className="login-or-instance" />
                <p className="already-have-an">
                  <span className="span">Already have an account? </span>
                  <span className="text-wrapper-4"  onClick={handleButtonClick}>Login</span>
                </p>
                <LogIn className="log-in-instance" />
                <InputField className="input-field-instance" property1="default" />
                <InputField className="design-component-instance-node" property1="default" text="Last name" />
                <InputField className="input-field-3" frameClassName="input-field-2" property1="default" text="Email" />
                <InputField
                  className="input-field-4"
                  frameClassName="input-field-2"
                  property1="default"
                  text="Password"
                />
                <ButtonCreate className="button-create-account" />
                <SignWith className="sign-with-instance" />
                <SignWith
                  className="sign-with-2"
                  googleIcon="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/google-icon-1-1.png"
                  text="Sign up with Facebook"
                />
              </div>
              <img
                className="login"
                alt="Login"
                src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/login-1.png"
              />
            </div>
            <div className="nav-logo">
              <div className="shiawase" onClick={handleButtonLoginClick}> shiawase</div>
              <img
                className="line-3"
                alt="Line"
                src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-5.svg"
              />
              <div className="ellipse" />
              <div className="ellipse-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateAccount;
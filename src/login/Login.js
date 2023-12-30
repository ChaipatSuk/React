import React,{useState} from "react";
import { ButtonCreate } from "./components/ButtonCreate";
import { InputField } from "./components/InputField";
import { LogIn } from "./components/LogIn";
import { LoginOr } from "./components/LoginOr";
import { SignWith } from "./components/SignWith";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };
  const handleForgotClick = () => {
    navigate('/ForgotPassWord');
  };
  return (
    <div className="Login">
      <div className="frame-wrapper">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-2">
              <div className="white-bg">
                <div className="text-wrapper-2">Login</div>
                <LoginOr className="login-or-instance" />
                <LogIn className="log-in-instance" />
                <InputField
                  className="input-field-instance"
                  frameClassName="design-component-instance-node"
                  property1="default"
                  text="Email"
                />
                <InputField
                  className="input-field-2"
                  frameClassName="design-component-instance-node"
                  property1="default"
                  text="Password"
                />
                <ButtonCreate className="button-create-account" divClassName="button-create-instance" text="login" />
                <SignWith className="sign-with-instance" text="Sign in with Google" />
                <SignWith
                  className="sign-with-2"
                  googleIcon="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/google-icon-1-1.png"
                  text="Sign in with Facebook"
                />
                <div className="text-wrapper-3"onClick={handleForgotClick}>Forgot Password</div>
              </div>
              <img
                className="login"
                alt="Login"
                src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/login-1.png"
              />
            </div>
            <div className="nav-logo">
              <div className="shiawase" onClick={handleButtonClick}> shiawase</div>
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
 export default Login;
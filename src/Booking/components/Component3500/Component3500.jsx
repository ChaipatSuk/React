import React,{useState} from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Component3500 = ({ className, divClassName }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/BookingOrder');
  };
  return (
    <div className={`component-3500 ${className}`}>
      <div className={`text-wrapper-4 ${divClassName}`} onClick={handleButtonClick}>ถัดไป</div>
    </div>
  );
};

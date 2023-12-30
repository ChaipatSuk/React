import React, { useState } from "react";
import "./NavBar.css";
import logo1 from "../../../img/logo1.png";
import Information from "../../InformationPopup/Information";
import { useNavigate } from 'react-router-dom'; 

function NavBar() {
  const [showPopup, setShowPopup] = useState(false);
  const [showOrderMenu, setShowOrderMenu] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleOrderMenu = () => {
    setShowOrderMenu(!showOrderMenu);
  };
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ReviiewLogin');
  };

  const handleButtonLoginClick = () => {
    navigate('/CreateAccount');
  };

  const handleButtonBookingClick = () => {
    navigate('/BookingTable');
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <a href="logo"><img src={logo1} alt="logo" /></a>
      </div>
      <div className="n-center">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li className="dropdown" onClick={toggleOrderMenu}>
              <button className="order_menu">สั่งเมนู</button>
              {showOrderMenu && (
                <div className="dropdown-content">
                  <a href="LinkOrderMenuPage">เมนู</a>
                  <a href="LinkMixMenuPage">mix เมนู</a>
                </div>
              )}
            </li>
            <li>
              <button className="bookingtable" onClick={handleButtonBookingClick}>จองที่นั่ง</button>
            </li>
            <li>
              <button className="review" onClick={handleButtonClick}>รีวิว</button>
            </li>
            <li>
              <button className="information" onClick={togglePopup}>
                ข้อมูลร้าน
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="n-right">
        <button className="button n-button" onClick={handleButtonLoginClick}>login</button>
      </div>

      {showPopup && (
        <Information togglePopup={togglePopup}/>
      )}
    </div>
  );
}

export default NavBar;

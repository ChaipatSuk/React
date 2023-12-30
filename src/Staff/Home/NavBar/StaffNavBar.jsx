import React, { useState } from "react";
import "./StaffNavBar.css";
import logo from "../../../img/logo1.png";
import { useNavigate } from "react-router-dom";
import Information from "../../../Component/InformationPopup/Information";


function StaffNavBar() {
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
    navigate("/ReviewPage");
  };
  return (
    <div className="StaffNavBar">
      <div className="n-wrapper">
        <div className="n-left">
          <a href="logostaffpage">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="n-center">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li className="dropdown" onClick={toggleOrderMenu}>
                <button className="order_menu">สั่งเมนู</button>
                {showOrderMenu && (
                  <div className="dropdowncontent">
                    <a href="LinkStaffOrderMenuPage">เมนู</a>
                    <a href="LinkStaffMixMenuPage">mix เมนู</a>
                  </div>
                )}
              </li>
              <li>
                <button className="bookingtable">จองที่นั่ง</button>
              </li>
              <li>
                <button className="review" onClick={handleButtonClick}>
                  รีวิว
                </button>
              </li>
              <li>
                <button className="information" onClick={togglePopup}>
                  ข้อมูลร้าน
                </button>
              </li>
              <li>
                <button className="listmenu">ลิสต์เมนู</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="n-right">
          <button className="button n-button">login</button>
        </div>

        {showPopup && <Information togglePopup={togglePopup} />}
      </div>
    </div>
  );
}

export default StaffNavBar;

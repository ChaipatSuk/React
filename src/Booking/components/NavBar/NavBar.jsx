import React, { useState }from "react";
import "./NavBar.css";
import logo1 from "../../../img/logo1.png";

function NavBar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <a href="logo"><img src={logo1} alt="logo" /></a>
      </div>
      <div className="n-center">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li><a href="/order_menu">สั่งเมนู</a></li>
            <li><a href="/bookingtable">จองที่นั่ง</a></li>
            <li><a href="/review">รีวิว</a></li>
            <li><a href="/information">ข้อมูลร้าน</a></li>
          </ul>
        </div>
      </div>
      <div className="n-right">
        <button className="button n-button">login</button>
      </div>
    </div>
  );
}

export default NavBar;
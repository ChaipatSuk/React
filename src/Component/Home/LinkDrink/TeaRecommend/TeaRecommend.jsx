import React from "react";
import "./TeaRecommend.css";
import FrameMenu from "../../../../img/frameMenu.jpg";
import GreenTea from "../../../../img/greenteamilk.png";
import GreenTeaChoc from "../../../../img/greenteachoc.png";
import ThaiTea from "../../../../img/thaiteachoc.png";

function TeaRecommend() {
  return (
    <div className="TeaRecommend">
      <h3 className="TeaTitle">ชา</h3>
      <div className="PhotoTeaRecommend">
        <div className="FrameTeaImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="TeaImageSection">
            <img src={GreenTea} alt="GreenTea"></img>
          </div>
          <h4>ชาเขียวเสียวฟันนมสด</h4>
        </div>
        <div className="FrameTeaImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="TeaImageSection">
            <img src={GreenTeaChoc} alt="GreenTeaChoc"></img>
          </div>
          <h4>กรีนทีช็อกโก้ว้าว</h4>
        </div>
        <div className="FrameTeaImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="TeaImageSection">
            <img src={ThaiTea} alt="ThaiTea"></img>
          </div>
          <h4>ชาเย็นช็อกโก้ฉ่ำ</h4>
        </div>
      </div>
    </div>
  );
}

export default TeaRecommend;

import React from "react";
import "./BakeryRowOne.css";
import FrameMenu from "../../../../img/frameMenu.jpg";
import ChocoBread from "../../../../img/choco bread.png";
import ChocToast from "../../../../img/choco toast.png";
import RaspberyPancake from "../../../../img/raspberry pancake.png";

function BakeryRowOne() {
  return (
    <div className="BakeryRowOne">
      <h3 className="BakeryTitle">เบเกอรี่</h3>
      <div className="PhotoBakeryRecommend">
        <div className="FrameBakeryImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="BakeryImageSection">
            <img src={ChocoBread} alt="ChocoBread"></img>
          </div>
          <h4>ปังปิ้งช็อกโก้ฉ่ำ</h4>
        </div>
        <div className="FrameBakeryImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="BakeryImageSection">
            <img src={ChocToast} alt="ChocoToast"></img>
          </div>
          <h4>ช็อกโก้ว้าวโทสต์</h4>
        </div>
        <div className="FrameBakeryImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="BakeryImageSection">
            <img src={RaspberyPancake} alt="RaspberyPancake"></img>
          </div>
          <h4>แพนเค้กราสเบอรี่ฟรุ๊งฟริ๊ง</h4>
        </div>
      </div>
    </div>
  );
}

export default BakeryRowOne;

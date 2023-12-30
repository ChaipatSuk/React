import React from "react";
import "./BakeryRowTwo.css";
import FrameMenu from "../../../../img/frameMenu.jpg";
import RedVelvetPancake from "../../../../img/redvelvet pancake.png";
import Tiramisu from "../../../../img/tiramisu.png";
import RedVelvetCake from "../../../../img/redvelvet cake.png";

function BakeryRowTwo() {
  return (
    <div className="BakeryRowTwo">
      <div className="PhotoBakeryTwoRecommend">
        <div className="FrameBakeryTwoImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="BakeryTwoImageSection">
            <img src={RedVelvetPancake} alt="RedVelvetPancake"></img>
          </div>
          <h4>แพนเค้กเรดเวลเวทเวลใจ</h4>
        </div>
        <div className="FrameBakeryTwoImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="BakeryTwoImageSection">
            <img src={Tiramisu} alt="Tiramisu"></img>
          </div>
          <h4>ทีรามิสุ</h4>
        </div>
        <div className="FrameBakeryTwoImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="BakeryTwoImageSection">
            <img src={RedVelvetCake} alt="RedVelvetCake"></img>
          </div>
          <h4>เค้กเรดเวลเวท</h4>
        </div>
      </div>
    </div>
  );
}

export default BakeryRowTwo;

import React from "react";
import "./MilkMenu.css";

function MilkMenu() {
  return (
    <div className="MilkMenu">
      <h2>นม</h2>
      <div className="FrameAddMenu">
        <div className="FrameImageMenu"></div>
        <div className="HotandCoolPrice">
          <button className="HotPrice t-hotprice">ร้อน 75.-</button>
          <button className="CoolPrice t-coolprice">เย็น 80.-</button>
        </div>
        <div className="ButtonOrderNow">
          <button className="OrderNow t-ordernow">order now</button>
        </div>
      </div>
    </div>
  );
}

export default MilkMenu;

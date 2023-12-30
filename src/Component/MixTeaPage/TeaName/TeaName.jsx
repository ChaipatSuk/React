import React from "react";
import "./TeaName.css";

function TeaName() {
  return (
    <div className="TeaName">
      <div className="NameTea">
        <ul className="TextNameTea">
          <li>ชา</li>
        </ul>
        <div className="ChooseDrinkTeaType">
          <ul className="TextTeaType">
            <li className="TeaPrice">เพียงแก้วละ 109.-</li>
            <li>(เลือกส่วนผสมได้อย่างละ 1 รายการ)</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default TeaName;

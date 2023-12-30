import React from "react";
import "./ChooseCoffeeAdd.css";

function ChooseCoffeeAdd() {
  return (
    <div className="ChooseCoffeeAdd">
      <h3 className="NumberFourCoffeeAdd">4. ส่วนผสมเพิ่มเติม</h3>
      <select className="TypeCoffeeAdd" defaultValue="ChooseTypeCoffeeAdd">
        <option value="ChooseTypeCoffeeAdd" disabled hidden>
          เลือกส่วนผสม
        </option>
        <option value="NotCoffeeAdd">ไม่ใส่ส่วนผสมเพิ่มเติม</option>
        <option value="HotCoCo">โกโก้ร้อน</option>
        <option value="HotChocolate">ช็อกโกแลตร้อน</option>
        <option value="OrangeJuice">น้ำส้ม</option>
      </select>
    </div>
  );
}

export default ChooseCoffeeAdd;

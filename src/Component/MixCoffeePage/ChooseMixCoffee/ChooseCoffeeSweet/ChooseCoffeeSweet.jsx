import React from "react";
import "./ChooseCoffeeSweet.css";

function ChooseCoffeeSweet() {
  return (
    <div className="ChooseCoffeeSweet">
      <h3 className="NumberCoffeeThreeSweet">3. ความหวาน</h3>
      <select className="TypeCoffeeSweet" defaultValue="ChooseTypeCoffeeSweet">
        <option value="ChooseTypeCoffeeSweet" disabled hidden>
          เลือกส่วนผสม
        </option>
        <option value="NotCoffeeSweet">ไม่ใส่ความหวาน</option>
        <option value="CoffeeSweetMilk">นมข้นหวาน</option>
        <option value="CoffeeSugar">น้ำตาล</option>
        <option value="CoffeeSyrup">น้ำเชื่อม</option>
        <option value="CoffeeCaramalSyrup">คาราเมลไซรัป</option>
      </select>
    </div>
  );
}

export default ChooseCoffeeSweet;

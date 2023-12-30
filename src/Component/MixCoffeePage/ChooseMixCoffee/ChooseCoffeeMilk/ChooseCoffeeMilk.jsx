import React from "react";
import "./ChooseCoffeeMilk.css";

function ChooseCoffeeMilk() {
  return (
    <div className="ChooseCoffeeMilk">
      <h3 className="NumberTwoCoffeeMilk">2. นม</h3>
      <select className="TypeCoffeeMilk" defaultValue="ChooseTypeCoffeeMilk">
        <option value="ChooseTypeCoffeeMilk" disabled hidden>
          เลือกส่วนผสม
        </option>
        <option value="NotCoffeeMilk">ไม่ใส่นม</option>
        <option value="CoffeeCowMilk">นมวัว</option>
        <option value="CoffeeGoatMilk">นมแพะ</option>
        <option value="CoffeeSoyMilk">นมถั่วเหลือง</option>
        <option value="CoffeeAlmondMilk">นมอัลมอนด์</option>
        <option value="CoffeePistachioMilk">นมพิสทาชิโอ</option>
      </select>
    </div>
  );
}

export default ChooseCoffeeMilk;

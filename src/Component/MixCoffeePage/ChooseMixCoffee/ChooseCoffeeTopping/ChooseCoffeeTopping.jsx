import React from "react";
import "./ChooseCoffeeTopping.css";

function ChooseCoffeeTopping() {
  return (
    <div className="ChooseCoffeeTopping">
      <h3 className="NumberFiveCoffeeTopping">5. ตกแต่ง</h3>
      <select className="TypeCoffeeTopping" defaultValue="ChooseTypeCoffeeTopping">
        <option value="ChooseTypeCoffeeTopping" disabled hidden>
          เลือกส่วนผสม
        </option>
        <option value="NotCoffeeTopping">ไม่ตกแต่ง</option>
        <option value="MilkFoam">ฟองนม</option>
        <option value="CoffeeCream">ครีมกาแฟ</option>
        <option value="CoCoPowder">ผงโกโก้</option>
        <option value="CaramalSauce">ซอสคาราเมล</option>
        <option value="ChocolateSauce">ซอสช็อกโกแลต</option>
      </select>
    </div>
  );
}

export default ChooseCoffeeTopping;

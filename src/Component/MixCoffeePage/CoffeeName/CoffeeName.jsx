import React from "react";
import "./CoffeeName.css";

function CoffeeName() {
  return (
    <div className=">CoffeeName">
      <div className="NameCoffee">
        <ul className="TextNameCoffee">
          <li>กาแฟ</li>
        </ul>
        <div className="ChooseDrinkCoffeeType">
          <ul className="TextCoffeeType">
            <li className="CoffeePrice">เพียงแก้วละ 119.-</li>
            <li>(เลือกส่วนผสมได้อย่างละ 1 รายการ)</li>
          </ul>
        </div>
        <div className="StraightLineCoffeeMenu"></div>
      </div>
    </div>
  );
}

export default CoffeeName;

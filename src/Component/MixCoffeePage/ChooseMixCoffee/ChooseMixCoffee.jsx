import React from "react";
import './ChooseMixCoffee.css'
import ChooseCoffeeMilk from "./ChooseCoffeeMilk/ChooseCoffeeMilk";
import ChooseCoffeeSweet from "./ChooseCoffeeSweet/ChooseCoffeeSweet";
import ChooseCoffeeAdd from "./ChooseCoffeeAdd/ChooseCoffeeAdd";
import ChooseCoffeeTopping from "./ChooseCoffeeTopping/ChooseCoffeeTopping";

function ChooseMixCoffee() {
  return (
    <div className="ChooseMixCoffee">
      <h3 className="NumberOneCoffee">1. กาแฟ</h3>
      <select className="TypeCoffee" defaultValue="ChooseTypeCoffee">
        <option value="ChooseTypeCoffee" disabled hidden>
          เลือกส่วนผสม
        </option>
        <option value="Ristretto">Ristretto</option>
        <option value="Espresso">Espresso</option>
        <option value="Lungo">Lungo</option>
      </select>
      <ChooseCoffeeMilk/>
      <ChooseCoffeeSweet/>
      <ChooseCoffeeAdd/>
      <ChooseCoffeeTopping/>
    </div>
  );
}

export default ChooseMixCoffee;

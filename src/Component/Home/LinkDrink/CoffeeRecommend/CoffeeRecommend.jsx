import React from "react";
import './CoffeeRecommend.css'
import FrameMenu from '../../../../img/frameMenu.jpg'
import Espresso from '../../../../img/espresso.png'
import Macchiato from '../../../../img/macchiato.png'
import OrangeCoffee from '../../../../img/orange juice americano.png'

function CoffeeRecommend() {
  return (
    <div className="CoffeeRecommend">
      <h3 className="CoffeeTitle">กาแฟ</h3>
      <div className="PhotoCoffeeRecommend">
        <div className="FrameCoffeeImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="CoffeeImageSection">
            <img src={Espresso} alt="Espresso"></img>
          </div>
          <h4>Espresso</h4>
        </div>
        <div className="FrameCoffeeImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="CoffeeImageSection">
            <img src={Macchiato} alt="Macchiato"></img>
          </div>
          <h4>Macchiato</h4>
        </div>
        <div className="FrameCoffeeImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="CoffeeImageSection">
            <img src={OrangeCoffee} alt="OrangeCoffee"></img>
          </div>
          <h4>Orange Juice Americano</h4>
        </div>
      </div>
    </div>
  );
}

export default CoffeeRecommend;

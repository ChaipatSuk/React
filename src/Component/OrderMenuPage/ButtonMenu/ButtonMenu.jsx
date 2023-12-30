import React, { useState } from 'react';
import './ButtonMenu.css';
import StaffListShowMenu from '../../../Staff/OrderMenuPage/StaffListShowMenu/StaffListShowMenu';
import CoffeeMenu from '../ListShowMenu/CoffeeMenu/CoffeeMenu';
import SodaMenu from '../ListShowMenu/SodaMenu/SodaMenu';
import BakeryMenu from '../ListShowMenu/BakeryMenu/BakeryMenu';
import TeaMenu from '../ListShowMenu/TeaMenu/TeaMenu';

function ButtonMenu() {
  const [showMilkContent, setShowMilkContent] = useState(false);
  const [showTeaContent, setShowTeaContent] = useState(false);
  const [showCoffeeContent, setShowCoffeeContent] = useState(false);
  const [showSodaContent, setShowSodaContent] = useState(false);
  const [showBakeryContent, setShowBakeryContent] = useState(false);

  return (
    <div className='ButtonMenu'>
      <div className='DrinkMilk'>
        <button className='milk-button' onClick={() => setShowMilkContent(!showMilkContent)}>
          นม
        </button>
        {showMilkContent && <StaffListShowMenu />}
      </div>
      <div className='DrinkTea'>
        <button className='tea-button' onClick={() => setShowTeaContent(!showTeaContent)}>
          ชา
        </button>
        {showTeaContent && <TeaMenu />}
      </div>
      <div className='DrinkCoffee'>
        <button className='coffee-button' onClick={() => setShowCoffeeContent(!showCoffeeContent)}>
          กาแฟ
        </button>
        {showCoffeeContent && <CoffeeMenu />}
      </div>
      <div className='DrinkSoda'>
        <button className='soda-button' onClick={() => setShowSodaContent(!showSodaContent)}>
          โซดา
        </button>
        {showSodaContent && <SodaMenu />}
      </div>
      <div className='DessertBakery'>
        <button className='bakery-button' onClick={() => setShowBakeryContent(!showBakeryContent)}>
          เบเกอรี่
        </button>
        {showBakeryContent && <BakeryMenu />}
      </div>
    </div>
  );
}

export default ButtonMenu;

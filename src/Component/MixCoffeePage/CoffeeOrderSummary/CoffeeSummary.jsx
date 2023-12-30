import React from 'react'
import "./CoffeeSummary.css";
import ListCoffeeChoose from './ListCoffeeChoose/ListCoffeeChoose';
import CoffeeHowToPay from './CoffeeHowToPay/CoffeeHowToPay';
import CoffeeSumOfMoney from './SumOfMoneyAndButtonConfirmOrder/CoffeeSumOfMoney';
import CoffeeButtonConfirm from './SumOfMoneyAndButtonConfirmOrder/ButtonConfirm/CoffeeButtonConfirm';
import ButtonChooseGetCoffee from './ButtonChooseGetADrink/ButtonChooseGetCoffee';


function CoffeeSummary() {
  return (
    <div className='CoffeeSummary'>
        <div className='FrameCoffeeOrderSummary'>
            <ul className='NameCoffeeOrderSummary'>
                <li>สรุปออเดอร์</li>
            </ul>
            <div className='LineUnderCoffeeNameOrder'></div>
            <ListCoffeeChoose/>
            <ButtonChooseGetCoffee/>
            <CoffeeHowToPay/>
            <CoffeeSumOfMoney/>
            <CoffeeButtonConfirm/>
            
        </div>
    </div>
    
  )
}

export default CoffeeSummary
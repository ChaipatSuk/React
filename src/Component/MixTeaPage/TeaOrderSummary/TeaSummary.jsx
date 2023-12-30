import React from 'react'
import "./TeaSummary.css";
import ListTeaChoose from './ListTeaChoose/ListTeaChoose';
import ButtonChooseGetDrink from './ButtonChooseGetADrink/ButtonChooseGetDrink';
import HowToPay from './HowToPay/HowToPay';
import SumOfMoney from './SumOfMoneyAndButtonConfirmOrder/SumOfMoney';
import ButtonConfirmOrder from './SumOfMoneyAndButtonConfirmOrder/ButtonConfirm/ButtonConfirmOrder';

function TeaSummary() {
  return (
    <div className='TeaSummary'>
        <div className='FrameOrderSummary'>
            <ul className='NameOrderSummary'>
                <li>สรุปออเดอร์</li>
            </ul>
            <div className='LineUnderNameOrder'></div>
          
            <ButtonChooseGetDrink/>
            <HowToPay/>
            <SumOfMoney/>
            <ButtonConfirmOrder/>
        </div>
    </div>
  )
}

export default TeaSummary;
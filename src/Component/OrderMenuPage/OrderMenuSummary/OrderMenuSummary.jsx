import React from 'react'
import './OrderMenuSummary.css'
import ButtonMenuGetDrink from './ButtonChooseGetDrink/ButtonMenuGetDrink'
import MenuHowToPay from './MenuHowToPay/MenuHowToPay'
import MenuSumOfMoney from './SumOfMoneyAndButtonConfirmOrder/MenuSumOfMoney'
import MenuButtonConfirm from './SumOfMoneyAndButtonConfirmOrder/MenuButtonConfirm/MenuButtonConfirm'
import ListMenuChoose from './ListMenuChoose/ListMenuChoose'

function OrderMenuSummary() {
  return (
    <div className='OrderMenuSummary'>
         <div className='FrameOrderMenuSummary'>
            <ul className='NameOrderMenuSummary'>
                <li>ออเดอร์ของฉัน</li>
            </ul>
            <div className='LineUnderNameOrder'></div>
            <ListMenuChoose/>
            <ButtonMenuGetDrink/>
            <MenuHowToPay/>
            <MenuSumOfMoney/>
            <MenuButtonConfirm/>
        </div>
    </div>
  )
}

export default OrderMenuSummary
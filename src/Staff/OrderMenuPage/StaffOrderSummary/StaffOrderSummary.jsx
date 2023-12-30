import React from 'react'
import './StaffOrderSummary.css'
import ListMenuChoose from '../../../Component/OrderMenuPage/OrderMenuSummary/ListMenuChoose/ListMenuChoose'
import ButtonMenuGetDrink from '../../../Component/OrderMenuPage/OrderMenuSummary/ButtonChooseGetDrink/ButtonMenuGetDrink'
import MenuHowToPay from '../../../Component/OrderMenuPage/OrderMenuSummary/MenuHowToPay/MenuHowToPay'
import MenuSumOfMoney from '../../../Component/OrderMenuPage/OrderMenuSummary/SumOfMoneyAndButtonConfirmOrder/MenuSumOfMoney'
import MenuButtonConfirm from '../../../Component/OrderMenuPage/OrderMenuSummary/SumOfMoneyAndButtonConfirmOrder/MenuButtonConfirm/MenuButtonConfirm'

function StaffOrderSummary() {
  return (
    <div className='StaffOrderSummary'>
        <div className='StaffFrameOrderMenuSummary'>
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

export default StaffOrderSummary
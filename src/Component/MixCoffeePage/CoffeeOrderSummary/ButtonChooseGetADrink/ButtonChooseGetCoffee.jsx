import React from 'react'
import "./ButtonChooseGetCoffee.css";

function ButtonChooseGetCoffee() {
  return (
    <div className='ButtonChooseGetCoffee'>
         <div className='CoffeePickUpAtCafe'>
            <button className='CoffeeCircleButtonPickUpAtCafe'></button>
            <ul className='CoffeeTextPickUpAtCafe'>
                <li>มารับเองที่ร้าน</li>
            </ul>
            <input
              type='text'
              className='PlaceholderPickUpAtCafe'
            />
        </div>
        <div className='CoffeeTableService'>
          <button className='CoffeeCircleButtonTableService'></button>
          <ul className='CoffeeTextTableService'>
            <li>เสิร์ฟที่โต๊ะ หมายเลข</li>
          </ul>
          <input
              type='text'
              className='PlaceholderTableService'
            />
        </div>
    </div>
  )
}

export default ButtonChooseGetCoffee
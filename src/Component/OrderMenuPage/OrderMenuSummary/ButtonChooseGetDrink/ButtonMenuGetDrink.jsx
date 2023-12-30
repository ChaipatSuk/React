import React from 'react'
import './ButtonMenuGetDrink.css'

function ButtonMenuGetDrink() {
  
  return (
    <div className='ButtonMenuGetDrink'>
        <div className='MenuPickUpAtCafe'>
            <button className='MenuCircleButtonPickUpAtCafe'></button>
            <ul className='TextPickUpAtCafe'>
                <li>มารับเองที่ร้าน</li>
            </ul>
            <input
              type='text'
              className='PlaceholderPickUpAtCafe'
            />
        </div>
        <div className='MenuTableService'>
          <button className='MenuCircleButtonTableService'></button>
          <ul className='MenuTextTableService'>
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

export default ButtonMenuGetDrink
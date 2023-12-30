import React from 'react'
import "./MixMenuName.css";

function MixMenuName() {
  return (
    <div className='MixMenuName'>
        <ul className='TextMixMenu'><li>Mix เมนูเองได้เลย</li></ul>
        <div className='StraightLineMixMenu'></div>
        <div className='ChooseDrinkType'>
            <ul className='TextDrinkType'><li>เลือกประเภทเครื่องดื่มที่ต้องการผสมเอง</li></ul>
        </div>
    </div>
  )
}

export default MixMenuName
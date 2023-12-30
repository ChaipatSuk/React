import React from 'react'
import './SodaRecommend.css'
import FrameMenu from '../../../../img/frameMenu.jpg'
import BlueSoda from '../../../../img/bluesoda.png'
import KiwiSoda from '../../../../img/kiwisoda.png'
import MelonSoda from '../../../../img/melonsoda.png'

function SodaRecommend() {
  return (
    <div className='SodaRecommend'>
          <h3 className="SodaTitle">โซดา</h3>
      <div className="PhotoSodaRecommend">
        <div className="FrameSodaImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="SodaImageSection">
            <img src={BlueSoda} alt="BlueSoda"></img>
          </div>
          <h4>บลูฮาวายโซดาซ่าทุกหยด</h4>
        </div>
        <div className="FrameSodaImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="SodaImageSection">
            <img src={KiwiSoda} alt="KiwiSoda"></img>
          </div>
          <h4>กีวี่โซดาหวานเจี๊ยบ</h4>
        </div>
        <div className="FrameSodaImageSection">
          <img src={FrameMenu} alt="FrameMenu"></img>
          <div className="SodaImageSection">
            <img src={MelonSoda} alt="MelonSoda"></img>
          </div>
          <h4>เมล่อนโซดาซ่าซี้ดสุดขั้ว</h4>
        </div>
      </div>
    </div>
  )
}

export default SodaRecommend
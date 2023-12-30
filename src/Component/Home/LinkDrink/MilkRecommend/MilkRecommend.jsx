import React from 'react'
import './MilkRecommend.css'
import FrameMenu from '../../../../img/frameMenu.jpg'
import CoCoMilk from '../../../../img/cocomilk.png'
import MintChocMilk from '../../../../img/mintchocmilk.png'
import TaroMilk from '../../../../img/taromilk.png'

function MilkRecommend() {
  return (
    <div className='MilkRecommend'>
        <h3 className='MilkTitle'>นม</h3>
        <div className='PhotoMilkRecommend'>
            <div className='FrameImageSection'>
                <img src={FrameMenu} alt='FrameMenu'></img>
                <div className='MilkImageSection'>
                    <img src={CoCoMilk} alt='CoCoMilk'></img>
                </div>
                <h4>นมโกโก้โอ้โหอร่อยนะ</h4>
            </div>
            <div className='FrameImageSection'>
                <img src={FrameMenu} alt='FrameMenu'></img>
                <div className='MilkImageSection'>
                    <img src={MintChocMilk} alt='MintChocMilk'></img>
                </div>
                <h4>นมโกโก้ว้าวสวีตมิ้นท์</h4>
            </div>
            <div className='FrameImageSection'>
                <img src={FrameMenu} alt='FrameMenu'></img>
                <div className='MilkImageSection'>
                    <img src={TaroMilk} alt='TaroMilk'></img>
                </div>
                <h4>นมเผือกฟรุ๊งฟริ๊ง</h4>
            </div>
        </div>
    </div>
  )
}

export default MilkRecommend
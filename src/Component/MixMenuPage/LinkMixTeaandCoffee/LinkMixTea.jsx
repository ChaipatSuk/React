import React from 'react'
import "./LinkMixTea.css";
import { Link } from 'react-router-dom';
import picmixtea from '../../../img/mixtea.png'

function LinkMixTea() {
  return (
    <div className='LinkMixTea'>
        <img src={picmixtea} alt='picturetea'></img>
        <div className='TextTea'>
          <ul>
            <li className='Tea'>Tea</li>
            <li className='Cha'>ชา</li>
          </ul>
        </div>
        <div className='TextPriceTeaandButtonMix'>
          <ul>
            <li className='TextPriceTea'>เพียงแก้วละ 109.-</li>
          </ul>
          <button className='ButtonTeaMixNow'>
            <a href='TextButtonTeaMixNow'>Mix now</a>
          </button>
        </div>
    </div>
  )
}

export default LinkMixTea
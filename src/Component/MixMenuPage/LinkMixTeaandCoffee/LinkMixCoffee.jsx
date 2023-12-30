import React from 'react'
import "./LinkMixCoffee.css";
import picmixcoffee from '../../../img/mixcoffee.png'

function LinkMixCoffee() {
  return (
    <div className='LinkMixCoffee'>
      <img src={picmixcoffee} alt='picturecoffee'></img>
      <div className='TextCoffee'>
          <ul>
            <li className='Coffee'>Coffee</li>
            <li className='Kafae'>กาแฟ</li>
          </ul>
        </div>
        <div className='TextPriceCoffeeandButtonMix'>
          <ul>
            <li className='TextPriceCoffee'>เพียงแก้วละ 119.-</li>
          </ul>
          <button className='ButtonCoffeeMixNow'>
            <a href='TextButtonCoffeeMixNow'>Mix now</a>
          </button>
        </div>
    </div>
  )
}

export default LinkMixCoffee
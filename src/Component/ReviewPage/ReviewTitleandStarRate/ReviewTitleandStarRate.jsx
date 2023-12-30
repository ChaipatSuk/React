import React from 'react'
import './ReviewTitleandStarRate.css'
import Star from '../../../img/pink star.png'

function ReviewTitleandStarRate() {
  return (
    <div className='ReviewTitleandStarRate'>
        <div className='ReviewNameandStar'>
            <h3>รีวิว</h3>
            <div className='StarRate'>
              <img className='PinkStar' src={Star} alt='Star'></img>
              <img className='PinkStar' src={Star} alt='Star'></img>
              <img className='PinkStar' src={Star} alt='Star'></img>
              <img className='PinkStar' src={Star} alt='Star'></img>
              <img className='PinkStar' src={Star} alt='Star'></img>
            </div>
        </div>
        <div className="StraightLineTeaMenu"></div>
    </div>
  )
}

export default ReviewTitleandStarRate
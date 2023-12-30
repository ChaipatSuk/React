import React from 'react'
import './DrinkRecommend.css'
import MilkRecommend from './MilkRecommend/MilkRecommend'
import TeaRecommend from './TeaRecommend/TeaRecommend'
import CoffeeRecommend from './CoffeeRecommend/CoffeeRecommend'
import SodaRecommend from './SodaRecommend/SodaRecommend'
import BakeryRowOne from '../LinkBakery/BakeryRowOne/BakeryRowOne'
import BakeryRowTwo from '../LinkBakery/BakeryRowTwo/BakeryRowTwo'

function DrinkRecommend() {
  return (
    <div className='DrinkRecommend'>
        <MilkRecommend/>
        <TeaRecommend/>
        <CoffeeRecommend/>
        <SodaRecommend/>
        <BakeryRowOne/>
        <BakeryRowTwo/>
    </div>
  )
}

export default DrinkRecommend
import React from 'react'
import { Route, Router } from 'react-router-dom'
import {RecommendMenu} from '../../TextRecommend/RecommendMenu'
import DrinkRecommend from '../../LinkDrink/DrinkRecommend'
import BakeryRecommend from '../../LinkBakery/BakeryRecommend'

function LinkTextDrinkandBakery() {
  return (
    <Router>
        <div className='LinkTextDrinkandBakery'>
        <Routes>
            <Route path="/drink" element={<DrinkRecommend/>} />
            <Route path="/bakery" element={<BakeryRecommend/>} />
          </Routes>
    </div>
    </Router>
  )
}

export default LinkTextDrinkandBakery
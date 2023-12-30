import React from 'react'
import './Home.css'
import NavBar from '../Home/NavBar/NavBar'
import MainPage from '../Home/ImageInfoHome/MainPage'
import OrderBooking from '../Home/LinkOrder/OrderBooking'
import Recommend from '../Home/TextRecommend/RecommendMenu'
import Footer from '../Home/Footer/Footer'
import DrinkRecommend from './LinkDrink/DrinkRecommend'
import BakeryRecommend from './LinkBakery/BakeryRecommend'

function Home() {
  return (
    <div className='Home'>
        <NavBar/>
        <MainPage/>
        <OrderBooking/>
        <Recommend/>
        <DrinkRecommend/>
        <Footer/>
    </div>
  )
}

export default Home
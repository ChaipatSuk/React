import React from 'react'
import "./MixCoffeePage.css";
import NavBar from '../Home/NavBar/NavBar';
import ArrowBackMixPage from '../MixTeaPage/ArrowBackToMixMenuPage/ArrowBackMixPage';
import PosterMixCoffee from './PosterMixCoffee/PosterMixCoffee';
import CoffeeName from './CoffeeName/CoffeeName';
import CoffeeSummary from './CoffeeOrderSummary/CoffeeSummary';
import ChooseMixCoffee from './ChooseMixCoffee/ChooseMixCoffee';
import Footer from '../Home/Footer/Footer'
function MixCoffeePage() {
  return (
    <div className='MixCoffeePage'>
        <NavBar/>
        <ArrowBackMixPage/>
        <PosterMixCoffee/>
        <CoffeeName/>
        <ChooseMixCoffee/>
        <CoffeeSummary/>
        <Footer/>
    </div>
  )
}

export default MixCoffeePage
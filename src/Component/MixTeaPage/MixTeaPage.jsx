import React from 'react'
import "./MixTeaPage.css";
import NavBar from '../Home/NavBar/NavBar'
import PosterMixTea from './PosterMixTea/PosterMixTea'
import TeaName from './TeaName/TeaName';
import ArrowBackMixPage from './ArrowBackToMixMenuPage/ArrowBackMixPage';
import TeaSummary from './TeaOrderSummary/TeaSummary';
import ChooseMixTea from './ChooseMixTeaDrink/ChooseMixTea';
import Footer from '../Home/Footer/Footer'


function MixTeaPage() {
  return (
    <div className='MixTeaPage'>
        <NavBar/>
        <ArrowBackMixPage/>
        <PosterMixTea/>
        <TeaName/>
        <ChooseMixTea/>
        
        <Footer/>
    </div>
  )
}

export default MixTeaPage
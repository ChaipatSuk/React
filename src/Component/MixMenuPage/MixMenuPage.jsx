import React from 'react'
import './MixMenuPage.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../Home/NavBar/NavBar'
import Footer from '../Home/Footer/Footer'
import ArrowButton from './ArrowBackToHome/ArrowButton';
import MixMenuName from './MixMenuName/MixMenuName'
import LinkMixTea from './LinkMixTeaandCoffee/LinkMixTea'
import LinkMixCoffee from './LinkMixTeaandCoffee/LinkMixCoffee'


function MixMenuPage() {
  return (
    <div className='MixMenuPage'>
        <NavBar/>
        <ArrowButton/>
        <MixMenuName/>
        <div className='LinkTeaCoffee'>
          <LinkMixTea/>
          <LinkMixCoffee/>
        </div>
        <Footer/>
    </div>
  )
}

export default MixMenuPage
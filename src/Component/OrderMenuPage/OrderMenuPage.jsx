import React from 'react'
import './OrderMenuPage.css'
import NavBar from '../Home/NavBar/NavBar'
import PosterMenu from '../OrderMenuPage/PosterMenu/PosterMenu'
import ButtonMenu from '../OrderMenuPage/ButtonMenu/ButtonMenu'
import Footer from '../Home/Footer/Footer'
import OrderMenuSummary from './OrderMenuSummary/OrderMenuSummary'
import ListShowMenu from './ListShowMenu/ListShowMenu'
import StaffListShowMenu from '../../Staff/OrderMenuPage/StaffListShowMenu/StaffListShowMenu'

function OrderMenuPage() {
  return (
    <div className='OrderMenuPage'>
        <NavBar/>
        <PosterMenu/>
        <ButtonMenu/>
        
        <Footer/>
    </div>
  )
}

export default OrderMenuPage
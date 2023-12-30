import React from 'react'
import './BookingOrder.css'
import NavBar from '../../Component/Home/NavBar/NavBar'
import PosterMenu from '../../Component/OrderMenuPage/PosterMenu/PosterMenu'
import ButtonMenu from '../../Component/OrderMenuPage/ButtonMenu/ButtonMenu'
import StaffListShowMenu from '../../Staff/OrderMenuPage/StaffListShowMenu/StaffListShowMenu'
import OrderMenuSummary from '../../Component/OrderMenuPage/OrderMenuSummary/OrderMenuSummary'
import Footer from '../../Component/Home/Footer/Footer'

function BookingOrder() {
  return (
    <div className='BookingOrder'>
        <NavBar/>
        <PosterMenu/>
        <ButtonMenu/>
        <OrderMenuSummary/>
        <Footer/>
    </div>
  )
}

export default BookingOrder
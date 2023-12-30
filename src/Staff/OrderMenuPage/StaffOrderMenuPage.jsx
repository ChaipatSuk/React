import React from 'react'
import './StaffOrderMenuPage.css'
import PosterMenu from '../../Component/OrderMenuPage/PosterMenu/PosterMenu'
import StaffNavBar from '../Home/NavBar/StaffNavBar'
import StaffListShowMenu from './StaffListShowMenu/StaffListShowMenu'
import StaffOrderSummary from './StaffOrderSummary/StaffOrderSummary'
import Footer from '../../Component/Home/Footer/Footer'
import StaffButtonMenu from './ฺButtonMenu/StaffButtonMenu'
  
function StaffOrderMenuPage() {
  return (
    <div className='StaffOrderMenuPage'>
        <StaffNavBar/>
        <PosterMenu/>
        <StaffButtonMenu/>
        <Footer/>
    </div>
  )
}

export default StaffOrderMenuPage
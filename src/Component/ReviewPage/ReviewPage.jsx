import React from 'react'
import './ReviewPage.css'
import NavBar from '../Home/NavBar/NavBar'
import ReviewTitleandStarRate from './ReviewTitleandStarRate/ReviewTitleandStarRate'
import Footer from '../Home/Footer/Footer'

function ReviewPage() {
  return (
    <div className='ReviewPage'>
        <NavBar/>
        <ReviewTitleandStarRate/>
        <Footer/>
    </div>
  )
}

export default ReviewPage
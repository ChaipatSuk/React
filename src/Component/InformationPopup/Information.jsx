import React from 'react'
import './Information.css'
import CafeInformation from '../../img/CafeInformation.png'

function Information({ togglePopup }) {
  return (
    <div className="Information">
          <img src={CafeInformation} alt='PhotoCafeInformation'></img>
          <button onClick={togglePopup}>X</button>
        </div>
  )
}

export default Information
import React,{useState} from 'react'
import "./CoffeeButtonConfirm.css";
import QRCodePage from '../../../../QRCodePage/QRCodePage';

function CoffeeButtonConfirm() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className='CoffeeButtonConfirm'>
        <button className='CoffeeConfirmOrder c-confirm' onClick={togglePopup}>
            ยืนยันออเดอร์
        </button>
        {showPopup && (
        <QRCodePage togglePopup={togglePopup}/>
      )}
    </div>
  )
}

export default CoffeeButtonConfirm
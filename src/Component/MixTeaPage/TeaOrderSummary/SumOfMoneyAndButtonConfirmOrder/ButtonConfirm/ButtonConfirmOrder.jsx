import React,{useState} from 'react'
import "./ButtonConfirmOrder.css";
import { useNavigate } from 'react-router-dom'; 
import QRCodePage from '../../../../QRCodePage/QRCodePage';

function ButtonConfirmOrder() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className='ButtonConfirmOrder'>
        <button className='ConfirmOrder t-confirm' onClick={togglePopup}>
            ยืนยันออเดอร์
        </button>
        {showPopup && (
        <QRCodePage togglePopup={togglePopup}/>
      )}
    </div>
  )
}

export default ButtonConfirmOrder
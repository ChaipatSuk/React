import React,{useState}  from 'react'
import './MenuButtonConfirm.css'
import QRCodePage from '../../../../QRCodePage/QRCodePage';

function MenuButtonConfirm() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className='MenuButtonConfirm'>
        <button className='MenuConfirmOrder m-confirm' onClick={togglePopup}>
            ยืนยันออเดอร์
        </button>
        {showPopup && (
        <QRCodePage togglePopup={togglePopup}/>
      )}
    </div>
  )
}

export default MenuButtonConfirm
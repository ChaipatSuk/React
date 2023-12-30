import React from 'react'
import './QRCodePage.css'
import PopupQRCode from '../../img/popup-qr code.png'
import QRCode from '../../img/qrcode.png'

function QRCodePage({togglePopup}) {
  return (
    <div className='QRCodePage'>
        <img src={PopupQRCode} alt='PopUpQRCode'></img>
        <img className='QRCodeimg' src={QRCode} alt='QRCode'></img>
        <button onClick={togglePopup}>ยกเลิก</button>
    </div>
  )
}

export default QRCodePage
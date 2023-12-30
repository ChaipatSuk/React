import React from 'react'
import './TextMenuHowToPay.css'

function TextMenuHowToPay() {
  return (
    <div className='TextMenuHowToPay'>
        <ul className="MenuTextPayMent">
            <li>วิธีชำระเงิน</li>
        </ul>
        <div className="MenuTextScanQRCode">
            <button className="MenuCircleButtonBlue"></button>
            <ul className="MenuTextScanQR">
                <li>Scan QR Code Prompay</li>
            </ul>
        </div>
        <div className="StraightLineUnderTextQR"></div>
    </div>
  )
}

export default TextMenuHowToPay
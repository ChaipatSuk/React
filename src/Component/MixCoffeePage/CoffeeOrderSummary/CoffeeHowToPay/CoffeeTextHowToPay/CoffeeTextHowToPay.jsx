import React from 'react'
import "./CoffeeTextHowToPay.css";

function CoffeeTextHowToPay() {
  return (
    <div className='CoffeeTextHowToPay'>
        <ul className="CoffeeTextPayMent">
            <li>วิธีชำระเงิน</li>
        </ul>
        <div className="CoffeeTextScanQRCode">
            <button className="CoffeeCircleButtonBlue"></button>
            <ul className="CoffeeTextScanQR">
                <li>Scan QR Code Prompay</li>
            </ul>
        </div>
        <div className="StraightLineUnderTextQR"></div>
    </div>
  )
}

export default CoffeeTextHowToPay
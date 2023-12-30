import React from "react";
import "./TextHowToPay.css";

function TextHowToPay() {
  return (
    <div className="TextHowToPay">
        <ul className="TextPayMent">
            <li>วิธีชำระเงิน</li>
        </ul>
        <div className="TextScanQRCode">
            <button className="CircleButtonBlue"></button>
            <ul className="TextScanQR">
                <li>Scan QR Code Prompay</li>
            </ul>
        </div>
        <div className="StraightLineUnderTextQR"></div>
    </div>
  );
}

export default TextHowToPay;

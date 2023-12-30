import React,{useState} from "react";
import "./OrderMenu.css";
import OrderMenu from "../../../img/ordermenu.PNG";
import MixMenu from "../../../img/mixmenu.PNG";
import Booking from "../../../img/booking.png";
import { useNavigate } from "react-router-dom";

function Order_Menu() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/BookingTable');
  };
  return (
    <div className="Link_Order">
      <div className="OrderMenu">
        <img src={OrderMenu} alt="ordermenu" />
      </div>
      <div className="ButtonOrder">
        <button className="Order ButtonOrderMenu">
          <a href="buttonorder">order now</a>
        </button>
      </div>
      <div className="MixMenu">
        <img src={MixMenu} alt="mixmenu" />
      </div>
      <div className="ButtonMixOrder">
        <button className="Mix ButtonMixMenu">
          <a href="buttonmixorder">order now</a>
        </button>
      </div>
      <div className="Booking">
        <img src={Booking} alt="bookingmenu" />
      </div>
      <div className="ButtonBooking">
        <button className="Book ButtonBooking" onClick={handleButtonClick}>
          book now
        </button>
      </div>
    </div>
  );
}

export default Order_Menu;

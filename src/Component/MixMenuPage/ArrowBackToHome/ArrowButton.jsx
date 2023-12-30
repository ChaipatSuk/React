import React from "react";
import "./ArrowButton.css";
import { useNavigate } from 'react-router-dom'; 

function ArrowButton() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };
  return (
    <div className="ArrowButton">
      <div className="Arrow-Carousel">
        <button className="button-arrow" onClick={handleButtonClick}>
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
      </div>
    </div>
  );
}

export default ArrowButton;

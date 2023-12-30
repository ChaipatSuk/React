import React from 'react';
import "./ArrowBackToMixPage.css";
import { useNavigate } from 'react-router-dom'; 

function ArrowBackMixPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/MixMenuPage');
  };

  return (
    <div className='ArrowBackMixPage'>
      <div className="ArrowLeft-BackMixPage">
        <button className="button-arrowmixpage" onClick={handleButtonClick}>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
      </div>
    </div>
  );
}

export default ArrowBackMixPage;

import React, { useState } from 'react';
import './ButtonChooseGetDrink.css';

function ButtonChooseGetDrink() {
  const [pickupClicked, setPickupClicked] = useState(false);
  const [tableServiceClicked, setTableServiceClicked] = useState(false);

  const handlePickupClick = () => {
    setPickupClicked(true);
    setTableServiceClicked(false);
  };

  const handleTableServiceClick = () => {
    setTableServiceClicked(true);
    setPickupClicked(false);
  };

  return (
    <div className="ButtonChooseGetDrink">
      <div className={pickupClicked ? 'PickUpAtCafe active' : 'PickUpAtCafe'}>
        <button className={pickupClicked ? 'CircleButtonPickUpAtCafe green' : 'CircleButtonPickUpAtCafe'} onClick={handlePickupClick}></button>
        <ul className="TextPickUpAtCafe">
          <li>มารับเองที่ร้าน เวลา</li>
        </ul>
        <input type="text" className="PlaceholderPickUpAtCafe" />
      </div>
      <div className={tableServiceClicked ? 'TableService active' : 'TableService'}>
        <button className={tableServiceClicked ? 'CircleButtonTableService green' : 'CircleButtonTableService'} onClick={handleTableServiceClick}></button>
        <ul className="TextTableService">
          <li>เสิร์ฟที่โต๊ะ หมายเลข</li>
        </ul>
        <input type="text" className="PlaceholderTableService" />
      </div>
    </div>
  );
}

export default ButtonChooseGetDrink;

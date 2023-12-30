import React,{useState} from "react";
import "./StaffButtonMenu.css";
import AddEditDeleteMenu from "../StaffListShowMenu/AddEditDeleteMenu/AddEditDeleteMenu";


function StaffButtonMenu() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="StaffButtonMenu">
      <div className="StaffDrinkMilk">
        <button className="Staffmilk-button">นม</button>
      </div>
      <div className="StaffDrinkTea">
        <button className="Stafftea-button">ชา</button>
      </div>
      <div className="StaffDrinkCoffee">
        <button className="Staffcoffee-button">กาแฟ</button>
      </div>
      <div className="StaffDrinkSoda">
        <button className="Staffsoda-button">โซดา</button>
      </div>
      <div className="StaffDessertBakery">
        <button className="Staffbakery-button">เบเกอรี่</button>
      </div>
      <button className='ButtonEdit b-edit'>แก้ไข</button>
      <button className='ButtonPlus b-plus' onClick={toggleContent}>+</button>
      {showContent && <AddEditDeleteMenu/>}
    </div>
  );
}

export default StaffButtonMenu;

import React, { useState } from "react";
import "./ChooseMixTea.css";
import ListTeaChoose from "../TeaOrderSummary/ListTeaChoose/ListTeaChoose";
import HowToPay from "../../MixTeaPage/TeaOrderSummary/HowToPay/HowToPay";
import { database } from "../../../Firebase"; // Assuming this import is correctly configured
import { collection, addDoc } from "firebase/firestore"; // Imported addDoc
import SumOfMoney from "../TeaOrderSummary/SumOfMoneyAndButtonConfirmOrder/SumOfMoney";

function ChooseMixTea() {
  const [selectedTea, setSelectedTea] = useState("");
  const [selectedMilk, setSelectedMilk] = useState("");
  const [selectedSweet, setSelectedSweet] = useState("");
  const [selectedTopping, setSelectedTopping] = useState("");

  const [form, setForm] = useState({});

  const mixTeaMenuRef = collection(database, "MixTeaMenu"); // Corrected variable name

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddData = async () => {
    try {
      const formData = {
        selectedTea,
        selectedMilk,
        selectedSweet,
        selectedTopping, // Adding selectedTea to the form data
        ...form,
      };

      await addDoc(mixTeaMenuRef, formData);
      // Optionally, perform actions after data addition
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  const getOptionText = (value) => {
    switch (value) {
      case "WhiteTea":
        return "ชาขาว";
      case "GreenTea":
        return "ชาเขียว";
      case "BlackTea":
        return "ชาดำ";
      case "OolongTea":
        return "ชาอู่หลง";
      case "HerbalTea":
        return "ชาสมุนไพร";
      default:
        return "";
    }
  };
  const getOptionMilkText = (value) => {
    switch (value) {
      case "NotMilk":
        return "ไม่ใส่นม";
      case "CowMilk":
        return "นมวัว";
      case "GoatMilk":
        return "นมแพะ";
      case "SoyMilk":
        return "นมถั่วเหลือง";
      case "AlmondMilk":
        return "นมอัลมอนด์";
      default:
        return "";
    }
  };

  const getOptionSweetText = (value) => {
    switch (value) {
      case "NotSweet":
        return "ไม่ใส่ความหวาน";
      case "SweetMilk":
        return "นมข้นหวาน";
      case "Sugar":
        return "น้ำตาล";
      case "Honey":
        return "น้ำผึ้ง";
      case "FruitSyrup":
        return "ไซรัปผลไม้";
      default:
        return "";
    }
  };

  const getOptionToppingText = (value) => {
    switch (value) {
      case "NotTopping":
        return "ไม่ตกแต่ง";
      case "Fruit":
        return "ผลไม้";
      case "MilkFoam":
        return "ฟองนม";
      case "CoCoPowder":
        return "ผงโกโก้";
      case "ChocolateSyrup":
        return "ไซรัปช็อกโกแลต";
      case "CaramalSyrup":
        return "ไซรัปคาราเมล";
      default:
        return "";
    }
  };

  const handleSelectChange = (event) => {
    setSelectedTea(event.target.value);
  };
  const handleSelectMilkChange = (event) => {
    setSelectedMilk(event.target.value);
  };
  const handleSelectSweetChange = (event) => {
    setSelectedSweet(event.target.value);
  };
  const handleSelectToppingChange = (event) => {
    setSelectedTopping(event.target.value);
  };

  //ปุ่มกดเลือกสถานที่รับ
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
    <div className="ChooseMixTea">
      <h3 className="NumberOneTea">1. ชา</h3>
      <select
        className="TypeTea"
        value={selectedTea}
        onChange={handleSelectChange}
      >
        <option value="ChooseTypeTea" disabled hidden>
          เลือกส่วนผสม
        </option>
        <option value="WhiteTea">ชาขาว</option>
        <option value="GreenTea">ชาเขียว</option>
        <option value="BlackTea">ชาดำ</option>
        <option value="OolongTea">ชาอู่หลง</option>
        <option value="HerbalTea">ชาสมุนไพร</option>
      </select>
      <ListTeaChoose selectedTea={selectedTea} getOptionText={getOptionText} />

      <div className="ChooseMixMilk">
        <h3 className="NumberTwoMilk">2. นม</h3>
        <div className="SelectedOptionDisplay">
          <select
            className="TypeMilk"
            value={selectedMilk}
            onChange={handleSelectMilkChange}
          >
            <option value="ChooseTypeMilk" disabled hidden>
              เลือกส่วนผสม
            </option>
            <option value="NotMilk">ไม่ใส่นม</option>
            <option value="CowMilk">นมวัว</option>
            <option value="GoatMilk">นมแพะ</option>
            <option value="SoyMilk">นมถั่วเหลือง</option>
            <option value="AlmondMilk">นมอัลมอนด์</option>
          </select>
          <ListTeaChoose
            selectedMilk={selectedMilk}
            getOptionText={getOptionMilkText}
          />
        </div>
      </div>

      <div className="ChooseMixSweet">
        <h3 className="NumberThreeSweet">3. ความหวาน</h3>
        <select
          className="TypeSweet"
          value={selectedSweet}
          onChange={handleSelectSweetChange}
        >
          <option value="ChooseTypeSweet" disabled hidden>
            เลือกส่วนผสม
          </option>
          <option value="NotSweet">ไม่ใส่ความหวาน</option>
          <option value="SweetMilk">นมข้นหวาน</option>
          <option value="Sugar">น้ำตาล</option>
          <option value="Honey">น้ำผึ้ง</option>
          <option value="FruitSyrup">ไซรัปผลไม้</option>
        </select>
        <ListTeaChoose
          selectedSweet={selectedSweet}
          getOptionText={getOptionSweetText}
        />
      </div>

      <div className="ChooseMixTopping">
        <h3 className="NumberFourTopping">4. ตกแต่ง</h3>
        <select
          className="TypeTopping"
          value={selectedTopping}
          onChange={handleSelectToppingChange}
        >
          <option value="ChooseTypeTopping" disabled hidden>
            เลือกส่วนผสม
          </option>
          <option value="NotTopping">ไม่ตกแต่ง</option>
          <option value="Fruit">ผลไม้</option>
          <option value="MilkFoam">ฟองนม</option>
          <option value="CoCoPowder">ผงโกโก้</option>
          <option value="ChocolateSyrup">ไซรัปช็อกโกแลต</option>
          <option value="CaramalSyrup">ไซรัปคาราเมล</option>
        </select>
        <ListTeaChoose
          selectedTopping={selectedTopping}
          getOptionText={getOptionToppingText}
        />
      </div>
      <div className="TeaSummary">
        <div className="FrameOrderSummary">
          <ul className="NameOrderSummary">
            <li>สรุปออเดอร์</li>
          </ul>
          <div className="LineUnderNameOrder"></div>
          <ListTeaChoose />
          <div className="ButtonChooseGetDrink">
            <div
              className={pickupClicked ? "PickUpAtCafe active" : "PickUpAtCafe"}
            >
              <button
                className={
                  pickupClicked
                    ? "CircleButtonPickUpAtCafe green"
                    : "CircleButtonPickUpAtCafe"
                }
                onClick={handlePickupClick}
              ></button>
              <ul className="TextPickUpAtCafe">
                <li>มารับเองที่ร้าน เวลา</li>
              </ul>
              <input  type="text" className="PlaceholderPickUpAtCafe" />
            </div>
            <div
              className={
                tableServiceClicked ? "TableService active" : "TableService"
              }
            >
              <button
                className={
                  tableServiceClicked
                    ? "CircleButtonTableService green"
                    : "CircleButtonTableService"
                }
                onClick={handleTableServiceClick}
              ></button>
              <ul className="TextTableService">
                <li>เสิร์ฟที่โต๊ะ หมายเลข</li>
              </ul>
              <input  type="text" className="PlaceholderTableService" />
            </div>
          </div>
          <HowToPay />
          <SumOfMoney/>
          <button className="SaveData s-data" onClick={handleAddData}>ยืนยันออเดอร์</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseMixTea;

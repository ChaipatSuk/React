import React, { useState, useEffect } from "react";
import "./StaffListShowMenu.css";
import { collection, onSnapshot,addDoc } from "firebase/firestore";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { database, imagedatabase } from "../../../Firebase";
import { orderBy, query } from "firebase/firestore";
import MenuHowToPay from "../../../Component/OrderMenuPage/OrderMenuSummary/MenuHowToPay/MenuHowToPay";
import MenuButtonConfirm from "../../../Component/OrderMenuPage/OrderMenuSummary/SumOfMoneyAndButtonConfirmOrder/MenuButtonConfirm/MenuButtonConfirm";

function StaffListShowMenu() {
  const [menuData, setMenuData] = useState([]);
  const [menuImages, setMenuImages] = useState([]);

  useEffect(() => {
    const unsubscribe = loadRealTime();
    return () => {
      unsubscribe();
    };
  }, []);

  const loadRealTime = () => {
    const unsubscribe = onSnapshot(
      query(collection(database, "table1"), orderBy("menu_name")),
      (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMenuData((prevData) => {
          const existingIds = prevData.map((item) => item.id);
          const filteredNewData = newData.filter(
            (item) => !existingIds.includes(item.id)
          );
          return [...prevData, ...filteredNewData];
        });
      }
    );

    return unsubscribe;
  };

  useEffect(() => {
    const fetchImageURLs = async () => {
      try {
        const imgs = await listAll(ref(imagedatabase, "files"));
        const urls = await Promise.all(
          imgs.items.map((val) => getDownloadURL(val))
        );
        setMenuImages(urls);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageURLs();
  }, []);

  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedMenuPrice, setSelectedMenuPrice] = useState(0);
  const [selectedMenus, setSelectedMenus] = useState([]);

  const handleOrderNow = (menuName, menuHotPrice) => {
    setSelectedMenu(menuName);
    setSelectedMenuPrice(menuHotPrice);
    setSelectedMenus([...selectedMenus, { name: menuName, price: menuHotPrice }]);
  };

  const calculateTotalPrice = () => {
    return selectedMenus.reduce((sum, menu) => sum + menu.price, 0);
  };
  
  const saveDataToFirestore = async () => {
    try {
      const ordersRef = collection(database, "orders"); // เลือก collection ที่ต้องการบันทึก
      const selectedMenusData = selectedMenus.map((menu) => ({
        name: menu.name,
        price: menu.price,
      }));
      await addDoc(ordersRef, { selectedMenus: selectedMenusData }); // บันทึกข้อมูลลง Firestore
      console.log("Data saved successfully!"); // แสดงข้อความเมื่อบันทึกสำเร็จ
    } catch (error) {
      console.error("Error saving data: ", error); // แสดงข้อความเมื่อเกิดข้อผิดพลาดในการบันทึก
    }
  };

  return (
    <div className="StaffListShowMenu">
      <h2>นม</h2>
      <div className="FrameAddMenu">
        {menuData.map((item, index) => (
          <div key={index} className="MenuItemContainer">
            <div className="FrameImageMenu">
              <div className="ShowImage">
                {menuImages[index] ? (
                  <img src={menuImages[index]} alt={`Image ${index}`} />
                ) : (
                  <span>No Image</span>
                )}
              </div>
            </div>
            <div className="AddNameMenuandDiscription">
              <h3 className="TextNameMenu">{item.menu_name}</h3>
              <h4 className="TextDescription">{item.menu_description}</h4>
            </div>
            <div className="HotandCoolPrice">
              <button
                className="HotPrice t-hotprice"
                onClick={() => handleOrderNow(item.menu_name, item.menu_hotprice)}
              >
                ร้อน {item.menu_hotprice} .-
              </button>
              <button 
              className="CoolPrice t-coolprice"
              onClick={() => handleOrderNow(item.menu_name, item.menu_coolprice)}>
                เย็น {item.menu_coolprice} .-
              </button>
            </div>
            <div className="ButtonOrderNow">
              <button
                className="OrderNow t-ordernow"
                onClick={() => setSelectedMenu(item.menu_name)}
              >
                order now
              </button>
            </div>
          </div>
        ))}
        <br />
      </div>
      <div className="FrameOrderMenuSummary">
      <ul className="NameOrderMenuSummary">
          <li>ออเดอร์ของฉัน</li>
        </ul>
        <div className="LineUnderNameOrder"></div>
        {selectedMenu && (
          <div className="SelectedMenu">
            <p>Selected menu: {selectedMenu}</p>
            <p>Price: {selectedMenuPrice} .-</p>
          </div>
        )}
         {selectedMenus.length > 0 && (
        <div className="SelectedMenu">
          <p>Selected menus:</p>
          <ul>
            {selectedMenus.map((menu, index) => (
              <li key={index}>{menu.name} - Price: {menu.price} .-</li>
            ))}
          </ul>
          <div className="MenuSumOfMoney">
            <ul className="MenuTextSumOfMoney">
              <li>รวม: {calculateTotalPrice()} บาท</li>
            </ul>
          </div>
        </div>
      )}
        <MenuHowToPay/>
        <button onClick={saveDataToFirestore}>Save Data</button>
        <MenuButtonConfirm/>
      </div>
    </div>
  );
}

export default StaffListShowMenu;
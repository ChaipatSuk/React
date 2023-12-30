import React, { useState, useEffect } from "react";
import "./AddEditDeleteMenu.css";
import { database } from "../../../../Firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc
} from "firebase/firestore";
import { imagedatabase } from "../../../../Firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { orderBy,query } from "firebase/firestore";

function AddEditDeleteMenu() {
  //ส่วนเพิ่มรูปลงdatabaseและเอาออกมาโชว์
  const [image, setImage] = useState("");
const [imgUrl, setImgUrl] = useState([]);
// Other states...

const handleClick = () => {
  if (image) {
    const imgRef = ref(imagedatabase, `files/${uuid()}`);
    uploadBytes(imgRef, image).then((value) => {
      console.log(value);
      getDownloadURL(value.ref).then((url) => {
        setImgUrl((data) => [...data, url]);
      });
    });
  }
};

useEffect(() => {
  const fetchImageURLs = async () => {
    try {
      const imgs = await listAll(ref(imagedatabase, "files"));
      const urls = await Promise.all(imgs.items.map((val) => getDownloadURL(val)));
      setImgUrl(urls);
    } catch (error) {
      console.error("Error fetching image URLs:", error);
    }
  };

  fetchImageURLs();
}, []);

// Rest of your code remains unchanged...


  //ส่วนเพิ่มข้อมูลลงdatabase
  const [form, setForm] = useState({});
  const [data, setData] = useState([]); //Show data
  const [editId, setEditId] = useState(null); //Edit data

  const table1Ref = collection(database, "table1");

  //ส่วนเอาข้อมูลออกมาแสดงจากfirebase

  useEffect(() => {
    const unsubscribe = loadRealTime();
    return () => {
      unsubscribe();
    };
  }, []);

  const loadRealTime = () => {
    const unsubscribe = onSnapshot(
      query(collection(database, "table1"), orderBy("menu_name")), // Sort by 'menu_name'
      (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        // Check for duplicates before updating the state
        setData((prevData) => {
          const existingIds = prevData.map((item) => item.id);
          const filteredNewData = newData.filter((item) => !existingIds.includes(item.id));
          return [...prevData, ...filteredNewData];
        });
      }
    );
  
    return unsubscribe;
  };
  
  


  console.log("Data:", data); // Check the 'data' state
  console.log("Img URLs:", imgUrl); // Check the 'imgUrl' state

  //ส่วนเพิ่มข้อมูลลงfirebase
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddData = async () => {
    await addDoc(table1Ref, form)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  //ส่วนลบข้อมูล
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(table1Ref, id));
      // Update local state after successful deletion
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  

  //Save and Cancel
  const handleSave = async(id)=>{
    try {
      await updateDoc(doc(table1Ref, id),form);
      setEditId=(null)
    } catch (err) {
      console.log(err);
    }
  }
  const handleCancel = ()=>{
    setEditId(null)
    setForm({})
  }
  console.log(editId);
  return (
    <div className="AddEditDeleteMenu">
      <h2>นม</h2>
      <div className="FrameStaffAddMenu">
        <div className="FrameStaffImageMenu">
          <div className="Inputimage">
            <input
              className="inputfileimage"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>
        <div className="InputDataMenu">
          <input
            className="inputmenuname"
            onChange={(e) => handleChange(e)}
            type="text"
            name="menu_name"
            placeholder="(เพิ่มชื่อเมนู)"
          />
          <br />
          <input
            className="inputdescription"
            onChange={(e) => handleChange(e)}
            type="text"
            name="menu_description"
            placeholder="(เพิ่มคำอธิบาย)"
          />
          <div className="buttonconfirmdata">
            <button
              className="confirmadddata t-buttonconfirmdata"
              onClick={() => {
                handleAddData();
                handleClick();
              }}
            >
              ✓
            </button>
          </div>
        </div>
        <div className="AddHotandCoolPrice">
          <button className="AddHotPrice t-hotprice">
            ร้อน
            <input
              className="inputprice"
              onChange={(e) => handleChange(e)}
              type="text"
              name="menu_hotprice"
            />
            .-
          </button>
          <button className="AddCoolPrice t-coolprice">
            เย็น
            <input
              className="inputprice"
              onChange={(e) => handleChange(e)}
              type="text"
              name="menu_coolprice"
            />
            .-
          </button>
        </div>
      </div>
      <br />
      <div className="StaffFrameAddMenu">
        {data.map((item, index) => (
          <div key={index} className="MenuItemContainer">
            <div className="FrameImageMenu">
              <div className="ShowImage">
                <img src={imgUrl[index]} alt={`Image ${index}`} />
              </div>
            </div>
            <div className="AddNameMenuandDiscription">
              <h3 className="TextNameMenu">
                {editId === item.id ? (
                  <>
                    <input
                      className="inputmenuname"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="menu_name"
                      value={form.menu_name !== undefined ?form.menu_name : item.menu_name}
                      placeholder="(เพิ่มชื่อเมนู)"
                    />
                  </>
                ) : (
                  item.menu_name
                )}
              </h3>
              <h4 className="TextDescription">
              {editId === item.id ? (
                  <>
                    <input
                      className="inputdescription"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="menu_description"
                      value={form.menu_description !== undefined ?form.menu_description:item.menu_description}
                      placeholder="(เพิ่มคำอธิบาย)"
                    />
                  </>
                ) : (
                  item.menu_description
                )}
                </h4>
            </div>
            <div className="HotandCoolPrice">
              <button
                className="DeleteMenu b-deletemenu"
                onClick={() => handleDelete(item.id)}
              >
                X
              </button>
              <button className="HotPrice t-hotprice">
                ร้อน {editId === item.id ? (
                  <>
                    <input
                      className="inputprice"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="menu_hotprice"
                      value={form.menu_hotprice !== undefined ?form.menu_hotprice :item.menu_hotprice}
                    />
                  </>
                ) : (
                  item.menu_hotprice
                )} .-
              </button>
              <button className="CoolPrice t-coolprice">
                เย็น {editId === item.id ? (
                  <>
                    <input
                      className="inputprice"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="menu_coolprice"
                      value={form.menu_coolprice !== undefined ?form.menu_coolprice :item.menu_coolprice}
                    />
                  </>
                ) : (
                  item.menu_coolprice
                )} .-
              </button>
            </div>
            <div className="ButtonEditMenu">
              { editId === item.id 
              ?(<>
              <button
                className="Savemenu t-savemenu"
                onClick={() => handleSave(item.id)}
              >
                Save
              </button>
              <button
                className="Cancelmenu t-cancelmenu"
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
              </>)
              :(<>
              <button
                className="Editmenu t-editmenu"
                onClick={() => setEditId(item.id)}
              >
                Edit Menu
              </button>
              </>)
              }
            </div>
          </div>
        ))}
        <br />
      </div>
    </div>
  );
}

export default AddEditDeleteMenu;

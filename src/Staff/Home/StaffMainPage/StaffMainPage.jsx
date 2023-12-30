import React, { useEffect, useState } from "react";
import "./StaffMainPage.css";
import mainimage1 from "../../../img/main-image1.png";
import mainimage2 from "../../../img/main-image2.png";
import mainimage3 from "../../../img/main-image3.png";
import background from "../../../img/background.PNG";
import background1 from "../../../img/background1.PNG";

function StaffMainPage() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prevSelected) => (prevSelected + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="StaffMainPage">
      <div className="StaffRecommend_menu">
        <div className="Background">
          <img src={background} alt="background" />
        </div>
        <div className="Background1">
          <img src={background1} alt="background1" />
        </div>
        <div
          className={`Menuslide ${selected === 0 ? "Menuslide--selected" : ""}`}
        >
          <img src={mainimage1} alt="mainimage1" />
        </div>
        <div
          className={`Menuslide ${selected === 1 ? "Menuslide--selected" : ""}`}
        >
          <img src={mainimage2} alt="mainimage2" />
        </div>
        <div
          className={`Menuslide ${selected === 2 ? "Menuslide--selected" : ""}`}
        >
          <img src={mainimage3} alt="mainimage3" />
        </div>

        <div className="StaffCircle_slide">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`Circle_button ${
                selected === index ? "Circle_button--selected" : ""
              }`}
              onClick={() => setSelected(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StaffMainPage;

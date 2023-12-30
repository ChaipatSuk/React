import React, { useEffect, useState } from "react";
import "./MainPage.css";
import mainimage1 from "../../../img/main-image1.png";
import mainimage2 from "../../../img/main-image2.png";
import mainimage3 from "../../../img/main-image3.png";
import background from "../../../img/background.PNG";
import background1 from "../../../img/background1.PNG";

function MainPage() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prevSelected) => (prevSelected + 1) % 3); // Assuming there are three Menu_slide elements
    }, 2000); // Change the time interval (in milliseconds) for the slide change

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.querySelectorAll(".Menu_slide").forEach((menuSlide, index) => {
      const circleButtons = document.querySelectorAll(".Circle_button");

      circleButtons.forEach((button) =>
        button.addEventListener("click", () => {
          document.querySelectorAll(".Menu_slide").forEach((item) =>
            item.classList.remove("Menu_slide--selected")
          );

          document.querySelectorAll(".Circle_button").forEach((btn) =>
            btn.classList.remove("Circle_button--selected")
          );

          menuSlide.classList.add("Menu_slide--selected");
          button.classList.add("Circle_button--selected");
          setSelected(index);
        })
      );
    });
  }, []);

  return (
    <div className="Recommend_menu">
      <div className="Background">
        <img src={background} alt="background" />
      </div>
      <div className="Background1">
        <img src={background1} alt="background1" />
      </div>
      <div className={`Menu_slide ${selected === 0 ? 'Menu_slide--selected' : ''}`}>
        <img src={mainimage1} alt="mainimage1" />
      </div>
      <div className={`Menu_slide ${selected === 1 ? 'Menu_slide--selected' : ''}`}>
        <img src={mainimage2} alt="mainimage2" />
      </div>
      <div className={`Menu_slide ${selected === 2 ? 'Menu_slide--selected' : ''}`}>
        <img src={mainimage3} alt="mainimage3" />
      </div>

      <div className="Circle_slide">
        <span className={`Circle_button ${selected === 0 ? 'Circle_button--selected' : ''}`}></span>
        <span className={`Circle_button ${selected === 1 ? 'Circle_button--selected' : ''}`}></span>
        <span className={`Circle_button ${selected === 2 ? 'Circle_button--selected' : ''}`}></span>
      </div>
    </div>
  );
}

export default MainPage;

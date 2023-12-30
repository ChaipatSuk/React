import React, { useState } from "react";
import "./RecommendMenu.css";
import DrinkRecommend from "../LinkDrink/DrinkRecommend";
import BakeryRecommend from "../LinkBakery/BakeryRecommend";

function Recommend() {
  return (
    <div className="Recommend">
      <div className="RecommendMenu">
        <ul style={{ listStyleType: "none" }}>
          <li>แนะนำเมนู</li>
        </ul>
      </div>
      <div className="DrinkandBakery">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <button className={`drinkandbakery`}>
              เครื่องดื่มและเบเกอรี่
            </button>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Recommend;

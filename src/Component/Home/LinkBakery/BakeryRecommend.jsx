import React from "react";
import "./BakeryRecommend.css";
import BakeryRowOne from "./BakeryRowOne/BakeryRowOne";
import BakeryRowTwo from "./BakeryRowTwo/BakeryRowTwo";

function BakeryRecommend() {
  return (
    <div className="BakeryRecommend">
        <BakeryRowOne/>
        <BakeryRowTwo/>
    </div>
  
  );
}

export default BakeryRecommend;

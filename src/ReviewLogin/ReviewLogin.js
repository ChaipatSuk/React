import React from "react";
import { DivWrapper } from "./components/DivWrapper";
import { SizeLStateDefaultWrapper } from "./components/SizeLStateDefaultWrapper";
import "./style.css";

export const ReviewLogin = () => {
  return (
    <div className="ReviewLogin">
      <div className="div-2">
        <img
          className="footer"
          alt="Footer"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/657aada56acc5443e2abc279/img/footer.svg"
        />
        <div className="text-wrapper-9">รีวิว</div>
        <img
          className="pink-star"
          alt="Pink star"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/657aada56acc5443e2abc279/img/pink-star-1.png"
        />
        <img
          className="pink-star-2"
          alt="Pink star"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/657aada56acc5443e2abc279/img/pink-star-1.png"
        />
        <img
          className="pink-star-3"
          alt="Pink star"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/657aada56acc5443e2abc279/img/pink-star-1.png"
        />
        <img
          className="pink-star-4"
          alt="Pink star"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/657aada56acc5443e2abc279/img/pink-star-1.png"
        />
        <img
          className="pink-star-5"
          alt="Pink star"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/657aada56acc5443e2abc279/img/pink-star-1.png"
        />
        <DivWrapper className="view" profileProfileClassName="component-1744" />
        <img
          className="line-3"
          alt="Line"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-14-1.svg"
        />
        <SizeLStateDefaultWrapper
          className="header-nav-login-instance"
          menuVectorClassName="design-component-instance-node"
          size="l"
          state="default"
        />
        <DivWrapper
          className="component-1744-instance"
          profileProfileClassName="view-2"
          text="กีวี่โซดาหวานเจี๊ยบ"
          text1="รสชาติซาบซ่าส์ถึงใจมากเลยค่ะ ได้กลิ่นกีวี่อ่อนๆด้วย &gt;&lt;"
          text2="*******"
        />
        <DivWrapper
          className="view-4"
          divClassName="view-3"
          profileProfileClassName="view-5"
          text="แพนเค้กกล้วยหอมจอมซน"
          text1="แป้งดี หอม นุ่ม ใส่กล้วยให้อีกฉ่ำๆ ชอบมาก โอ้พระเจ้า นี่มันรสชาติสวรรค์"
          text2="********"
        />
        <DivWrapper
          className="view-6"
          divClassName="view-3"
          profileProfileClassName="view-7"
          text="Americano"
          text1="กาแฟเข้มสะใจมากเลยครับ ผ่านมา2วันแล้วผมยังไม่ได้นอนเลย"
          text2="Username"
        />
      </div>
    </div>
  );
};
export default ReviewLogin;

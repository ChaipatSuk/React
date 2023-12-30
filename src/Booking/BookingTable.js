import React from "react";
import { BuddyTable } from "./components/BuddyTable";
//import { ButtonProfile } from "./components/ButtonProfile";
import { CalendarIcon } from "./components/CalendarIcon";
import { Component3500 } from "./components/Component3500";
import NavBar from "../Component/Home/NavBar/NavBar"
//import { HeaderNavProfile } from "./components/HeaderNavProfile";
import { MeetingTable } from "./components/MeetingTable";
import { OptionDefault } from "./components/OptionDefault";
import { PrivateTable } from "./components/PrivateTable";
import { PropertyDefaultWrapper } from "./components/PropertyDefaultWrapper";
import "./style.css";

export const BookingTable = () => {
  return (
    <div className="BookingTable">
      <div className="div-2">
      <NavBar/>
        <div className="overlap">
          <div className="view">
            <PropertyDefaultWrapper className="component-3431" property1="default" />
          </div>
        </div>
        <div className="view-2">
    
          <div className="view-3">
            <div className="text-wrapper-6">รายละเอียด</div>
            <div className="text-wrapper-7">มีทั้งหมด 3 โซน ได้แก่</div>
            <div className="overlap-group">
              <div className="text-wrapper-8">ไพรเวทโซน (P1 - P3)</div>
              <p className="text-wrapper-9">: 1 โต๊ะ นั่งได้ 1 คน</p>
            </div>
            <img
              className="line"
              alt="Line"
              src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-16.svg"
            />
            <div className="text-wrapper-10">สถานะการจอง</div>
            <div className="ellipse" />
            <div className="text-wrapper-11">ไม่ว่าง</div>
            <div className="ellipse-2" />
            <div className="text-wrapper-12">เลือก</div>
            <div className="ellipse-3" />
            <div className="overlap-2">
              <div className="b-b">บัดดี้โซน&nbsp;&nbsp;&nbsp;&nbsp; (B1 - B6)</div>
              <p className="text-wrapper-13">: 1 โต๊ะ นั่งได้ 2 คน</p>
            </div>
            <div className="ellipse-4" />
            <div className="overlap-group-2">
              <div className="m-m">มีทติ้งโซน&nbsp;&nbsp; (M1 - M3)</div>
              <p className="text-wrapper-13">: 1 โต๊ะ นั่งได้สูงสุด 4 คน</p>
              <div className="text-wrapper-14">: *สั่งขั้นต่ำ 2 เมนู*</div>
            </div>
            <div className="ellipse-5" />
          </div>
          <Component3500 className="component-3432-instance" divClassName="view-4" />
          <div className="view-5">
            <BuddyTable className="buddy-table-instance" divClassName="buddy-table-2" stateProp="default" text="B2" />
            <BuddyTable className="buddy-table-3" divClassName="buddy-table-2" stateProp="default" text="B6" />
            <BuddyTable className="buddy-table-4" divClassName="buddy-table-2" stateProp="default" text="B5" />
            <BuddyTable className="buddy-table-5" divClassName="buddy-table-2" stateProp="default" text="B4" />
            <BuddyTable className="buddy-table-6" divClassName="buddy-table-2" stateProp="default" text="B3" />
            <BuddyTable className="buddy-table-7" divClassName="buddy-table-8" stateProp="default" text="B1" />
            <PrivateTable
              className="private-table-instance"
              divClassName="private-table-2"
              stateProp="default"
              text="P5"
            />
            <PrivateTable className="private-table-3" divClassName="private-table-4" stateProp="default" text="P10" />
            <PrivateTable className="private-table-5" divClassName="private-table-6" stateProp="default" text="P11" />
            <PrivateTable className="private-table-7" divClassName="private-table-8" stateProp="default" text="P12" />
            <PrivateTable className="private-table-9" divClassName="private-table-8" stateProp="default" text="P13" />
            <PrivateTable className="private-table-10" divClassName="private-table-2" stateProp="default" text="P6" />
            <PrivateTable className="private-table-11" divClassName="private-table-2" stateProp="default" text="P7" />
            <PrivateTable className="private-table-12" divClassName="private-table-2" stateProp="default" text="P8" />
            <PrivateTable className="private-table-13" divClassName="private-table-2" stateProp="default" text="P9" />
            <PrivateTable className="private-table-14" stateProp="default" text="P1" />
            <PrivateTable className="private-table-15" divClassName="private-table-2" stateProp="default" text="P2" />
            <PrivateTable className="private-table-16" divClassName="private-table-2" stateProp="default" text="P3" />
            <PrivateTable className="private-table-17" divClassName="private-table-18" stateProp="default" text="P4" />
            <MeetingTable className="meeting-table-instance" divClassName="meeting-table-2" stateProp="default" />
            <MeetingTable className="meeting-table-3" divClassName="meeting-table-4" stateProp="default" text="M2" />
            <MeetingTable className="meeting-table-5" divClassName="meeting-table-4" stateProp="default" text="M3" />
            <div className="overlap-3">
              <img
                className="line-2"
                alt="Line"
                src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-21.svg"
              />
              <div className="text-wrapper-15">หน้าต่าง</div>
            </div>
            <div className="overlap-4">
              <img
                className="line-2"
                alt="Line"
                src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-21.svg"
              />
              <div className="text-wrapper-15">หน้าต่าง</div>
            </div>
            <div className="overlap-5">
              <img
                className="line-3"
                alt="Line"
                src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-19.svg"
              />
              <div className="text-wrapper-16">หน้าต่าง</div>
            </div>
            <div className="overlap-6">
              <img
                className="line-3"
                alt="Line"
                src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-19.svg"
              />
              <div className="text-wrapper-17">หน้าต่าง</div>
            </div>
            <div className="overlap-7">
              <img
                className="line-4"
                alt="Line"
                src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-18.svg"
              />
              <div className="text-wrapper-18">ประตู</div>
            </div>
            <div className="overlap-8">
              <img
                className="line-4"
                alt="Line"
                src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-18.svg"
              />
              <div className="text-wrapper-18">ประตู</div>
            </div>
            <div className="overlap-9">
              <img
                className="line-5"
                alt="Line"
                src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-18.svg"
              />
              <div className="text-wrapper-19">ห้องน้ำ</div>
            </div>
            <div className="overlap-10">
              <img
                className="line-5"
                alt="Line"
                src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/line-18.svg"
              />
              <div className="text-wrapper-20">ห้องน้ำ</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-21">จองที่นั่ง</div>
        <div className="text-wrapper-22">เลือกวันและเวลา</div>
        <div className="text-wrapper-23">เลือกที่นั่ง</div>
        <p className="text-wrapper-24">
          * ทุกครั้งที่จองที่นั่ง จำเป็นต้องสั่งเมนูอย่างต่ำ 1 เมนู (จอง 1 ครั้ง นั่งได้ 1 ชั่วโมง 50นาที) *
        </p>
        <div className="div-3">
          <CalendarIcon className="calendar-icon-instance" stateProp="default" />
          <div className="text-wrapper-25">วันที่</div>
          <p className="div-4">
            <span className="span">วัน</span>
            <span className="text-wrapper-26"> / </span>
            <span className="span">เดือน</span>
            <span className="text-wrapper-26"> /</span>
            <span className="span"> ปี</span>
          </p>
        </div>
        <div className="div-5">
          <div className="text-wrapper-25">เวลา</div>
          <OptionDefault className="option-default-visible-options-no" />
        </div>
        <img
          className="footer"
          alt="Footer"
          src="https://cdn.animaapp.com/projects/654afb985b4f8eee5d8e3290/releases/654afd032b1a72c65fa053d2/img/footer-4.svg"
        />
        <p className="text-wrapper-27">* 1 คน จองได้ 1 โต๊ะเท่านั้น *</p>
      </div>
    </div>
  );
};
export default BookingTable;
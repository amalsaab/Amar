import React from "react";
import Aqar from "../.../../assets/aqar.png";
import { useState } from "react";
import {Auth, db   } from "../Compnent/dataInput/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection,updateDoc, arrayUnion } from "firebase/firestore";
// import { update } from "../Compnent/dataInput/firebase.js";
export default function AddTenant() {

  const [TenName, setTenName] = useState()
  const [ApartNum, SetNum] = useState()
  const [ConNum, SetConNum] =useState()
  const [FloorNum, setFloor] = useState()
  const [ID, setID] = useState()


  const Addtentbtn =async ()=>{

    let Send = {
      Type: "اسناد مستأجر",
      ANum: ApartNum,
      ContractNum: ConNum,
      OwnerName:"محمد العبدالله",
      Floor: FloorNum,
      ID: ID
    }

   await updateDoc(doc(db,"UsersInfo", "YIdj95zZMycWbqx1Tfu3"),{
    Send: arrayUnion(Send)
   })
    
    
  }
  

  return (
    <>
      {/* content here */}

      <div className="flex w-full h-18  items-center justify-center ">
        <div className="bg-white outline outline-[#BBA98D] flex justify-between items-center m-10 rounded-md w-full p-4">
          <div className="flex flex-col">
            <h1 className="text-[2rem] font-bold  "> اضافة مستاجر جديد</h1>
          </div>
          <div>
            <img width={150} src={Aqar} alt="" srcset="" />
          </div>
        </div>
      </div>

      <div className="flex justify-end  ml-10 ">
        {" "}
        <button className=" flex flex-row-reverse items-center">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          انتقال للخلف
        </button>
      </div>
      <div className="bg-white outline outline-[#BBA98D]  flex flex-col justify-between items-center m-10 rounded-md p-10 ">
        <div className="flex flex-col justify-center items-center gap-5 max-sm:grid max-sm:grid-cols-1 ">
          <div className=" w-full flex justify-between gap-5 ">
            <label htmlFor="idLand" className="w-24">
              اسم المستأجر
            </label>
            <input 
              value={TenName}
              onChange={(e)=>{setTenName(e.target.value)}}
              className="outline outline-gray-200 rounded-md  w-48"
              type="text"
            />

            <label htmlFor="dateLand" className="w-24">
              رقم الهوية
            </label>
            <input
               value={ID}
               onChange={(e)=>{setID(e.target.value)}}           
              className="outline outline-gray-200 rounded-md w-48"
              type="text"
            />
          </div>
          <div className=" w-full flex justify-between gap-5">
            <label htmlFor="locationLand" className="w-24">
              رقم الجوال
            </label>
            <input
              className="outline outline-gray-200 rounded-md  w-48"
              type="text"
            />

            <label htmlFor="sizeLand" className="w-24">
              رقم الشقة
            </label>
            <input
                value={ApartNum}
                 onChange={(e)=>{SetNum(e.target.value)}}
              className="outline outline-gray-200 rounded-md  w-48"
              type="text"
            />
          </div>

          <div className=" w-full flex justify-between gap-5">
            <label htmlFor="locationLand" className="w-24">
              رقم العقد
            </label>
            <input
              value={ConNum}
              onChange={(e)=>{SetConNum(e.target.value)}}            
              className="outline outline-gray-200 rounded-md  w-48"
              type="text"
            />

            <label htmlFor="sizeLand" className="w-24">
              رقم الطابق
            </label>
            <input
              value={FloorNum}
              onChange={(e)=>{setFloor(e.target.value)}}            
              className="outline outline-gray-200 rounded-md  w-48"
              type="text"
            />
          </div>

          <button onClick={Addtentbtn} className="px-2 py-1 bg-primary rounded-lg">ارسال</button>
        </div>
      </div>
    </>
  );
}

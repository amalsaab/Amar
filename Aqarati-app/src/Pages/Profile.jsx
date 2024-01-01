import React from "react";
import { Link } from "react-router-dom";
import Aqar from "../.../../assets/aqar.png";
import { db } from "../Compnent/dataInput/firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";


export default function Profile() {

  const [NID, getID] = useState()
  const [userName, getUserName] = useState()
  const [Email, getEmail] = useState()

 


  let local = localStorage.getItem("UserName")
  const q = query(collection(db, "UsersInfo"), where("UserName", "==", local));

  
  useEffect(async()=>{

    const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          let Data = doc.data()
          console.log(Data);
          getID(Data.NID)
          getEmail(Data.Email)
          getUserName(Data.UserName)


        });

  },[])
  
    


  return (
    <>
      {/* content here */}

      <div className="flex w-full h-18  items-center justify-center ">
        <div className="bg-white outline outline-[#BBA98D] flex justify-between items-center m-10 rounded-md w-full p-4">
          <div className="flex flex-col">
            <h1 className="text-[2rem] font-bold  "> {userName}</h1>
          </div>

          <div>
            <img width={150} src={Aqar} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="bg-white outline outline-[#BBA98D]  flex flex-col justify-between items-center m-10 rounded-md p-10 ">
        <div className="flex flex-col justify-center items-center gap-5 max-sm:grid max-sm:grid-cols-1 ">
          <div className=" w-full flex justify-between gap-5 ">
            <label htmlFor="id">رقم الهوية:</label>
            <p id="id">{NID}</p>

            <label htmlFor="account">رقم الحساب:</label>
            <p id="account">23456789123</p>
          </div>
          <div className=" w-full flex justify-between gap-5">
            <label htmlFor="email">البريد الإلكتروني:</label>
            <p id="email">{Email}</p>

            <label htmlFor="phone">رقم الجوال:</label>
            <p id="phone">23456789056</p>
          </div>

          <button className="px-2 py-1 bg-primary rounded-lg">رجوع</button>
          <div className="flex gap-4">
                <button className=" w-72 h-12 rounded-md  bg-[#ffff] outline outline-[#BBA98D] text-black ">
                  الدعم الفني
                </button>

                <button className="bg-[#BE6363] w-72 h-12 rounded-md text-white">
                  تسجيل الخروج
                </button>
              </div>
        </div>
      </div>
    </>
  );
}

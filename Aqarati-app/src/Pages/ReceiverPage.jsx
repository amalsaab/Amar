import React, { useState } from 'react'
import filtter from "../assets/filtter.svg";
import ReceiverContentOwner from "../pages/ReceiverContentOwner";
import ReceiverContentTenant from "../pages/ReceiverContentTenant";
import {Auth, db } from "../Compnent/dataInput/firebase";
import { useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

const ReceiverPage = () => {
    const [requestType, setRequestType] = useState("الكل");
    const [cards, setCards] = useState([]);

    let local = localStorage.getItem("UserName");
    const q = query(collection(db, "UsersInfo"), where("UserName", "==", local));

    {
      useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(q);
            let cardsArray = [];
  
            querySnapshot.forEach((doc) => {
              let preData = doc.data();
              let Data = preData.Send;
  
              Data.forEach((items) => {
                console.log(items);
                let Type = items.Type
                let State = items.State
                let Num = items.ANum
                let ConNum = items.ContractNum
                let OName = items.OwnerName
                let Floor = items.Floor
                
  
                let card = (
                  <ReceiverContentTenant
                  InstrumentNumber={ConNum}
                  OwnerName={OName}
                  RequestType={Type}
                  RequestName={Num}
                  FloorNumber={Floor}
                  RequestStatus=""
                />
                  );
  
                cardsArray.push(card);
              });
            });
            setCards(cardsArray);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
  
        fetchData();
      }, []);
    }


  return (
    <div>
        {/* filter here */}
      <div className="h-16 bg-neutral flex items-center p-4 gap-4">
        <div className="bg-secondary min-w-10 p-2 rounded-lg ">
          <img className="min-h-5" src={filtter} alt="" />
        </div>
        <div className="text-center flex gap-3 overflow-auto">
          <button onClick={() => setRequestType("الكل")} className="bg-secondary py-2 min-w-24 rounded-lg ">الكل</button>
          {/* Owner */}
          <button onClick={() => setRequestType("شقة")} className="bg-secondary py-2 min-w-24 rounded-lg ">شقة</button>
          {/* Owner end */}
          {/* Tenant */}
          <button onClick={() => setRequestType("اصلاح شقة")} className="bg-secondary py-2 min-w-24 rounded-lg ">اصلاح شقة</button>
          <button onClick={() => setRequestType("اصلاح عمارة")} className="bg-secondary py-2 min-w-24 rounded-lg ">اصلاح عمارة</button>
          {/* Tenant end */}
          <div>{requestType}</div>
        </div>
      </div>
      <div>
        {/* content here */}
        {
            <div className="divide-y divide-slate-300">
              {/* Owner */}
           
            
            </div>
          }
          {
            <div className="divide-y divide-slate-300">
              {/* Tenant */}
              {cards}
            </div>
          }
      </div>
        
    </div>
  )
}

export default ReceiverPage
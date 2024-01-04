import React, { useState } from "react";
import filtter from "../assets/filtter.svg";
import SenderContentOwner from "../pages/SenderContentOwner";
import SenderContentTenant from "../pages/SenderContentTenant";
import { useViewPage } from "./store";
import {Auth, db } from "../Compnent/dataInput/firebase";
import { useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

const SenderContent = () => {
    const [requestType, setRequestType] = useState("الكل");

    const [Namee, getName] = useState();
    const [Age, getAge] = useState();
    const [Unit, getUnit] = useState();
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
            let Data = preData.Req;

            Data.forEach((items) => {
              console.log(items);
              let Type = items.Type
              let State = items.State
              let De = items.Detail
              let Oname = items.OName
              let CNum = items.ANum
              let Date = items.Date
              let Area = items.Area
              

              // Do something with Name, Age, and Unit here
              if(Type == "توثيق عقار" ){

                let card = (
                  <SenderContentOwner RequestType={Type} OwnerName={Oname} InstrumentNumber={CNum} InstrumentDate={Date} Area={Area+ "م"} RequestStatus={State}/>
                );

                cardsArray.push(card);

              }else{
                let card = (
                  <SenderContentTenant RequestType={Type} RequestName={De} RequestStatus={State}/>
                );
                cardsArray.push(card);


              }
          

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
          <button onClick={() => setRequestType("عقار")} className="bg-secondary py-2 min-w-24 rounded-lg ">عقار</button>
          <button onClick={() => setRequestType("شقة")} className="bg-secondary py-2 min-w-24 rounded-lg ">شقة</button>
          <button onClick={() => setRequestType("مستأجر")} className="bg-secondary py-2 min-w-24 rounded-lg ">مستأجر</button>
          {/* Owner end */}
          {/* Tenant */}
          <button onClick={() => setRequestType("اصلاح شقة")} className="bg-secondary py-2 min-w-24 rounded-lg ">
            اصلاح شقة
          </button>
          <button onClick={() => setRequestType("اصلاح عمارة")} className="bg-secondary py-2 min-w-24 rounded-lg ">
            اصلاح عمارة
          </button>
          {/* Tenant end */}
          <div className="flex items-center">{requestType}</div>
        </div>
      </div>
      <div>
        {/* content here */}
          {
            <div className="divide-y divide-slate-300">
              {/* Owner
              <SenderContentOwner
                RequestType="إضافة عقار"
                OwnerName="محمد العبدالله"
                InstrumentNumber="1234567890"
                InstrumentDate="1440/2/2 هـ"
                Area="1000 م2"
                RequestStatus="قيد التنفيذ"
              /> */}
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
  );
};

export default SenderContent;

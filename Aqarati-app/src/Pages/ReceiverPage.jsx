import React, { useState } from 'react'
import filtter from "../assets/filtter.svg";
import ReceiverContentOwner from "../pages/ReceiverContentOwner";
import ReceiverContentTenant from "../pages/ReceiverContentTenant";

const ReceiverPage = () => {
    const [requestType, setRequestType] = useState("الكل");
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
              <ReceiverContentOwner
                RequestType="إصلاح عمارة"
                RequestName="اصلاح سباكة"
                RequestStatus=""
              />
              <ReceiverContentOwner
                RequestType="إصلاح شقة"
                RequestName="اصلاح مصعد كهربائي"
                RequestStatus="مقبول"
              />
              <ReceiverContentOwner
                RequestType="إضافة عقار"
                RequestName="اصلاح مصعد كهربائي"
                RequestStatus="مرفوض"
              />
            </div>
          }
          {
            <div className="divide-y divide-slate-300">
              {/* Tenant */}
              <ReceiverContentTenant ApartmentNumber="1" InstrumentNumber="123456789" OwnerName="محمد العبدالله" FloorNumber="2" RequestStatus=""/>
              <ReceiverContentTenant ApartmentNumber="1" InstrumentNumber="123456789" OwnerName="محمد العبدالله" FloorNumber="2" RequestStatus="مقبول"/>
              <ReceiverContentTenant ApartmentNumber="1" InstrumentNumber="123456789" OwnerName="محمد العبدالله" FloorNumber="2"RequestStatus="مرفوض"/>
            </div>
          }
      </div>
        
    </div>
  )
}

export default ReceiverPage
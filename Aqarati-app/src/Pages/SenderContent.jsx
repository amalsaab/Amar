import React, { useState } from "react";
import filtter from "../assets/filtter.svg";
import SenderContentOwner from "../pages/SenderContentOwner";
import SenderContentTenant from "../pages/SenderContentTenant";

const SenderContent = () => {
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
          <div>{requestType}</div>
        </div>
      </div>
      <div>
        {/* content here */}
          {
            <div className="divide-y divide-slate-300">
              {/* Owner */}
              <SenderContentOwner
                RequestType="إضافة عقار"
                OwnerName="محمد العبدالله"
                InstrumentNumber="1234567890"
                InstrumentDate="1440/2/2 هـ"
                Area="1000 م2"
                RequestStatus="قيد التنفيذ"
              />
              <SenderContentOwner
                RequestType="إضافة عقار"
                OwnerName="محمد العبدالله"
                InstrumentNumber="1234567890"
                InstrumentDate="1440/2/2 هـ"
                Area="1000 م2"
                RequestStatus="مقبول"
              />
              <SenderContentOwner
                RequestType="إضافة عقار"
                OwnerName="محمد العبدالله"
                InstrumentNumber="1234567890"
                InstrumentDate="1440/2/2 هـ"
                Area="1000 م2"
                RequestStatus="مرفوض"
              />
            </div>
          }
          {
            <div className="divide-y divide-slate-300">
              {/* Tenant */}
              <SenderContentTenant RequestType="اصلاح شقة" RequestName="اصلاح سباكة" RequestStatus="قيد التنفيذ"/>
              <SenderContentTenant RequestType="اصلاح عقار" RequestName="اصلاح مصعد كهربائي" RequestStatus="مقبول"/>
              <SenderContentTenant RequestType="اصلاح عقار" RequestName="اصلاح مصعد كهربائي" RequestStatus="مرفوض"/>
            </div>
          }
        
      </div>
    </div>
  );
};

export default SenderContent;

import React from "react";
import { Link } from "react-router-dom";

import Aqar from "../.../../assets/aqar.png";
export default function ShowRequest() {
  return (
    <>
    
     {/* content here */}

     <div className="flex w-full h-18  items-center justify-center ">
        <div className="bg-white outline outline-[#BBA98D] flex justify-between items-center m-10 rounded-md w-full p-4">
          <div className="flex flex-col">
            <h1 className="text-[2rem] font-bold  ">طلبات الصيانة</h1>
          </div>

          <div>
            <img width={150} src={Aqar} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="bg-white outline outline-[#BBA98D]  flex flex-col m-10 rounded-md p-10  ">

    
        <div className="flex justify-center"><h1 className="text-xl">طلبات مستقبلة</h1> </div>

        <div className="flex flex-col  gap-5 max-sm:grid max-sm:grid-cols-1 ">
<h1>نوع الصيانة</h1>


<div className="flex ">
<div className="flex gap-10 ">
<p>طلب صيانة المصعد الكهربائي</p>
          <button className="px-2 py-1 bg-green-500 rounded-lg ">قبول</button>
          <button className="px-2 py-1 bg-red-500 rounded-lg text-white">رفض</button>
</div>
   </div>   
     </div>
     
     

      </div>
    </>
  )
}

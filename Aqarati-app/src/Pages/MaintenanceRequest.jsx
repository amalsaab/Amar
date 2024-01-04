import React from "react";
// import { Link } from "react-router-dom";
import Aqar from "../.../../assets/aqar.png";
export default function MaintenanceRequest() {
  return (
    <>
      {/* content here */}

      <div className="flex w-full h-18  items-center justify-center ">
        <div className="bg-white outline outline-[#BBA98D] flex justify-between items-center m-10 rounded-md w-full p-4">
          <div className="flex flex-col">
            <h1 className="text-[2rem] font-bold  ">شقق المتكاملة</h1>
            <h1>الرياض ، حي الوادي</h1>
          </div>
          <div>
            <img width={150} src={Aqar} alt="" srcset="" />
          </div>
        </div>
      </div>

      <div className="flex w-full h-18  items-center justify-center ">
        <div className="bg-white outline outline-[#BBA98D] flex justify-between items-center m-10 rounded-md w-full p-4">
          <div className="flex flex-col">
            <h1 className="text-[2rem] font-bold  ">شقة رقم 1 </h1>
            <h1>اسم المستأجر : محمد الشمري</h1>
          </div>
          <div>
            <img width={150} src={Aqar} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="bg-white outline outline-[#BBA98D] flex flex-col justify-between items-center m-10 rounded-md p-4 ">
        <h1 className="text-lg bg-">طلب صيانة</h1>
        <div className="flex flex-col justify-center items-center gap-2">
          <select className="select w-full max-w-xs">
            <option disabled selected>
              اختر نوع طلب الصيانة
            </option>

            <option>سباكة</option>
            <option>كهرباء</option>
            <option>دهان</option>
            <option>اخرى</option>
          </select>
          <label htmlFor="date">اختر التاريخ</label>
          <input type="date" id="date" />
          <textarea
            className="textarea textarea-success"
            placeholder="تفاصيل طللب الصيانة"
          ></textarea>
          <button className="px-2 py-1 bg-primary rounded-lg">ارسال</button>
        </div>
      </div>
    </>
  );
}

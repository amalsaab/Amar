import React from "react";
import { Link } from "react-router-dom";
import Aqar from "../.../../assets/aqar.png";
export default function ApartmentHistory() {
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

      <div className="bg-white outline outline-[#BBA98D] flex flex-col justify-between items-center m-10 rounded-md p-4">
        <h1 className="text-lg bg-">سجل الصيانة</h1>
        <div dir="rtl" className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>نوع الصيانة</th>
                <th>تفاصيل الصيانة</th>
                <th>تاريخ الصيانة</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>سباكة</td>
                <td>سباكة مطبخ</td>
                <td>1445/1/1</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

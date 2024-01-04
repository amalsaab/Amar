import React from "react";
import { Link } from "react-router-dom";
import {Auth, db } from "../Compnent/dataInput/firebase";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import TableInfo from "./TableInfo";
import Aqar from "../.../../assets/aqar.png";
import PaymentTotal from "./PaymentTotal";

export default function RentPayments() {
  let untiName = localStorage.getItem("UnitName");
  let untiNum = localStorage.getItem("UnitNum");
  let TName = localStorage.getItem("TName");

  const [UName, getUName] = useState(untiName);
  const [UNum, getUNum] = useState(untiNum);
  const [Tname, getTname] = useState(TName);
  const [cards, setCards] = useState([]);

  let local = localStorage.getItem("UserName");
  const q = query(collection(db, "UsersInfo"), where("UserName", "==", local));

  {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(q);
          console.log("-------------------");
          let cardsArray = [];

          querySnapshot.forEach((doc) => {
            let preData = doc.data();
            let RS = preData.RealState;

            RS.forEach((items) => {
              if (items.Name == untiName) {
                let Units = items.Units;

                Units.forEach((i) => {
                  if (i.ApartmentNum == untiNum) {
                    // Entered the Units Info

                    let Payment = i.Payment;

                    Payment.forEach((log) => {
                      // log is the Maintenens Table
                      let ID = log.ID;
                      let Date = log.Date;
                      let Total = log.Total;
                      let State = log.State;

                      let card = (
                        <PaymentTotal
                          ID={ID}
                          Total={Total}
                          Date={Date}
                          state={State}
                        />
                      );
                      cardsArray.push(card);
                    });
                  }
                });
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

    return (
      <>
        {/* content here */}

        {/* content here */}

        <div className="flex w-full h-18  items-center justify-center ">
          <div className="bg-white outline outline-[#BBA98D] flex justify-between items-center m-10 rounded-md w-full p-4">
            <div className="flex flex-col">
              <h1 className="text-[2rem] font-bold  "> {UName}</h1>
            </div>
            <div>
              <img width={150} src={Aqar} alt="" srcset="" />
            </div>
          </div>
        </div>

        {/* </div>


    </div> */}

        <div className="flex w-full h-18  items-center justify-center ">
          <div className="bg-white outline outline-[#BBA98D] flex justify-between items-center m-10 rounded-md w-full p-4">
            <div className="flex flex-col">
              <h1 className="text-[2rem] font-bold  ">شقة رقم {UNum} </h1>
              <h1>اسم المستأجر : {Tname}</h1>
            </div>
            <div>
              <img width={150} src={Aqar} alt="" srcset="" />
            </div>
          </div>
        </div>

        {/* </div>


    </div> */}

        <div className="bg-white outline outline-[#BBA98D] flex flex-col justify-between items-center m-10 rounded-md p-4">
          <h1 className="text-lg bg-">سجل الدفعات</h1>
          <div className="flex gap-20">
            <h1>القيمة الَّسنوية للإيجار:30000 ريال</h1>
            <h1>دورة سداد الايجار: نصف سنوي</h1>
          </div>

          <div dir="rtl" className="overflow-x-auto w-full">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="flex justify-between">
                  <th>رقم الدفعة</th>
                  <th>تاريخ الدفعة</th>
                  <th>اجمالي القيمة</th>
                  <th>المدفوع</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {cards}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

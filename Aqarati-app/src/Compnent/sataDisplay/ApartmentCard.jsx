import React from "react";
import Aqar from "../../assets/aqar.png";
import { useViewPage } from "../../pages/store.js";
import { Link, useNavigate } from "react-router-dom";

function ApartmentCard(props) {
  const navigate = useNavigate();
  const { namePage, setNamePage } = useViewPage((state) => state);
  return (
    <div>
      <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl w-96 outline outline-[#BBA98D] ">
        <div class="p-6 flex  justify-between">
          <div>
            <h5 class="block mb-2 font-Arabic text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {props.Head}
            </h5>
          </div>
          <img width={100} src={Aqar} alt="" />
        </div>
        <div class="p-6">
          <h1 class="block mb-2 font-Arabic text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {" "}
            رقم العقد: {props.Age}
          </h1>

          <h1 class="block mb-2 font-Arabic text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            اسم المستأجر: {props.Age}
          </h1>
          <h1 class="block mb-2 font-Arabic text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {" "}
            رقم العداد: {props.NumberofUnit}
          </h1>
        </div>
        <div class="p-6 pt-0 flex gap-4">
          
            <button onClick={() => {
                setNamePage("ApartmentHistory");
                navigate("/ApartmentHistory");
              }}
              class="flex items-center gap-2 px-4 py-2 font-Arabic text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-md select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 outline outline-[#BBA98D]"
              type="button"
            >
              السجل
            </button>
          

          
            <button
              class="flex items-center gap-2 px-4 py-2 font-Arabic text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-md select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 outline outline-[#BBA98D]"
              type="button"
            >
              المدفوعات
            </button>
          
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard;

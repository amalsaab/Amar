import React from "react";
import Aqar from "../../assets/aqar.png";
import { useViewPage } from "../../pages/store.js";
import { useNavigate } from "react-router-dom";


function Testing(props, name, age, unit, onButtonClick) {

  const navigate = useNavigate();
  const { namePage, setNamePage } = useViewPage((state) => state);

  

    const handleButtonClick = () => {
      let Head = props.Head
      localStorage.setItem("UnitName",Head)
      setNamePage('OwnerApartment')
      navigate('/OwnerApartment')

    }
 
  

  return (
    <div className="flex items-center justify-center ">
      <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl w-96 outline outline-[#BBA98D] ">
        <div class="p-6 flex  justify-between">
          <div>
            <h5 class="block mb-2  text-xl antialiased font-Arabic font-semibold leading-snug tracking-normal text-blue-gray-900">
              {props.Head}
            </h5>
            <p class="block font-Arabic text-base antialiased font-light leading-relaxed text-inherit">
              {props.Location}
            </p>
          </div>
          <img width={120} src={Aqar} alt="" />
        </div>
        <div class="p-6">
          <h1 class="block mb-2 font-Arabic text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            عمر العقار: {props.Age}
          </h1>
          <h1 class="block mb-2 font-Arabic text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {" "}
            عدد الوحدات المتاحة: {props.NumberofUnit}
          </h1>
        </div>
        <div class="p-6 pt-0">
          
            <button
              onClick={handleButtonClick}
              class="flex items-center gap-2 px-4 py-2 font-Arabic text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-md select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 outline outline-[#BBA98D]"
              type="button"
            >
              عرض المزيد
            </button>
          
        </div>
      </div>
    </div>
  );
}

export default Testing;

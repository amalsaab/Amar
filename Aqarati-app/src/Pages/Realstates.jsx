import React from "react";
import Card from "../../src/Compnent/sataDisplay/Card";
import Aqar from "../.../../assets/aqar.png";
import { Link, useNavigate } from "react-router-dom";
import { useViewPage } from "./store";
const Realstates = () => {
  const navigate = useNavigate();
  const { namePage, setNamePage } = useViewPage((state) => state);
  return (
    <div>
      <div className="flex w-full  items-center justify-center  ">
        <div className="bg-white outline outline-primary flex justify-center items-center m-10 rounded-md  p-4 gap-4 flex-wrap">
          {/* <div className="flex "> */}
          <button
            onClick={() => {
              setNamePage("RequestAddBuilding");
              navigate("/RequestAddBuilding");
            }}
            className="btn btn-xs btn-primary sm:btn-sm md:btn-md lg:btn-md"
          >
            اضافة عقار
          </button>
          <button
            onClick={() => {
              setNamePage("AddApartment");
              navigate("/AddApartment");
            }}
            className="btn btn-xs btn-primary sm:btn-sm md:btn-md lg:btn-md"
          >
            اضافة شقة
          </button>
          <button
            onClick={() => {
              setNamePage("AddTenant");
              navigate("/AddTenant");
            }}
            className="btn btn-xs btn-primary sm:btn-sm md:btn-md lg:btn-md"
          >
            اسناد مستأجر
          </button>
          {/* <Link to={"/RequestAddBuilding"} className="btn btn-xs btn-primary sm:btn-sm md:btn-md lg:btn-md">
            اضافة صيانة
          </Link> */}
          {/* </div> */}
        </div>
      </div>

      <div className=" flex gap-10 p-4 flex-wrap justify-center">
        <Card
          Head="شقق المتكاملة"
          Location="الرياض، حي الوادي"
          Age="10 سنوات"
          NumberofUnit="20"
        />
        <Card
          Head="شقق الكمال"
          Location="الرياض، حي العليا"
          Age="3 سنوات"
          NumberofUnit="32"
        />
        <Card
          Head="شقق ركن الانوار"
          Location="الرياض، حي الملقا"
          Age="سنتين"
          NumberofUnit="2"
        />
        <Card
          Head="شقق خير النزل"
          Location="الرياض، حي الشفاء"
          Age="سنة"
          NumberofUnit="0"
        />
      </div>
    </div>
  );
};

export default Realstates;

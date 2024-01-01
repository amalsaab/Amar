import React from "react";
import ApartmentCard from "../../src/Compnent/sataDisplay/ApartmentCard";
import { Link } from "react-router-dom";
import Aqar from "../.../../assets/aqar.png";
import Owner from "./Owner";

function OwnerApartment() {
  return (
    <div className="grid grid-cols-5 max-sm:flex DashboredBG ">
      <div className="z-[999]">
        <Owner />
      </div>
      <div className="col-span-4 flex ">
        <div className="flex  gap-10 p-4 flex-wrap justify-center">
          <ApartmentCard
            Head="شقة رقم 1 "
            Age="12345566"
            NumberofUnit="18932"
          />
          <ApartmentCard
            Head="شقة رقم 1 "
            Age="43348966"
            NumberofUnit="74399"
          />
          <ApartmentCard
            Head="شقة رقم 1 "
            Age="19343394"
            NumberofUnit="32893"
          />
          <ApartmentCard
            Head="شقة رقم 1 "
            Age="92893427"
            NumberofUnit="89372"
          />
        </div>
      </div>
    </div>
  );
}

export default OwnerApartment;

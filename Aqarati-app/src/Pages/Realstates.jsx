import React from "react";
import Card from "../../src/Compnent/sataDisplay/Card";
import Aqar from "../.../../assets/aqar.png";
import { Link, useNavigate } from "react-router-dom";
import { useViewPage } from "./store";
import {Auth, db } from "../Compnent/dataInput/firebase";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

const Realstates = () => {
  const [Namee, getName] = useState();
  const [Age, getAge] = useState();
  const [Unit, getUnit] = useState();
  const [cards, setCards] = useState([]);

  let local = localStorage.getItem("UserName");
  const q = query(collection(db, "UsersInfo"), where("UserName", "==", local));

  const navigate = useNavigate();
  const { namePage, setNamePage } = useViewPage((state) => state);

  {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(q);
          let cardsArray = [];

          querySnapshot.forEach((doc) => {
            let preData = doc.data();
            let Data = preData.RealState;

            Data.forEach((items) => {
              let Name = items.Name;
              let Age = items.StateAge;
              let Unit = items.Unit;
              let city = items.city;

              getName(Namee);

              // Do something with Name, Age, and Unit here
              let card = (
                <Card
                  Head={Name}
                  Location={city}
                  Age={Age + " سنوات "}
                  NumberofUnit={Unit}
                />
              );

              cardsArray.push(card);
            });
          });
          setCards(cardsArray);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);
    const handleButtonClick = (name) => {
      // Handle button click event here
      console.log(`Button clicked for ${name}`);
    };
  }

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

      {/* Middle of screen content */}

      {/* Render the array of Card components */}
      <div className="flex gap-10 flex-wrap p-5">{cards}</div>
    </div>
  );
};

export default Realstates;

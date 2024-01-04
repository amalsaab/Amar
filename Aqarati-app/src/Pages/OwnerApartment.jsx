import React from "react";
import ApartmentCard from "../../src/Compnent/sataDisplay/ApartmentCard";
// import { Link } from "react-router-dom";
// import Aqar from "../../../assets/aqar.png";
// import Owner from "./Owner";
import { db } from "../Compnent/dataInput/firebase";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

function OwnerApartment() {
  const [Namee, getName] = useState();
  const [Age, getAge] = useState();
  const [Unit, getUnit] = useState();
  const [ACard, setCards] = useState([]);

  let local = localStorage.getItem("UserName");
  const q = query(collection(db, "UsersInfo"), where("UserName", "==", local));

  let localUnti = localStorage.getItem("UnitName");

  {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(q);
          let cardsArray = [];
          let Sorted = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          querySnapshot.forEach((doc) => {
            let preData = doc.data();
            let Data = preData.RealState;

            Data.forEach((items) => {
              if (items.Name == localUnti) {
                let newData = items.Units;

                newData.forEach((i) => {
                  let Name = i.ApartmentNum;
                  let ContractNum = i.ContractNum;
                  let Enum = i.Enum;
                  let TentName = i.Tenant;

                  let mCard = (
                    <ApartmentCard
                      Head={Name}
                      Age={ContractNum}
                      Enum={Enum}
                      TName={TentName}
                    />
                  );

                  cardsArray.push(mCard);
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

    const handleButtonClick = (name) => {
      // Handle button click event here
      console.log(`Button clicked for ${name}`);
    };
  }

  return (
    // className="grid grid-cols-5 max-sm:flex DashboredBG "
    <div>
      {/* <div className="z-[999]">
        <Owner />
      </div> */}
      {/* <div className="col-span-4 flex "> */}

      <div className="flex gap-10 p-4 flex-wrap justify-center">
        {" "}
        {/*gap-10*/}
        {/* Apartment Cards here */}
        {ACard}
      </div>
      {/* </div> */}
    </div>
  );
}

export default OwnerApartment;

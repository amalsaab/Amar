import React, { useState } from "react";
import bgsignup from "../assets/bgSignup1.png";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Compnent/dataInput/firebase";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const nav = useNavigate()
  const singinbtn = async()=>{

    const querySnapshot = await getDocs(collection(db, "UsersInfo"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let Data = doc.data()
      let userNameInDB = Data.UserName
      let PassInDB = Data.Password

      if (username == userNameInDB && password == PassInDB){
        // Nav to the owner page
        nav('/Owner')
      }

    });

  



  }


  return (
    <>
      <div dir="ltr" class="h-screen md:flex">
        <div
          style={{ backgroundImage: `url(${bgsignup})` }}
          class="relative overflow-hidden md:flex bg-cover w-1/2 i justify-around items-center hidden"
        >
          <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div class="flex md:w-1/2 justify-center py-10 items-center bg-white ">
          <div
            dir="rtl"
            class="bg-white outline outline-[#BBA98D] w-1/2 gap-3 rounded-md p-5 shadow-lg flex flex-col  "
          >
            <h1 class="text-gray-800 font-bold text-2xl mb-5 ">تسجيل دخول</h1>

            <div className="flex justify-center ">
              <div className="flex flex-col w-72 ">
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    class="pl-2 outline-none border-none py-2"
                    type="text"
                    placeholder="اسم المستخدم"
                  />
                </div>

                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    class="pl-2 outline-none border-none py-2"
                    type="password"
                    placeholder="كلمة السر"
                  />
                </div>

                <div className="flex justify-center">
                  <button onClick={singinbtn} class="block w-44 bg-primary mt-4 py-2 rounded-2xl text-black font-semibold mb-2">
                    تسجيل الدخول
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

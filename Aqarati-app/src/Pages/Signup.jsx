import React, { useState } from "react";
import bgsignup from "../assets/bgSignup1.png";
import { useNavigate } from "react-router-dom";
import {Auth, db } from "../Compnent/dataInput/firebase.js";
import { collection, addDoc } from "firebase/firestore"; 

export default function Signup() {
  const [username, setUsername] = useState();
  const [nationalID, setNationalID] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [checkBox, setCheckBox] = useState();
  const [message, setMessage] = useState();
  const navg = useNavigate();
  const [selectedOption, setSelectedOption] = useState("option1");

  const handelSubmit = () => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      nationalID === "" ||
      confirmPassword === ""
    ) {
      setMessage("الرجاء تعبئة الحقول");
    } else if (!username.match(/^[a-zA-Z0-9]{5,25}$/)) {
      setMessage("اسم المستخدم لابد يكون 4 احرف او اكثر");
    } else if (!email.match(/^[A-Za-z0-9-]+@[A-Za-z0-9-]+.[A-Za-z]{2,4}$/)) {
      setMessage("الايميل غير صحيح");
    } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/)) {
      setMessage("كلمة السر يجب ان تكون  6 احرف علىالاقل حرف او رقم واحد ");
    } else if (confirmPassword !== password) {
      setMessage("كلمة السر غير مطابقة");
    } else if (!checkBox.checked) {
      setMessage("الرجاء الموافقة على الشروط");
	  createUserWithEmailAndPassword(Auth, email, password)
				.then((userCredential) => {
	  
				  })
				  .then(async()=>{
					  await addDoc(collection(db,"UsersInfo"),{
						  UserName: username,
						  NID: nationalID,
						  Email: email,
						  Password: password,
						  State: selectedOption,
              Send:[
                {
                  ID:1,
                  Type: "توثيق شقة",
                  ANum: 3,
                  ContractNum: 11837402,
                  OwnerName: "محمد العبدالله",
                  Floor: 2,
                 
                }
              ],
              Req: [{
                ID:1,
                Type: "اصلاح شقة",
                State: "مقبول",
                Detail:"سباكة",
                Date: "2023-10-3"
              }],
						  RealState: [{
							Name: "شقق اصيل الملقا ",
							city: "الرياض، حي الملقا",
							StateAge: 3,
							Unit: 30,
							Units:[{
								ApartmentNum: 101,
								Tenant: "احمد الحربي",
								ContractNum: 213178,
								Enum: 937286,
								Payment: [{
									ID:1,
									Date:"1-1-2024",
									Total: 15000,
									State: "Paid"
								},
								{
									ID:2,
									Date:"1-6-2024",
									Total: 15000,
									State: "Not"
								}
							],
								maintenanis: [{
									ID:1,
									Date:"10-9-2023",
									Type: "ترميم داخلي"
								},
								{
									ID:2,
									Date:"23-9-2023",
									Type: "سباكه مطبخ "
								}

							],

							},
							

						  
						
						]
					  }] 
				  })
				  navg("/login");
				})
    } else {
      

  
    }
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };
  return (
    <>
      <div class="h-screen md:flex  ">
        <div class="flex md:w-1/2 justify-center py-10 items-center bg-white ">
          <div class="bg-white outline outline-[#BBA98D] w-1/2 gap-3 rounded-md p-5 shadow-lg flex flex-col  ">
            <h1 class="text-gray-800 font-bold text-2xl mb-4">تسجيل جديد</h1>

            
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
                    onChange={(e) => setUsername(e.target.value)}
                    class="pl-2 outline-none border-none py-2"
                    type="text"
                    placeholder="اسم المستخدم"
                  />
                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                  <input
                    value={nationalID}
                    onChange={(e) => setNationalID(e.target.value)}
                    class="pl-2 outline-none border-none py-2"
                    type="text"
                    placeholder="رقم الهوية"
                  />
                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="pl-2 outline-none border-none py-2"
                    type="email"
                    placeholder="البريد الإلكتروني"
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
                    onChange={(e) => setPassword(e.target.value)}
                    class="pl-2 outline-none border-none py-2"
                    type="password"
                    placeholder="كلمة السر"
                  />
                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    class="pl-2 outline-none border-none py-2"
                    type="password"
                    placeholder="تاكيد كلمة السر"
                  />
                </div>

                <div className="flex gap-5 justify-center rounded-lg my-4">
              <label
                htmlFor="owner"
                className={`text-sm font-normal ${
                  selectedOption === "owner"
                    ? "text-white bg-primary"
                    : "text-black bg-gray-200"
                } rounded-lg p-1`}
              >
                مالك عقار
              </label>
              <input
                type="radio"
                id="owner"
                checked={selectedOption === "owner"}
                onChange={handleOptionChange}
              />

              <label
                htmlFor="tenant"
                className={`text-sm font-normal ${
                  selectedOption === "tenant"
                    ? "text-white bg-primary"
                    : "text-black bg-gray-200"
                } rounded-lg p-1`}
              >
                مستأجر
              </label>
              <input
                type="radio"
                id="tenant"
                checked={selectedOption === "tenant"}
                onChange={handleOptionChange}
              />
            </div>

                <div className="flex flex-row-reverse gap-5 justify-center mt-3 ">
                  {" "}
                  <label className="" htmlFor="terms">
                    اوافق على جميع الشروط والاحكام
                  </label>
                  <input
                    value={checkBox}
                    onChange={(e) => setCheckBox(e.target.checked)}
                    type="checkbox"
                    id="terms"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handelSubmit}
                    class="block w-44 bg-primary mt-4 py-2 rounded-2xl text-black font-semibold mb-2"
                  >
                    التسجيل
                  </button>
                </div>
                <p className="text-red-500">{message}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${bgsignup})` }}
          class="relative overflow-hidden md:flex bg-cover w-1/2 i justify-around items-center hidden"
        >
          <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
      </div>
    </>
  );
}

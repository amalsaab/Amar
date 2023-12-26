import React, { useState } from 'react'
import bgsignup from "../assets/bgSignup1.png" 

 
export default function Signup() {
    const [username , setUsername] =useState()
    const [nationalID , setNationalID ] =useState()
    const [email , setEmail] =useState()
    const [phone , setPhone] =useState()
    const [password , setPassword] =useState()
    const [confirmPassword , setConfirmPassword] =useState()
    const [checkBox , setCheckBox] =useState()


    
  return (
   <>


<div class="h-screen md:flex">
	<div style={{backgroundImage: `url(${bgsignup})`}}
		class="relative overflow-hidden md:flex bg-cover w-1/2 i justify-around items-center hidden">
		
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<div class="bg-white">
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
			<p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" />
      </div>
				<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
					<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Username" />
      </div>
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
      </div>
							<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
							<span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
		</div>
	</div>
</div>



















   <div className='h-[100vh] w-[100vw] flex '>
   <div className={`h-[100%] w-[50%] bg-[url(${bgsignup})] `}>

   </div>
   
<div dir='rtl' className='h-[100%] w-[50%] flex items-center  '>

    <div className='h-full w-full felx flex-col'>
<div className='flex justify-between ' >
    <h1>تسجيل جديد</h1>
    <div className='w- flex gap-5 p-2 rounded-lg bg-slate-200 '>
 <button >مالك عقار</button>
<button>مستأجر</button>

    </div>
</div>
<div className='w-full flex justify-center items-center p-2 rounded-lg shadow-xl'>
<div  class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">اسم المستخدم</label>
    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="اسم المستخدم" required/>
  </div>

  <div class="mb-5">
    <label for="nationalID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم الهوية</label>
    <input type="text" value={nationalID} onChange={(e)=>setNationalID(e.target.value)} id="nationalID" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="1234567890" required/>
  </div>

  <div class="mb-5">
    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم الجوال</label>
    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="050505050" required/>
  </div>

  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">البريد الإلكتروني</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example@gmail.com" required/>
  </div>

  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">كلمة المرور</label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>

  <div class="mb-5">
    <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تأكيد كلمة المرور</label>
    <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} id="confirmPassword" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>

  
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value={checkBox} onChange={(e)=>setCheckBox(e.target.checked)} class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div>
    <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">انا اوافق على <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">جميع الشروط والأحكام</a></label>
  </div>
  <button  class="text-black bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</div>
</div>
</div>
</div>
   </div>
   </>
  )
}

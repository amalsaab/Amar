import React from 'react'
import Aqar from '../../assets/aqar.png'

function Testing() {
  return (
    <div className='flex h-[100vh] w-full items-center justify-center '>
        
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 outline outline-[#BBA98D]">
   
  <div class="p-6 flex  justify-between">

<div>
<h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        شقق المتكاملة
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    الرياض ، حي الوادي
    </p>
</div>
<img width={100} src={Aqar} alt="" />


  </div>
  <div class="p-6" >
    <h1 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">عمر العقار: 10 سنوات</h1>
    <h1 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">عدد الوحدات: 20</h1>
  </div>
  <div class="p-6 pt-0">
    <a href="#" class="inline-block">
      <button
        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-md select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 outline outline-[#BBA98D]"
        type="button">
       
       عرض المزيد
      
      </button>
    </a>
  </div>
</div> 
        
    </div>
  )
}

export default Testing
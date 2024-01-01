import React from 'react'
import { Link } from 'react-router-dom'
import Aqar from '../.../../assets/aqar.png'
export default function RentPayments() {
  return (
<>

{/* content here */}

<div className='flex w-full h-18  items-center justify-center '>
    <div className='bg-white outline outline-[#BBA98D] flex justify-between items-center m-10 rounded-md w-full p-4'>
        
        <div className='flex flex-col' >
            <h1 className='text-[2rem] font-bold  '>شقق المتكاملة</h1>
            <h1>الرياض ، حي الوادي</h1>
        </div>
        <div >
            <img width={150} src={Aqar} alt="" srcset="" />
        </div>

    </div>


    </div>

    <div className='flex w-full h-18  items-center justify-center '>
    <div className='bg-white outline outline-[#BBA98D] flex justify-between items-center m-10 rounded-md w-full p-4'>
        
        <div className='flex flex-col' >
            <h1 className='text-[2rem] font-bold  '>شقة رقم 1 </h1>
            <h1>اسم المستأجر : محمد الشمري</h1>
        </div>
        <div >
            <img width={150} src={Aqar} alt="" srcset="" />
        </div>

    </div>


    </div>
    
    <div className='bg-white outline outline-[#BBA98D] flex flex-col justify-between items-center m-10 rounded-md p-4'>
  <h1 className='text-lg bg-'>سجل الدفعات</h1>
  <div className='flex gap-20'>
    <h1 >القيمة الَّسنوية للإيجار: 30000 ريال</h1>
    <h1 >دورة سداد الايجار: نصف سنوي</h1>
  </div>

    <div dir='rtl' className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>رقم الدفعة</th>
        <th>تاريخ الدفعة</th>
        <th>اجمالي القيمة</th>
        <th>المدفوع</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th> 
        <td>15000 ريال</td>
        <td>1-6-2023</td>
        <td>تم الدفع</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>15000 ريال</td>
        <td>1-12-2023</td>
        <td>لم يتم الدفع</td>
      </tr>
      {/* row 3 */}
      
    </tbody>
  </table>
</div>
</div>

</>
    )
}

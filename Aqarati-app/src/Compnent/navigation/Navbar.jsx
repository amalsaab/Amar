import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/whitelogo.svg'
function Navbar() {
  return (
    <div>
       <div className='flex justify-between w-[100vw] h-[7vh] p-10 items-center text-white bg-[#BBA98D]   '>



<div className='flex items-center justify-around w-[30vw]  '>


    <Link to='/'>
    <div>
    {/* <h1 className='text-[2rem]'>LOGO</h1> */}
    <img className='h-[4.6rem]' src={logo} alt="" />
    </div>

    </Link>

    <Link to='/Test'>
    <h1>مساعدة</h1>

    </Link>
    <h1>تسجيل عقار</h1>
    <h1>الخدمات</h1>

</div>
<div className=' flex gap-10'>
  <Link to='/signup'>
  <button className="btn btn-outline btn-secondary">تسجيل جديد</button>
  </Link>
  <Link to='/login'>
  <button className="btn btn-outline btn-secondary">تسجيل دخول</button>
  </Link>
</div>
</div>
    </div>
  )
}

export default Navbar
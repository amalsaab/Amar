import React from 'react'
import './Landing.css'
import { useState, useEffect, useRef } from 'react';
import bg1 from './bg1.png'
import line from './line.png'
import step1 from './step1.png'
import step2 from './step2.png'
import step3 from './step3.png'
import step4 from './step4.png'
import Qimg from './Qimg.png'



function Landing() {

    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
      const intervalId = setInterval(() => {
        // Increment the active slide, and reset to 1 if it exceeds the total number of slides
        setActiveSlide((prevSlide) => (prevSlide % 3) + 1);
      }, 3000); // 3000 milliseconds = 3 seconds
  
      // Clear the interval on component unmount
      return () => clearInterval(intervalId);
    }, []);



const changetoM1 = ()=>{
    let title = document.getElementById("title")
    let description = document.getElementById("description")
    let m1 = document.getElementById("m1")
    let m2 = document.getElementById("m2")
    let m3 = document.getElementById("m3")

    title.innerText =" المستأجر"
    description.innerText = " يعزز (اسم الموقع) للمستأجرين تجربة الإيجار بتوفير إمكانية الدفع الإلكتروني ومشاهدة مواعيد الدفعات. كما يُيسّر طلب الصيانة، ويوفر معلومات شاملة حول العقار."

    m1.className = "btn btn-sm bg-[#BBA98D] w-[2vw] rounded-full"
    m2.className= "btn btn-sm bg-[#CAC8C8]  w-[2vw] rounded-full"
    m3.className= "btn btn-sm bg-[#CAC8C8]  w-[2vw] rounded-full"

}
const changetoM2 = ()=>{
    let title = document.getElementById("title")
    let description = document.getElementById("description")
    let m1 = document.getElementById("m1")
    let m2 = document.getElementById("m2")
    let m3 = document.getElementById("m3")

    title.innerText =" مالك العقار"
    description.innerText = " تشمل تتبع الدفعات، وإدارة الصيانة، وتوفير تقارير شاملة، مما يسهم في تحقيق أداء متميز وفعالية أعلى في إدارة العقارات."


    m1.className = "btn btn-sm bg-[#CAC8C8] w-[2vw] rounded-full"
    m2.className= "btn btn-sm bg-[#BBA98D]  w-[2vw] rounded-full"
    m3.className= "btn btn-sm bg-[#CAC8C8]  w-[2vw] rounded-full"
}
const changetoM3 = ()=>{
    let title = document.getElementById("title")
    let description = document.getElementById("description")
    let m1 = document.getElementById("m1")
    let m2 = document.getElementById("m2")
    let m3 = document.getElementById("m3")
    title.innerText =" مكاتب العقار"
    description.innerText = " بمهنية عالية وخبرة واسعة في سوق العقارات، نقدم في مكتبنا خدمات فعّالة لمساعدة عملائنا في البحث عن أماكن إقامة مثالية، ونقدم استشارات شاملة لمالكي العقارات لتحسين وتسويق ممتلكاتهم بكفاءة."



    m1.className = "btn btn-sm bg-[#CAC8C8] w-[2vw] rounded-full"
    m2.className= "btn btn-sm bg-[#CAC8C8]  w-[2vw] rounded-full"
    m3.className= "btn btn-sm bg-[#BBA98D]  w-[2vw] rounded-full"
}

  return (
    <div>
        <div className='flex justify-between w-[100vw] h-[7vh] p-10 items-center text-white bg-[#BBA98D] '>

            <div className='w-[10vw]'>
                <button className='w-[8vw] rounded-sm bg-[#ffff] outline outline-[#BBA98D] text-black'>تسجيل الدخول</button>
            </div>

            <div className='flex items-center justify-around w-[30vw]  '>
                <h1>مساعدة</h1>
                <h1>تسجيل عقار</h1>
                <h1>الخدمات</h1>

                <div>
                <h1 className='text-[2rem]'>LOGO</h1>
                </div>
            </div>

        </div>

      

        <div className="carousel w-full h-[90vh]">
      <div id="slide1" className={`carousel-item relative w-full ${activeSlide === 1 ? 'active' : ''}`}>
        <img src={bg1} alt="Slide 1" className="w-full h-full" />
        <div className="absolute flex justify-between transform -translate-y-1/6 left-200 right-5 top-1/2">
          <h1 className='text-white text-[3rem] w-[50vw] text-right'>
            نوفر لكم خدمات إدارة الإيجار بكفاءة وسهولة، يتيح لك تأجير ممتلكاتك بثقة ويعنى بجميع جوانب العملية الإدارية
          </h1>
        </div>
      </div>

      <div id="slide2" className={`carousel-item relative w-full ${activeSlide === 2 ? 'active' : ''}`}>
        <img src={bg1} alt="Slide 2" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/6 left-200 right-5 top-1/2">
          <h1 className='text-white text-[3rem] w-[50vw] text-right'>
            نوفر لكم خدمات إدارة الإيجار بكفاءة وسهولة، يتيح لك تأجير ممتلكاتك بثقة ويعنى بجميع جوانب العملية الإدارية
          </h1>
        </div>
      </div>

      <div id="slide3" className={`carousel-item relative w-full ${activeSlide === 3 ? 'active' : ''}`}>
        <img src={bg1} alt="Slide 3" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/6 left-200 right-5 top-1/2">
          <h1 className='text-white text-[3rem] w-[50vw] text-right'>
            نوفر لكم خدمات إدارة الإيجار بكفاءة وسهولة، يتيح لك تأجير ممتلكاتك بثقة ويعنى بجميع جوانب العملية الإدارية
          </h1>
        </div>
      </div>
      <div className="flex justify-end w-full py-2 gap-2 absolute items-end h-[85vh] pr-10 ">
  <a href="#slide1" className="btn btn-sm"></a> 
  <a href="#slide2" className="btn btn-sm"></a> 
  <a href="#slide3" className="btn btn-sm"></a> 
</div>
    </div>

{/* Slide and Nav ends */}


    <div className='w-[100vw] h-[70vh]'>

        <div className='flex items-center justify-center w-[100vw] h-[30vh] text-[3rem]'>
            <h1>من نخدم</h1>
        </div>


        <div className='flex items-center justify-center w-[100vw] h-[50vh] flex-col'>

            <div className='flex items-center'>

                <p id='description' className='w-[40vw] text-right text-[1.7rem]'>يعزز (اسم الموقع) للمستأجرين تجربة الإيجار بتوفير إمكانية الدفع الإلكتروني ومشاهدة مواعيد الدفعات. كما يُيسّر طلب الصيانة، ويوفر معلومات شاملة حول العقار. </p>
                <img src={line} width={100} alt="" />
                <h1 id='title' className='text-[3rem]'>المستأجر</h1>


            </div>

            <div className='pt-10 flex gap-10 '>
                <div className='bg-[#D9D9D9] flex gap-10 rounded-full w-[13vw] h-[5vh] justify-center  items-center  '>
                <button id='m1'   onClick={changetoM1} className="btn btn-sm bg-[#BBA98D] w-[2vw] rounded-full"> </button>
                <button id='m2'  onClick={changetoM2} className="btn btn-sm bg-[#CAC8C8]  w-[2vw] rounded-full"> </button>
                <button id='m3'  onClick={changetoM3} className="btn btn-sm bg-[#CAC8C8] w-[2vw] rounded-full "> </button>

                </div>
          
            </div>
        </div>
    </div>

    {/* Description ends */}


    {/* Journy start */}

<div className='w-[100vw] h-[100vh] bg-[#F6F6F6]'>

<div className='flex w-[100vw] h-[10vh] items-end justify-center '>

    <h1 className='text-[3rem]'>رحلتك في عقارك</h1>

</div>

    <div className='flex flex w-[100vw] h-[10vh] items-end justify-center '>
        <div className="join ">
            <input className="join-item btn btn-square w-[7vw] bg-white" type="radio" name="options" aria-label="الوسيط العقاري"  />
            <input className="join-item btn btn-square w-[7vw]  bg-white" type="radio" name="options" aria-label="مالك العقار" />
            <input className="join-item btn btn-square w-[7vw]  bg-white" type="radio" name="options" aria-label="المستأجر" checked/>
        </div>
    </div>


    <div>

   

    <div className='flex flex-col w-[90vw] items-end'>

    <div className='flex flex-col'>

  

    <img width={300} src={step1} alt="" />
    <img width={300} src={step2} alt="" />
    <img width={300} src={step3} alt="" />
    <img width={300} src={step4} alt="" />

    </div>
 
    </div>


    </div>

    </div>

    {/* Comman Quatuins start here */}

    <div className='flex w-[100vw] h-[90vh]'>

        <div className='flex flex-col w-[60vw] h-[90vh] items-center justify-center'>
    
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-[#BBA98D] text-right w-[30vw]">
            <div className="collapse-title text-xl font-medium">
               ماهي طرق السداد المتوفرة ؟
            </div>
            <div className="collapse-content"> 
                <p>طرق السداد المتفورة حاليا هي: ابل باي وبطاقة مدى</p>
            </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-[#BBA98D] text-right w-[30vw]">
            <div className="collapse-title text-xl font-medium">
                كم يستغرق وقت قبول عقاري؟
            </div>
            <div className="collapse-content"> 
                <p>حوالي يوم او يومي عمل</p>
            </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-[#BBA98D] text-right w-[30vw]">
            <div className="collapse-title text-xl font-medium">
                ماهي الفئات المستهدفة
            </div>
            <div className="collapse-content"> 
                <p>جميع من يملك عقار يريد تأجيره وجميع مستأجرين العقار</p>
            </div>
            </div>
            
            <div className='flex h-[5vh] items-end justify-end w-[29vw]  '>
            <button className='w-[8vw] h-[4vh] rounded-sm bg-[#ffff] outline outline-[#BBA98D] text-black'>
                عرض المزيد

            </button>

            </div>

        </div>


        <div className='flex h-[90vh] items-center'>
            <img src={Qimg} alt="" />
        </div>

    </div>


    <div className='flex w-[100vw] h-[20vh] bg-[#BBA98D]'>


        <div className='flex items-center h-[20vh] w-[10vw] justify-end'>
        <nav>
            <div className="flex flex-col gap-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
            </svg>  

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="email"><path fill="#222" d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path><path fill="#222" d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path><path fill="#222" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="phone"><path d="M23.45 20.93a3 3 0 0 0-4.25 0l-1.45 1.45a26.14 26.14 0 0 1-4.51-3.62 26.62 26.62 0 0 1-3.62-4.51l1.45-1.45a3 3 0 0 0 0-4.25L8.24 5.73a2.93 2.93 0 0 0-2.11-.88h0A3 3 0 0 0 4 5.73L2.64 7.08A6.37 6.37 0 0 0 1 12.33c.32 3.75 2.78 8.26 6.57 12.06S15.92 30.64 19.67 31a7.87 7.87 0 0 0 .84 0 6.07 6.07 0 0 0 4.41-1.64L26.27 28a3 3 0 0 0 .88-2.13 2.93 2.93 0 0 0-.88-2.11zm1.41 5.66L23.5 27.94a4.57 4.57 0 0 1-3.66 1c-3.25-.28-7.39-2.58-10.81-6S3.31 15.41 3 12.16a4.53 4.53 0 0 1 1-3.66L5.41 7.14a1 1 0 0 1 .71-.29h0a1 1 0 0 1 .71.29L9.66 10a1 1 0 0 1 0 1.41l-2 2a1 1 0 0 0-.16 1.21 27.49 27.49 0 0 0 4.33 5.58 27.49 27.49 0 0 0 5.58 4.33 1 1 0 0 0 1.21-.16l2-2a1 1 0 0 1 1.41 0l2.83 2.83h0a1 1 0 0 1 .29.71A1 1 0 0 1 24.86 26.59zM26.6 5.39A14.92 14.92 0 0 0 16 1a1 1 0 1 0 0 2A13 13 0 0 1 29 16.11a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1A14.91 14.91 0 0 0 26.6 5.39z"></path><path d="M20.91,11.11a6,6,0,0,1,1.77,4.31,1,1,0,0,0,1,1h0a1,1,0,0,0,1-1,8,8,0,0,0-8-8.1,1,1,0,1,0,0,2A6,6,0,0,1,20.91,11.11Z"></path></svg>
            </div>
        </nav>
        </div>

        <div className='flex w-[100vw] justify-end items-center '>

            
   

            <div className='flex w-[40vw]  justify-around items-center text-right'>

            <div className='flex flex-col gap-3'>
                <h1 className='text-[1.5rem]'> الخدمات</h1>
                <h1> طرق الدفع</h1>
                <h1>الاسئلة الشائعة</h1>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-[1.5rem]'>اسم الموقع</h1>
                <h1>عن موقعنا</h1>
                <h1>الفريق</h1>
            </div>

            <h1 className='text-[3rem]'>Logo</h1>

            </div>
    


        </div>

    </div>

            


   
    </div>
  )
}

export default Landing
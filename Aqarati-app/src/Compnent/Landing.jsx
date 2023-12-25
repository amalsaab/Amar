import React from 'react'
import './Landing.css'
import { useState, useEffect } from 'react';
import bg1 from './bg1.png'
import line from './line.png'

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
    title.innerText =" المستأجر"
    description.innerText = " يعزز (اسم الموقع) للمستأجرين تجربة الإيجار بتوفير إمكانية الدفع الإلكتروني ومشاهدة مواعيد الدفعات. كما يُيسّر طلب الصيانة، ويوفر معلومات شاملة حول العقار."
}
const changetoM2 = ()=>{
    let title = document.getElementById("title")
    let description = document.getElementById("description")
    title.innerText =" مالك العقار"
    description.innerText = " تشمل تتبع الدفعات، وإدارة الصيانة، وتوفير تقارير شاملة، مما يسهم في تحقيق أداء متميز وفعالية أعلى في إدارة العقارات."
}
const changetoM3 = ()=>{
    let title = document.getElementById("title")
    let description = document.getElementById("description")
    title.innerText =" مكاتب العقار"
    description.innerText = " بمهنية عالية وخبرة واسعة في سوق العقارات، نقدم في مكتبنا خدمات فعّالة لمساعدة عملائنا في البحث عن أماكن إقامة مثالية، ونقدم استشارات شاملة لمالكي العقارات لتحسين وتسويق ممتلكاتهم بكفاءة."
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

            <div className='pt-10 flex gap-10'>
                <button  onClick={changetoM1} className="btn btn-sm"> المستأجر</button>
                <button onClick={changetoM2} className="btn btn-sm">مالك العقار</button>
                <button  onClick={changetoM3} className="btn btn-sm">مكاتب العقار</button>
            </div>
        </div>
    </div>

    {/* Description ends */}


    {/* Journy start */}

    <div className='w-[100vw] h-[100vh] bg-[#F6F6F6]'>

    </div>


            


   
    </div>
  )
}

export default Landing
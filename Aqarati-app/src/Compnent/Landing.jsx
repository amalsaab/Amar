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
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';



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

<Navbar/>
      

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

   

    <div className='flex  w-[90vw] items-end justify-end'>
        <div className='text-right flex flex-col gap-10'>

            <div className='w-[30vw]'>
                <h1>Header</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem illum pariatur doloremque laudantium unde nostrum fugit corrupti animi accusantium, dolor ad quas a labore debitis nisi praesentium ea odit!</p>
            </div>

            <div className='w-[30vw]'>
                <h1>Header</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem illum pariatur doloremque laudantium unde nostrum fugit corrupti animi accusantium, dolor ad quas a labore debitis nisi praesentium ea odit!</p>
            </div>

            <div className='w-[30vw]'>
                <h1>Header</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem illum pariatur doloremque laudantium unde nostrum fugit corrupti animi accusantium, dolor ad quas a labore debitis nisi praesentium ea odit!</p>
            </div>

            <div className='w-[30vw]'>
                <h1>Header</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem illum pariatur doloremque laudantium unde nostrum fugit corrupti animi accusantium, dolor ad quas a labore debitis nisi praesentium ea odit!</p>
            </div>



       </div>

    <div className='flex flex-col '>
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
                <Link to='/Q'>
             <button className='w-[8vw] h-[4vh] rounded-sm bg-[#ffff] outline outline-[#BBA98D] text-black'>
                عرض المزيد

            </button>
                </Link>


            </div>

        </div>


        <div className='flex h-[90vh] items-center'>
            <img src={Qimg} alt="" />
        </div>

    </div>




    <Footer/>


   
    </div>
  )
}

export default Landing
import React from "react";
import { useState, useEffect} from "react";
import bg1 from "../assets/bg1.png";
import line from "../assets/line.png";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import Qimg from "../assets/Qimg.png";
import { Link } from "react-router-dom";
import Navbar from "../Compnent/navigation/Navbar";
import Footer from "../Compnent/navigation/Footer";

function Landing() {
  const [step1state, updatestep1] = useState("تسجيل حساب جديد");
  const [step1para, updatestep1para] = useState(
    "سجل حساب جديد مع التأكد من المعلومات المدخله بشكل صحيح"
  );
  const [step2state, updatestep2] = useState("اعلام مالك العقار");
  const [step2para, updatestep2para] = useState(
    "اعلم مالك العقار المستأجر بان لديك حساب فعال في المنصة"
  );
  const [step3state, updatestep3] = useState("ادارة العقار المستأجر");
  const [step3para, updatestep3para] = useState(
    "يمكنك الان ادارة ورؤية السجل السابق للعقار المستأجر "
  );
  const [step4state, updatestep4] = useState("الدفع الالكتروني");
  const [step4para, updatestep4para] = useState(
    "يمكنك الان الدفع عن طريق المنصه باكثر من طريقة دفع ورؤية كل من الدفعات السابقه والقدمه"
  );
  const [clickedUs, setClickedUs] = useState("المستأجر");

  const RenterClicked = () => {
    updatestep1("تسجيل حساب جديد");
    updatestep1para("سجل حساب جديد مع التأكد من المعلومات المدخله بشكل صحيح");
    updatestep2("اعلام مالك العقار");
    updatestep2para("اعلم مالك العقار المستأجر بان لديك حساب فعال في المنصة");

    updatestep3("ادارة العقار المستأجر");
    updatestep3para("يمكنك الان ادارة ورؤية السجل السابق للعقار المستأجر ");

    updatestep4("الدفع الالكتروني");
    updatestep4para(
      "يمكنك الان الدفع عن طريق المنصه باكثر من طريقة دفع ورؤية كل من الدفعات السابقه والقدمه"
    );
    setClickedUs("المستأجر");
  };

  const ownerClicked = () => {
    updatestep1("تسجيل حساب جديد");
    updatestep2("رفع العقار الخاص بك");
    updatestep3("ادارة العقار ");
    updatestep4(" رفع الحساب البنكي ");

    updatestep1para(
      "تسجيل حساب جديد مع اختيار نوع الحساب والتاكد من البيانات المدخله"
    );
    updatestep2para("رفع بيانات العقار الخاص بك وانتظار موافقه المشرفين");
    updatestep3para(
      "ادارة العقارات الخاصه بك مع امكانيه اسناد مستأجر لكل عقار واضافة صيانه "
    );
    updatestep4para("رفع الحساب البنكي ليتم تحويل مبالغ الدفع بكل دوري");
    setClickedUs("المالك");
  };

  const DealerCliked = () => {
    updatestep1("تسجيل حساب جديد");
    updatestep2("رفع العقار ");
    updatestep3("ادارة العقار ");
    updatestep4(" رفع الحساب البنكي ");

    updatestep1para(
      "تسجيل حساب جديد مع اختيار نوع الحساب والتاكد من البيانات المدخله"
    );
    updatestep2para("رفع بيانات العقار وانتظار موافقه المشرفين");
    updatestep3para(
      "ادارة العقارات الخاصه بك مع امكانيه اسناد مستأجر لكل عقار واضافة صيانه "
    );
    updatestep4para("رفع الحساب البنكي ليتم تحويل مبالغ الدفع بكل دوري");
    setClickedUs('الوسيط')
  };

  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevActiveSlide) => (prevActiveSlide % 3) + 1);
    }, 200); 

    return () => clearInterval(intervalId);
  }, []);

  const changetoM1 = () => {
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let m1 = document.getElementById("m1");
    let m2 = document.getElementById("m2");
    let m3 = document.getElementById("m3");

    title.innerText = " المستأجر";
    description.innerText =
      " يعزز (اسم الموقع) للمستأجرين تجربة الإيجار بتوفير إمكانية الدفع الإلكتروني ومشاهدة مواعيد الدفعات. كما يُيسّر طلب الصيانة، ويوفر معلومات شاملة حول العقار.";

    m1.className = "btn btn-sm bg-[#BBA98D] w-[2vw] rounded-full";
    m2.className = "btn btn-sm bg-[#CAC8C8]  w-[2vw] rounded-full";
    m3.className = "btn btn-sm bg-[#CAC8C8]  w-[2vw] rounded-full";
  };
  const changetoM2 = () => {
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let m1 = document.getElementById("m1");
    let m2 = document.getElementById("m2");
    let m3 = document.getElementById("m3");

    title.innerText = " مالك العقار";
    description.innerText =
      " تشمل تتبع الدفعات، وإدارة الصيانة، وتوفير تقارير شاملة، مما يسهم في تحقيق أداء متميز وفعالية أعلى في إدارة العقارات.";

    m1.className = "btn btn-sm bg-[#CAC8C8] w-[2vw] rounded-full";
    m2.className = "btn btn-sm bg-[#BBA98D]  w-[2vw] rounded-full";
    m3.className = "btn btn-sm bg-[#CAC8C8]  w-[2vw] rounded-full";
  };
  const changetoM3 = () => {
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let m1 = document.getElementById("m1");
    let m2 = document.getElementById("m2");
    let m3 = document.getElementById("m3");
    title.innerText = " وسيط العقار";
    description.innerText =
      " بمهنية عالية وخبرة واسعة في سوق العقارات، نقدم في مكتبنا خدمات فعّالة لمساعدة عملائنا في البحث عن أماكن إقامة مثالية، ونقدم استشارات شاملة لمالكي العقارات لتحسين وتسويق ممتلكاتهم بكفاءة.";

    m1.className = "btn btn-sm bg-[#CAC8C8] w-[2vw] rounded-full";
    m2.className = "btn btn-sm bg-[#CAC8C8]  w-[2vw] rounded-full";
    m3.className = "btn btn-sm bg-[#BBA98D]  w-[2vw] rounded-full";
  };

  return (
    <div>
      <Navbar />

      <div className="carousel w-full h-[90vh] max-sm:w-full max-sm:h-full max-md:w-full max-md:h-full">
        <div
          id="slide1"
          className={`carousel-item relative w-full ${
            activeSlide === 1 ? "active" : ""
          }`}
        >
          <img src={bg1} alt="Slide 1" className="w-full h-full max-sm:w-full max-sm:h-full max-md:w-full max-md:h-full" />
          <div className="absolute flex justify-between transform -translate-y-1/6 left-200 right-5 top-1/2">
            <h1 className="text-white text-[3rem] w-[50vw] text-right max-sm:text-[1.2rem] max-sm:w-full max-md:text-[1.9rem] max-md:w-full">
              نوفر لكم خدمات إدارة الإيجار بكفاءة وسهولة، يتيح لك تأجير ممتلكاتك
              بثقة ويعنى بجميع جوانب العملية الإدارية
            </h1>
          </div>
        </div>

        <div
          id="slide2"
          className={`carousel-item relative w-full ${
            activeSlide === 2 ? "active" : ""
          }`}
        >
          <img src={bg1} alt="Slide 2" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/6 left-200 right-5 top-1/2">
            <h1 className="text-white text-[3rem] w-[50vw] text-right max-sm:text-center">
              نوفر لكم خدمات إدارة الإيجار بكفاءة وسهولة، يتيح لك تأجير ممتلكاتك
              بثقة ويعنى بجميع جوانب العملية الإدارية
            </h1>
          </div>
        </div>

        <div
          id="slide3"
          className={`carousel-item relative w-full ${
            activeSlide === 3 ? "active" : ""
          }`}
        >
          <img src={bg1} alt="Slide 3" className="w-full" />

          <div className="absolute flex justify-between transform -translate-y-1/6 left-200 right-5 top-1/2">
            <h1 className="text-white text-[3rem] w-[50vw] text-right">
              نوفر لكم خدمات إدارة الإيجار بكفاءة وسهولة، يتيح لك تأجير ممتلكاتك
              بثقة ويعنى بجميع جوانب العملية الإدارية
            </h1>
          </div>
        </div>
 
      </div>

      {/* Slide and Nav ends */}

      <div className="pb-10">
        <div className="flex items-center justify-center w-[100vw] h-[30vh] text-[3rem] ">
          <h1>من نخدم</h1>
        </div>

        <div className="flex items-center justify-center  flex-col ">
          <div className="flex items-center max-sm:flex-col">
            <h1 id="title" className="text-[3rem] max-sm:text-[2.4rem]">
              المستأجر
            </h1>
            <img className="w-[6rem] h-[6rem] max-sm:w-[2rem] max-sm:h-[2rem]" src={line} width={100} alt="" />

            <p id="description" className="w-[40vw] text-right text-[1.7rem] max-sm:text-[1.4rem] max-sm:w-full p-8 max-md:text-[1.3rem] ">
              يقدم عمَار للمستأجرين تجربةإيجار فريدة بتوفير إمكانية الدفع
              الإلكتروني ومشاهدة مواعيد الدفعات. كما يُيسّر طلب الصيانة، ويوفر
              معلومات شاملة حول العقار.{" "}
            </p>
          </div>
        </div>
        <div className="pt-20 flex gap-10 w-full  justify-center ">
          <div className="bg-[#D9D9D9] flex gap-10 rounded-full w-64 h-[5vh] justify-center  items-center max-sm:w-64 max-md:w-64  ">
            <button
              id="m1"
              onClick={changetoM1}
              className="btn btn-sm bg-[#BBA98D] w-[2vw] rounded-full"
            >
              {" "}
            </button>
            <button
              id="m2"
              onClick={changetoM2}
              className="btn btn-sm bg-[#CAC8C8]  w-[2vw] rounded-full"
            >
              {" "}
            </button>
            <button
              id="m3"
              onClick={changetoM3}
              className="btn btn-sm bg-[#CAC8C8] w-[2vw] rounded-full "
            >
              {" "}
            </button>
          </div>
        </div>
      </div>

      {/* Description ends */}

      {/* Journy start */}

      <div className=" bg-[#F6F6F6] py-5">
        <div className="flex  items-end justify-center ">
          <h1 className="text-[3rem] max-sm:text-[2rem]">رحلتك في عقارك</h1>
        </div>

        <div className="flex w-[100vw] h-[10vh] items-end justify-center max-sm:h-full max-md:my-10 ">
          <div className="join ">
            <div className="pt-20 flex gap-10 w-[100vw]  justify-center ">
              <div className="bg-[#D9D9D9] flex gap-10 rounded-full  justify-center  items-center   max-sm:h-full  ">
                <button
                  onClick={RenterClicked}
                  className={clickedUs === "المستأجر" ?"btn btn-sm bg-[#BBA98D]  rounded-full":"btn btn-sm bg-[#CAC8C8]   rounded-full"}
                >
                  {" "}
                  المستأجر
                </button>
                <button
                  onClick={ownerClicked}
                  className={clickedUs === "المالك" ?"btn btn-sm bg-[#BBA98D]  rounded-full":"btn btn-sm bg-[#CAC8C8]   rounded-full"}
                >
                  {" "}
                  مالك العقار{" "}
                </button>
                <button
                  onClick={DealerCliked}
                  className={clickedUs === "الوسيط" ?"btn btn-sm bg-[#BBA98D]  rounded-full":"btn btn-sm bg-[#CAC8C8]   rounded-full"}
                >
                  {" "}
                  وسيط عقاري
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-end justify-end">
            <div className="w-[90vw] flex flex-col gap-10 items-start justify-center ">
              <div className="flex max-sm:flex-col justify-end items-center max-sm:items-center  ">
                <img width={300} src={step1} alt="" />
                <div className="w-[30vw] max-sm:w-[20rem]  max-sm:text-center">
                  <h1 className="font-bold text-[2rem]">{step1state}</h1>
                  <p>{step1para}</p>
                </div>
              </div>

              <div className="flex justify-center items-center max-sm:flex-col ">
                <img width={300} src={step2} alt="" />
                <div className="w-[30vw] max-sm:w-[20rem] max-sm:text-center">
                  <h1 className="font-bold text-[2rem]"> {step2state}</h1>
                  <p>{step2para}</p>
                </div>
              </div>

              <div className="flex justify-center items-center max-sm:flex-col ">
                <img width={300} src={step3} alt="" />
                <div className="w-[30vw] max-sm:w-[20rem] max-sm:text-center">
                  <h1 className="font-bold text-[2rem]"> {step3state}</h1>
                  <p>{step3para}</p>
                </div>
              </div>

              <div className="flex justify-center items-center max-sm:flex-col">
                <img width={300} src={step4} alt="" />
                <div className=" max-sm:w-[20rem] max-sm:text-center">
                  <h1 className="font-bold text-[2rem]"> {step4state}</h1>
                  <p>{step4para}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comman Quatuins start here */}

      <div className="flex w-[100vw] max-sm:flex-col max-md:flex-col max-md:items-center">
        <div className="flex flex-col w-[60vw] p-10 gap-2 items-center justify-center max-sm:w-full ">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-[#BBA98D] text-right w-[30vw] max-sm:w-full max-md:w-full "
          >
            <div className="collapse-title text-xl font-medium">
              ماهي طرق السداد المتوفرة ؟
            </div>
            <div className="collapse-content bg-accent pt-3">
              <p>طرق السداد المتفورة حاليا هي: ابل باي وبطاقة مدى</p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-[#BBA98D] text-right w-[30vw] max-sm:w-full max-md:w-full"
          >
            <div className="collapse-title text-xl font-medium">
              كم يستغرق وقت قبول عقاري؟
            </div>
            <div className="collapse-content bg-accent pt-3">
              <p>حوالي يوم او يومي عمل</p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-[#BBA98D] text-right w-[30vw] max-sm:w-full max-md:w-full"
          >
            <div className="collapse-title text-xl font-medium">
              ماهي الفئات المستهدفة
            </div>
            <div className="collapse-content bg-accent pt-3">
              <p>جميع من يملك عقار يريد تأجيره وجميع مستأجرين العقار</p>
            </div>
          </div>

          <div className="flex h-[5vh] items-end justify-end   ">
            
              <Link to="/Qu" className="btn btn-outline btn-primary w-32 btn-sm ">
                عرض المزيد
              </Link>
            
          </div>
        </div>

        <div className="flex w-[23rem] items-center">
          <img src={Qimg} alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;

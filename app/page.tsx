/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import ChartSuccess from "@/components/icons/ChartSuccess";
import Edit from "@/components/icons/Edit";
import Health from "@/components/icons/Health";
import Radar from "@/components/icons/Radar";
import Security from "@/components/icons/Security";
import Settings from "@/components/icons/Settings";
import ShieldTick from "@/components/icons/ShieldTick";
import Support from "@/components/icons/Support";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import LeftArrow from "@/components/icons/LeftArrow";


export default function Home() {


  const Cards = [
    {
      id: 1,
      title: "دعم متعدد المنصات",
      desc: "لولنا مرنة وتعمل بشكل متكامل مع منصات الإعلان الشهيرة مثل Google Ads، Bing Ads، وفيسبوك. سواء كنت تدير حملة عبر منصة واحدة أو متعددة",
      icon: ChartSuccess
    },
    {
      id: 2,
      title: "تحليلات ذكية وسهلة الاستخدام",
      desc: "نوفر لك لوحة تحكم سهلة الاستخدام، تعرض تحليلات ذكية ومفصلة حول حملاتك الإعلانية. من خلالها، يمكنك متابعة أداء حملاتك، ومعرفة المصادر",
      icon: Health
    },
    {
      id: 3,
      title: "تحسين أداء حملاتك الإعلانية",
      desc: "لا يقتصر دورنا على حماية ميزانيتك من النقرات الوهمية فقط، بل نساعد أيضًا في تحسين أداء حملاتك الإعلانية. من خلال حجب الأنشطة المشبوهة،",
      icon: Radar
    },
    {
      id: 4,
      title: "حماية من النقرات الوهمية",
      desc: "نقدم تقنية متطورة تعتمد على الذكاء الاصطناعي لاكتشاف وحظر النقرات الوهمية والضارة في الوقت الفعلي. من خلال تحليل بيانات دقيقة ومتنوعة،",
      icon: ShieldTick
    },
    {
      id: 5,
      title: "دعم فني متاح دائمًا",
      desc: "نقدم لك دعمًا فنيًا على مدار الساعة، لضمان أن تجربتك معنا خالية من المشاكل. فريقنا متواجد دائمًا للإجابة على أسئلتك وحل أي مشكلة",
      icon: Support
    },
    {
      id: 6,
      title: "تقارير مفصلة وقابلة للتخصيص",
      desc: "حصل على تقارير دقيقة حول أداء إعلاناتك، مع القدرة على تخصيص هذه التقارير حسب احتياجاتك. سواء تحليل عميق أو نظرة عامة سريعة",
      icon: Edit
    },
    {
      id: 7,
      title: "إعداد بسيط وسريع",
      desc: "ا حاجة إلى تعقيدات تقنية. بفضل واجهة المستخدم البسيطة ونظام الإعداد السريع، يمكنك البدء في حماية حملاتك الإعلانية خلال دقائق قليلة",
      icon: Settings
    },
    {
      id: 8,
      title: "أمان شامل لميزانيتك",
      desc: "ستثمر أموالك بحكمة. نحن نحمي ميزانيتك الإعلانية من الاستنزاف بسبب النقرات الوهمية، مما يضمن استغلال كل دولار تنفقه لتحقيق النتائج المطلوبة",
      icon: Security
    }

  ]

  const monthPrices = [
    {
      id: 1,
      // hot: "الأكثر شيوعاً",
      title: "المتميز",

      price: "400",
      currency: "ج.م  شهريا",
      supTitle: "هنا بقا هنكتب وصف بسيط للباقه",
      options: [
        { id: 1, text: "هذا النص يمكن استبداله" },
        { id: 2, text: "هذا النص يمكن استبداله" },
        { id: 3, text: "هذا النص يمكن استبداله" },
        { id: 4, text: "هذا النص يمكن استبداله" },
      ]

    },
    {
      id: 2,
      hot: "الأكثر شيوعاً",
      title: "باقه الحسيني برو",

      price: "300",
      currency: "ج.م  شهريا",
      supTitle: "هنا بقا هنكتب وصف بسيط للباقه",
      options: [
        { id: 1, text: "هذا النص يمكن استبداله" },
        { id: 2, text: "هذا النص يمكن استبداله" },
        { id: 3, text: "هذا النص يمكن استبداله" },
        { id: 4, text: "هذا النص يمكن استبداله" },
      ]

    },
    {
      id: 3,
      // hot: "",
      title: "المتميز",
      price: "300",
      currency: "ج.م  شهريا",
      supTitle: "هنا بقا هنكتب وصف بسيط للباقه",
      options: [
        { id: 1, text: "هذا النص يمكن استبداله" },
        { id: 2, text: "هذا النص يمكن استبداله" },
        { id: 3, text: "هذا النص يمكن استبداله" },
        { id: 4, text: "هذا النص يمكن استبداله" },
      ]

    }
  ]
  const yearPrices = [
    {
      id: 1,
      // hot: "الأكثر شيوعاً",
      title: "المتميز",

      price: "2400",
      currency: "ج.م  سنويا",
      supTitle: "هنا بقا هنكتب وصف بسيط للباقه",
      options: [
        { id: 1, text: "هذا النص يمكن استبداله" },
        { id: 2, text: "هذا النص يمكن استبداله" },
        { id: 3, text: "هذا النص يمكن استبداله" },
        { id: 4, text: "هذا النص يمكن استبداله" },
      ]

    },
    {
      id: 2,
      hot: "الأكثر شيوعاً",
      title: "باقه الحسيني برو",

      price: "1300",
      currency: "ج.م  سنويا",
      supTitle: "هنا بقا هنكتب وصف بسيط للباقه",
      options: [
        { id: 1, text: "هذا النص يمكن استبداله" },
        { id: 2, text: "هذا النص يمكن استبداله" },
        { id: 3, text: "هذا النص يمكن استبداله" },
        { id: 4, text: "هذا النص يمكن استبداله" },
      ]

    },
    {
      id: 3,
      // hot: "",
      title: "المتميز",
      price: "3300",
      currency: "ج.م  سنويا",
      supTitle: "هنا بقا هنكتب وصف بسيط للباقه",
      options: [
        { id: 1, text: "هذا النص يمكن استبداله" },
        { id: 2, text: "هذا النص يمكن استبداله" },
        { id: 3, text: "هذا النص يمكن استبداله" },
        { id: 4, text: "هذا النص يمكن استبداله" },
      ]

    }
  ]

  const Companys = [
    {
      id: 1,
      logo: "/assets/imgs/company-1.png",
    },
    {
      id: 2,
      logo: "/assets/imgs/company-2.png",
    },
    {
      id: 3,
      logo: "/assets/imgs/company-3.png",
    },
    {
      id: 4,
      logo: "/assets/imgs/company-4.png",
    },
    {
      id: 5,
      logo: "/assets/imgs/company-5.png",
    },
    {
      id: 6,
      logo: "/assets/imgs/company-6.png",
    }
  ]

  return (
    <div>
      <header className="flex justify-between items-center py-5  px-5 md:pl-[90px] md:pr-[100px] md:py-[25px] ">
        <div className="flex gap-5">
          <div>
            <Image src="/assets/imgs/dark-logo.png" alt="logo" width={60} height={50} />
          </div>
          <ul className="hidden md:flex text-sm font-bold gap-[55px] p-2 mr-12">
            <li>
              <Link href="/">الرئيسيه</Link>
            </li>
            <li>
              <Link href="/">الاسعار</Link>
            </li>
            <li>
              <Link href="/">المزايا</Link>
            </li>
            <li>
              <Link href="/">اي حاجه</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link className="border-white/20 w-[112px] h-[40px] text-sm font-bold border-2 rounded-full px-4 py-2" href="/dashboard"> تسجيل الدخول</Link>
        </div>
      </header>
      <main className="relative overflow-x-hidden md:overflow-hidden flex flex-col items-center md:px-[100px] justify-center w-full">
        <img className="absolute z-0 top-[-50px]" src="/assets/imgs/bg-blob.png" alt="" />
        <img className="absolute z-0 top-[230px] left-[-30px] -rotate-2 h-[850px]" src="/assets/imgs/bg-lines.png" alt="" />
        <div className="pt-12 md:pt-32 relative">

          <h1 className="text-center z-20 font-bold text-[30px] md:text-[48px]">
            حماية حملاتك الإعلانية بذكاء - اكتشف الأمان
            <br /> من
            <span className="text-[#4200FF]"> النقرات الوهمية{" "}</span>
          </h1>

          <div className="flex items-center justify-center relative h-52">
            <div className="flex gap-5 items-center">
              <button className="secoundary-home-page-button"
              >جرب مجانا</button>
              <button className="home-page-button"
              >اشتري الان</button>

            </div>
          </div>

        </div>
        <div className="relative mb-12 md:mb-0 md:overflow-hidden flex items-center justify-center mt-12">
          <img className="hidden md:block ml-[70px] w-full" src="/assets/imgs/macbook.png" alt="dashboard" />
          <img className="md:hidden scale-150 h-full" src="/assets/imgs/iphone.png" alt="" />
        </div>
        <div className="relative mt-28 bg-black">
          <div className="relative">
            <div className=" w-[200px] md:w-[339px] h-[29px] rounded-[24px] bg-[#0F003A]" />
            <h2 className="absolute left-0 right-0 -top-5 md:-top-10 md:text-[48px] text-[28px] text-center">
              لماذا نحن
              <span className="text-[#4200FF]">؟</span>
            </h2>
          </div>
        </div>

        <div className="mt-12 relative flex flex-col gap-5 md:gap-12">
          <img className="absolute top-[-300px] left-0 w-full h-[1200px]" src="/assets/imgs/section2-bg.png" alt="bg" />
          <div className="flex flex-col md:flex-row gap-5">
            {Cards.map((card) => {

              const [hovered, setHovered] = useState(false);

              const handleMouseEnter = () => setHovered(true);
              const handleMouseLeave = () => setHovered(false);

              return (

                card.id <= 4 && (
                  <div key={card.id} className="relative home-page-card pt-6 pr-6 pl-1" onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center icon">
                      <card.icon fill={hovered ? "#FFFFFF" : "#0F003A"} />
                    </div>
                    <h3 className="text-[17px] font-bold w-full text-[#292019] hover:text-white mt-10">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-[#6F6863] mt-2">{card.desc}</p>
                  </div>
                )
              )
            })}
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            {Cards.map((card) => {

              const [hovered, setHovered] = useState(false);

              const handleMouseEnter = () => setHovered(true);
              const handleMouseLeave = () => setHovered(false);

              return (

                card.id > 4 && (
                  <div key={card.id} className="relative home-page-card pt-6 pr-6 pl-1" onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center icon">
                      <card.icon fill={hovered ? "#FFFFFF" : "#0F003A"} />
                    </div>
                    <h3 className="text-[17x] font-bold text-[#292019] hover:text-white mt-10">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-[#6F6863] mt-2">{card.desc}</p>
                  </div>
                )
              )
            })}
          </div>
        </div>
        <div className="relative ">
          <h2 className="md:text-[40px] text-[30px] p-4 font-bold text-center mt-32">اختر الان ما يناسبك من الباقات المميزه لدينا</h2>
          <div>
            <Tabs defaultValue="account" className="w-full mt-8 flex items-center justify-center flex-col ">
              <TabsList className="flex items-center justify-center h-[44px] bg-white w-fit p-0 rounded-[12px]">
                <TabsTrigger
                  className="w-[130px] h-[44px] bg-transparent text-[16px] md:text-[20px] rounded-[12px] data-[state=active]:bg-[#441CB7] data-[state=active]:text-white hover:bg-transparent"
                  value="account"
                >
                  شهري
                </TabsTrigger>
                <TabsTrigger
                  className="w-[130px] h-[44px] bg-transparent text-[16px] md:text-[20px] rounded-[12px] data-[state=active]:bg-[#441CB7] data-[state=active]:text-white hover:bg-transparent"
                  value="password"
                >
                  سنوي
                </TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="mt-8 rounded-[50px] h-fit price-bg">
                <div className="flex relative flex-col gap-5 p-2 md:flex-row items-center justify-center price-bg rounded-[50px]">
                  {monthPrices.map((price) => (
                    <div key={price.id} className="relative home-page-price-card mt-5 rounded-[50px] overflow-hidden">
                      {/* <div className="home-page-price-card rounded-[50px]"></div> */}
                      <img className="absolute z-0 right-0 h-full" src="/assets/imgs/card-bg.png" alt="" />

                      <div className="z-10 relative mt-12">

                        {price.hot && (

                          <span className="flex absolute items-center justify-center w-[124px] h-[31px] bg-[#FFFFFF40] border rounded-full border-[#FFFFFFB2] ">الاكثر شيوعا</span>
                        )}
                        <div className="-mt-4 px-4">
                          <h2 className="text-[48px] md:text-[64px] w-full" dir="rtl">
                            {price.price}
                            <span className="text-[16px] md:text-[30px]" dir="rtl">
                              {price.currency}
                            </span>
                          </h2>
                          <h3 className="text-[28px] md:text-[32px] text-right">
                            {price.title}
                          </h3>
                          <p className="text-[20px] md:text-[23px] text-[#9391A6] text-center mt-8">{price.supTitle}</p>
                          <ul className="flex gap-5 mt-4 flex-col items-end px-5">
                            {price.options.map((option) => (

                              <li key={option.id} className="flex gap-5 text-[16px]">
                                {option.text}
                                <LeftArrow />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-center mt-12">

                          <Button className="">اختيار الخطه</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <div className="home-page-price-card rounded-[50px]"></div> */}
                </div>
              </TabsContent>
              <TabsContent value="password" className="mt-20 rounded-[50px] h-fit price-bg">
                <div className="flex relative flex-col gap-5 p-2 md:flex-row items-center justify-center price-bg rounded-[50px]">
                  {yearPrices.map((price) => (
                    <div key={price.id} className="relative home-page-price-card rounded-[50px] overflow-hidden">
                      {/* <div className="home-page-price-card rounded-[50px]"></div> */}
                      <img className="absolute z-0 right-0 h-full" src="/assets/imgs/card-bg.png" alt="" />

                      <div className="z-10 relative mt-12">

                        {price.hot && (

                          <span className="flex absolute items-center justify-center w-[124px] h-[31px] bg-[#FFFFFF40] border rounded-full border-[#FFFFFFB2] ">الاكثر شيوعا</span>
                        )}
                        <div className="-mt-4 px-4">
                          <h2 className="text-[48px] md:text-[64px] w-full" dir="rtl">
                            {price.price}
                            <span className="text-[16px] md:text-[30px]" dir="rtl">
                              {price.currency}
                            </span>
                          </h2>
                          <h3 className="text-[28px] md:text-[32px] text-right">
                            {price.title}
                          </h3>
                          <p className="text-[20px] md:text-[23px] text-[#9391A6] text-center mt-8">{price.supTitle}</p>
                          <ul className="flex gap-5 mt-4 flex-col items-end px-5">
                            {price.options.map((option) => (

                              <li key={option.id} className="flex gap-5 text-[16px]">
                                {option.text}
                                <LeftArrow />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-center mt-12">

                          <Button className="text-[15px] text-[#3D19A4] w-[207px] h-[45px] rounded-[24px] border border-[#D7D7E9] bg-[#FFF]">اختيار الخطه</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <div className="home-page-price-card rounded-[50px]"></div> */}
                </div>
              </TabsContent>
            </Tabs>

          </div>
        </div>

        <div className="relative w-full mt-28">

          <h2 className="text-[34px] px-2 md:px-0 text-right">الشراكاء</h2>
          <p className="text-[16px] px-2 md:px-0 text-white md:w-[414px] text-right mt-8">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، مولد النص العربى مفيد.</p>
          <div className="grid grid-cols-2 md:grid-cols-6 pr-[1.25rem] md:pr-0 gap-5 items-center justify-between mt-12">
            {Companys.map((company) => (
              <div key={company.id} className="home-page-companys-card">
                <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex items-center justify-center rounded-full bg-[#461DBC]">
                  <img className="w-[100px]" src={company.logo} alt="company Logo" />
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="relative w-full mt-28 px-4 md:px-0">
          <img className="hidden md:block w-full" src="/assets/imgs/contact-bg.png" alt="" />
          <div className="md:absolute top-0 left-0 z-20 px-2 md:px-0">
            <form className="md:w-[522.888px] md:h-[539px] rounded-[20px] form-bg flex flex-col p-4 md:p-10 gap-8" >
              <input className="md:w-[448.72px] h-[56px] md:h-[60px] text-[14px] md:text-[16px] text-[#0F003A] px-4 rounded-[5px] border border-[#0A142F] form-bg placeholder:text-gray-500" placeholder="الاسم" type="text" />
              <input className="md:w-[448.72px] h-[56px] md:h-[60px] text-[14px] md:text-[16px] text-[#0F003A] px-4 rounded-[5px] border border-[#0A142F] form-bg placeholder:text-gray-500" placeholder="البريد الالكتروني" type="text" />
              <textarea className="md:w-[448.72px] h-[120px] md:h-[165px] text-[16px] text-[#0F003A] p-4 rounded-[5px] border border-[#0A142F] form-bg placeholder:text-gray-500" placeholder="موضوع الرساله" name="" id=""></textarea>
              {/* <input className="w-[20.396px] h-[22px] rounded-[3px] border border-[#A4A4A4] form-bg " type="checkbox" /> */}
              <div className="flex gap-2 items-center">

                <input type="checkbox" className="w-[20.5px] h-[22px] rounded-[3px] border border-[#A4A4A4] form-bg checked:appearance-auto appearance-none cursor-pointer" />


                <span className="text-[#0F003A] text-[16px]">اوافق علي الشروط و الاحكام</span>
              </div>
              <div className="flex items-center justify-end">
                <Button className="w-[144.471px] h-[50px] rounded-[10px] bg-[#0F003A] text-white hover:bg-[#0F003A] hover:text-white">ارسال الرساله</Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer className="flex flex-col py-2 md:flex-row gap-5 justify-between items-center md:pl-[90px] md:pr-[100px] md:py-[25px] mt-12">
        <div className="flex gap-5">
          <div>
            <Image src="/assets/imgs/dark-logo.png" alt="logo" width={76} height={63} />
          </div>

        </div>
        <div>
          <span className="text-[14px]">{"( جميع الحقوق محفوظة لجارديفاي ٢٠٢٤)"}</span>
        </div>
        <div className="flex gap-5">
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-white rounded-full">
            <img src="/assets/imgs/logo-instagram.png" alt="" />
          </div>
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-white rounded-full">
            <img src="/assets/imgs/logo-twitter.png" alt="" />
          </div>
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-white rounded-full">
            <img src="/assets/imgs/logo-facebook.png" alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}

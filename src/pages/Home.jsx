"use client";
import React, { useState } from "react";
import Banner from "@/assets/Home/Banner.webp";
import Button from "@/components/button/button";
import GoogleReview, {
  InfiniteMovingCardsDemo,
} from "@/components/review_Card/reviewCard";
import Image from "next/image";
import Founder from "@/assets/Home/Founder.webp";
import BookPic from "@/assets/Home/BookPic.webp";
import MetricsTabs from "@/components/ui/tab";
import Vitro from "@/assets/Home/Vitro.svg";
import Intrauterine from "@/assets/Home/Intrauterine.svg";
import Intracytoplasmic from "@/assets/Home/Intracytoplasmic.svg";
import Laser_Assisted from "@/assets/Home/Laser-Assisted.svg";
import Pregnancy from "@/assets/Home/Pregnancy.svg";

import Insta from "@/assets/Home/insta.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import x from "@/assets/Home/x.svg";
import fb from "@/assets/Home/fb.svg";
import Pregnancy_Calculator from "@/assets/Home/Pregnancy-Calculator.svg";
import Ovulation_Calculator from "@/assets/Home/Ovulation-Calculator.svg";
import Period_Calculator from "@/assets/Home/Period-Calculator.svg";
import Pregnancy_Conception from "@/assets/Home/Pregnancy-Conception.svg";
import Pregnancy_DueDate from "@/assets/Home/Pregnancy-DueDate.svg";
import FAQItem from "@/components/accordion";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import Tab1 from "@/assets/Home/tab1.webp";
import Tab2 from "@/assets/Home/tab2.webp";
import Tab3 from "@/assets/Home/tab3.webp";
import Tab4 from "@/assets/Home/tab4.webp";
import Tab5 from "@/assets/Home/tab5.webp";
import Icon1 from "@/assets/Home/tab1.svg";
import Icon2 from "@/assets/Home/tab2.svg";
import Icon3 from "@/assets/Home/tab3.svg";
import Icon4 from "@/assets/Home/tab4.svg";
import Icon5 from "@/assets/Home/tab5.svg";
import { Ambattur } from "@/middleware/imagesroute";
import VideoCard from "@/components/videoCard/videoCard";

function Home() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tabs = [
    {
      title: "80% Success Rates",
      label: "80% Success Rates ",
      content: {
        heading: "80% Success Rates",
        description:
          "As the leading fertility hospital in South India, Sudha Fertility Centre serves as a beacon of hope and brings happiness. With the best fertility doctors and world-class fertility treatments, Sudha Fertility Centre has a record of 80% success rate in helping parents achieve the dream of parenthood. With delivering lakhs of healthy babies, we are identified as a renowned IVF hospital in South India offering personalized solutions and treatments for couples trying for pregnancy. From young couples to older couples, we stand with them in every step of their parenthood journey.",
        image: Tab1,
      },
      icon: Icon1,
    },
    {
      title: "Affordable Treatment Cost",
      label: "Affordable Treatment Cost",
      content: {
        heading: "Affordable Treatment Cost",
        description:
          "At Sudha Fertility Centre, we believe that fertility care should be both affordable and of the highest quality. We conduct free medical camps every month to make sure quality treatment reaches everyone. Free consultation and tests are provided at every camp. With affordable treatment costs, we make sure that your dream of parenthood is within reach. Every camp has helped countless people achieve their dreams easily with trusted experts. We cherish and support every parenthood journey. ",
        image: Tab2,
      },
      icon: Icon2,
    },
    {
      title: "People's Most Trusted",
      label: "People's Most Trusted",
      content: {
        heading: "People's Most Trusted",
        description:
          "Sudha Fertility Centre has earned the trust of lakhs of families as South India's best fertility centre. We are happy and blessed to witness the parenthood stories of lakhs of parents. Each review and video we receive always remember our motto of helping couples in their parenthood journey. We are driven by the mission to help couples experience the happiness of parenthood, and dedicated to making it happen. We ensure every couple who visits us receives the best care and starts their journey of parenthood.",
        image: Tab3,
      },
      icon: Icon3,
    },
    {
      title: "40+ Years Of Excellence",
      label: "40+ Years Of Excellence",
      content: {
        heading: "40+ Years Of Excellence",
        description:
          "Sudha Fertility Centre is known as an icon in fertility care with more than 4 decades of excellence in making lakhs of parents' dreams into reality. With experienced Fertility specialists, we offer you the best treatments personalized according to your needs and medical history. With 20+ branches across Tamil Nadu, we ensure that expert fertility care is accessible to all, giving you the support and guidance you need on your parenthood journey",
        image: Tab4,
      },
      icon: Icon4,
    },
    {
      title: "150+ Fertility Specialists",
      label: "150+ Fertility Specialists",
      content: {
        heading: "150+ Fertility Specialists",
        description:
          "With a team of hundreds of experienced fertility experts, Sudha Fertility Centre offers comprehensive and specialized treatments tailored to your needs. Under the guidance of the fertility experts, Dr. S. Dhanabagyam and Dr. S. Pradeepa, our skilled IVF specialists and IUI doctors are dedicated to helping you through every step of your parenthood journey. Supported by the expertise and care of our fertility specialists, lakhs of happy parents have successfully welcomed healthy, beautiful babies into their families. ",
        image: Tab5,
      },
      icon: Icon5,
    },
  ];
  return (
    <>
      {/* Banner */}
      <div className="relative h-[650px] mb-40">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 bg-cover -top-40 bg-center">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://ship-crm-img.s3.eu-north-1.amazonaws.com/happy-family-tiny-newborn-infant-male-or-female.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-[#173366A1] opacity-85"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center mb-40 mt-16">
            <div className="text-white text-center px-4 font-outfit">
              <h2 className="text-[#FFC65C] font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                "Cherish the Boon of Motherhood"
              </h2>
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3">
                Turning Dreams of Parenthood
                <br />
                into Reality for 40 Years.
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
                "Join the 1,50,00+ Families who have
                <br />
                Overcome Infertility"
              </p>
              <div className="mt-6 flex justify-center">
                <Button title="Book Your Free Appointment" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute  -bottom-40 w-full">
          <InfiniteMovingCardsDemo />
        </div>
        <div
          className="absolute bottom-0 w-full h-36"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 255, 255, 1), transparent)",
          }}
        ></div>
      </div>

      {/* Driven By the Happiness Of Lakhs of Families */}
      <div className="container mx-auto mt-32 ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Driven By the Happiness Of Lakhs of Families{" "}
              <span className="lg:block">Our Achievements</span>
            </h1>
          </div>

          <div>
            <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:px-16 mt-9">
              <div className="tiles-1 border border-[#E7E7E7] p-4 rounded-lg font-outfit ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <h1 className="text-xl font-bold text-[#173366] text-center">
                        3.5L+
                      </h1>
                    </div>
                    <div className="des">
                      <p className="text-[#838383] text-center">
                        Infertile Couples Counselled
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1 border border-[#E7E7E7] p-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="icon mr-4"></div>
                  <div className="content">
                    <div className="title">
                      <h1 className="text-xl font-bold text-center text-[#173366]">
                        1L+
                      </h1>
                    </div>
                    <div className="des">
                      <p className="text-[#838383] text-center">
                        Laparoscopic Surgeries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-lg">
                <div className="main-tail flex items-center justify-center ">
                  <div className="content">
                    <div className="title">
                      <h1 className="text-xl font-bold text-center text-[#173366]">
                        35k+
                      </h1>
                    </div>
                    <div className="des">
                      <p className="text-[#838383] text-center">IUI Babies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content text-cente">
                    <div className="title">
                      <h1 className="text-xl font-bold text-center text-[#173366]">
                        60k+
                      </h1>
                    </div>
                    <div className="des">
                      <p className="text-[#838383] text-center">IVF Babies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main flex flex-col lg:flex-row mt-9 mb-9">
            {/* Image */}
            <div className="image w-full lg:w-1/2">
              <Image src={Founder} alt="Founder" className="rounded-xl" />
            </div>

            {/* Description */}
            <div className="description w-full lg:w-1/2 px-3 mt-4 lg:mt-0 xl:mt-5 ">
              <div className="heading ">
                <h1 className="ms-5 font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-2xl">
                  Happy Parenthood Stories.
                </h1>
              </div>

              <div className="content shadow-xl xl:mt-5 p-7 rounded-xl font-outfit">
                <p className="text-[#838383]">
                  We have been married for 18 years and had no children. After
                  consulting many doctors and visiting several hospitals, we
                  became hopeless. Finally, my uncle referred us to the Sudha
                  Fertility Centre, mentioning that almost 90% of patients had
                  successfully conceived there. We decided to visit and met the
                  fertility specialists, who gave us great hope and assured us
                  that we would definitely get pregnant.
                </p>

                <p className="xl:mt-6 mt-1">
                  - Mrs Nagalakshi & Mr Anjineyalu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      {/* What Makes Sudha Fertility Centre  the Best Choice */}
      <div className="container mx-auto ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              What Makes Sudha Fertility Centre{" "}
              <span className="lg:bock">the Best Choice</span>
            </h1>
          </div>
          <div className="tab mt-12">
            <MetricsTabs tabs={tabs} />
          </div>
        </div>
      </div>

      {/* Advanced Fertility Treatments at Sudha Fertility Centre */}
      <div className="container mx-auto ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Advanced Fertility Treatments at{" "}
              <span className="lg:block"> Sudha Fertility Centre</span>
            </h1>

            <p className="max-w-5xl flex mx-auto mt-5 text-[#838383]">
              Start your parenthood journey with India’s leading fertility
              specialists. With decades of expertise and world-class treatments,
              we provide personalized care that supports your dreams and guides
              you through every step of the way.
            </p>
          </div>

          <div>
            <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5   gap-6  mt-9">
              <div className="tiles-1 border border-[#E7E7E7] p-4 rounded-2xl font-outfit hover:bg-[#EBF2FE] cursor-pointer">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="image flex justify-center">
                      <Image src={Vitro} alt="In Vitro Fertilization" />
                    </div>
                    <div className="des mt-4 ">
                      <p className="text-[#838383] text-center">
                        In Vitro Fertilization
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1 border border-[#E7E7E7] p-4 rounded-2xl hover:bg-[#EBF2FE] cursor-pointer">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <div className="image flex justify-center">
                        <Image
                          src={Intrauterine}
                          alt=" Intrauterine insemination "
                        />
                      </div>
                    </div>
                    <div className="des mt-4 ">
                      <p className="text-[#838383] text-center">
                        Intrauterine insemination
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-2xl hover:bg-[#EBF2FE] cursor-pointer">
                <div className="main-tail flex items-center justify-center ">
                  <div className="content">
                    <div className="title">
                      <div className="image flex justify-center">
                        <Image
                          src={Intracytoplasmic}
                          alt="Intracytoplasmic Sperm Injection"
                        />
                      </div>
                    </div>
                    <div className="des mt-4">
                      <p className="text-[#838383] text-center">
                        Intracytoplasmic Sperm Injection
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-2xl hover:bg-[#EBF2FE] cursor-pointer">
                <div className="main-tail flex items-center justify-center">
                  <div className="content text-cente">
                    <div className="title">
                      <div className="image flex justify-center">
                        <Image
                          src={Laser_Assisted}
                          alt="Laser-Assisted Hatching"
                        />
                      </div>
                    </div>
                    <div className="des mt-4">
                      <p className="text-[#838383] text-center">
                        Laser-Assisted Hatching
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-2xl hover:bg-[#EBF2FE] cursor-pointer">
                <div className="main-tail flex items-center justify-center">
                  <div className="content text-center">
                    <div className="title">
                      <div className="image flex justify-center">
                        <Image
                          src={Pregnancy}
                          alt="Pregnancy and Antenatal Care"
                        />
                      </div>
                    </div>
                    <div className="des mt-4">
                      <p className="text-[#838383] text-center">
                        Pregnancy and Antenatal Care
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1 flex items-center justify-center">
                <div className="main-tailflex items-center justify-center ">
                  <div className="content  flex justify-center items-center ">
                    <div className="title">
                      <div className="button flex items-center justify-center lg:hidden">
                        <Button title={"View More"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button hidden lg:flex justify-center mt-8">
              <Button title={"View All Treatments"} />
            </div>
          </div>
        </div>
      </div>

      {/* Bring your little one home and start the adventure of parenthood */}
      <div className="container mx-auto mt-6">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row shadow-2xl px-7 p-3 items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="content  flex-1 text-center lg:text-left">
              <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                Bring your little one home and start the adventure of parenthood
              </h1>
            </div>

            <div className="flex flex-col items-center  space-y-4 lg:space-y-0 lg:items-start">
              <div className="image">
                <Image src={BookPic} alt="Book Image" className="max-w-full" />
              </div>
            </div>
            <div className="button">
              <Button title={"Book Your Free Appointment"} />
            </div>
          </div>
        </div>
      </div>

      {/* Make Pregnancy Planning Simple and Confident with Our Calculator Tools */}
      <div className="container mx-auto mt-8">
        <div className="max-w-7xl mx-auto px-3 py-12 sm:px-6 lg:px-8">
          <div className="main-box">
            <div className="flex flex-col lg:flex-row p-4 lg:pb-0 lg:p-7 border rounded-3xl">
              {/* Left Section */}
              <div className="left px-3 flex-1">
                <div className="content h-auto lg:h-72 flex flex-col justify-center items-center text-center lg:text-left">
                  <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                    Make Pregnancy Planning Simple and Confident with Our
                    Calculator Tools
                  </h1>
                  <p className="text-[#838383] mt-5">
                    Planning your pregnancy should feel empowering, not
                    overwhelming. Use our Pregnancy calculator to track your
                    fertility cycle and plan for conception at the optimal time.
                    Make your journey to parenthood stress-free.
                  </p>
                </div>
                <div className="button mt-5 flex justify-center lg:justify-start">
                  <Button title={"Check Now"} />
                </div>
              </div>

              {/* Right Section */}
              <div className="h-[] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>

              <div className="right flex-1 flex justify-center items-center px-3">
                <div className="tiles grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:gap-8 xl mt-9">
                  {/* First row: 3 tiles */}
                  <div className="tiles-1 flex flex-col items-center justify-center text-center hover:bg-[#EBF2FE] rounded-2xl p-5 cursor-pointer">
                    <div className="title mb-3">
                      <Image
                        src={Pregnancy_Calculator}
                        alt="Pregnancy Calculator"
                        className="mx-auto"
                      />
                    </div>
                    <div className="des">
                      <p className="text-[#838383]">Pregnancy Calculator</p>
                    </div>
                  </div>

                  <div className="tiles-1 flex flex-col items-center justify-center text-center hover:bg-[#EBF2FE] rounded-2xl p-5 cursor-pointer">
                    <div className="title mb-3">
                      <Image
                        src={Ovulation_Calculator}
                        alt="Ovulation Calculator"
                        className="mx-auto"
                      />
                    </div>
                    <div className="des">
                      <p className="text-[#838383]">Ovulation Calculator</p>
                    </div>
                  </div>

                  <div className="tiles-1 flex flex-col items-center justify-center text-center hover:bg-[#EBF2FE] rounded-2xl p-5 cursor-pointer">
                    <div className="title mb-3">
                      <Image
                        src={Period_Calculator}
                        alt="Period Calculator"
                        className="mx-auto"
                      />
                    </div>
                    <div className="des">
                      <p className="text-[#838383]">Period Calculator</p>
                    </div>
                  </div>

                  
                  <div className="tiles-1 flex flex-col items-center justify-center text-center px-3 hover:bg-[#EBF2FE] rounded-2xl p-5 cursor-pointer">
                      <div className="title mb-3">
                        <Image
                          src={Pregnancy_Conception}
                          alt="Pregnancy Conception Calculator"
                          className="mx-auto"
                        />
                      </div>
                      <div className="des">
                        <p className="text-[#838383]">
                          Pregnancy Conception <br /> Calculator
                        </p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIdeo section  */}

      <div className="bg-[#EBF2FE]">
        <div className="container mx-auto ">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="title text-center">
              <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl ">
                Turning Dreams into Reality: Witness the Joy of Parenthood with
                Sudha Fertility Centre.
                <span className="lg:bock">the Best Choice</span>
              </h1>

              <p className="text-[#838383] text-center ">
                Behind every testimonial is a journey filled with hope, trust,
                and perseverance. Hearing this happiness is what drives us. All
                the tears, years, fears and prayers have been answered. Listen
                to the happy stories of the couples welcoming their love of life
              </p>
            </div>
            <div className="tab mt-12">
              <VideoCard tabs={tabs} />
            </div>
          </div>
        </div>
      </div>


      {/* Turning Dreams into Reality: Witness the Joy of Parenthood  with Sudha Fertility Centre. */}
      <div className="bg-[#DDE9FD] hidden">
        <div className="container mx-auto relative h-full">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
            <div className="title text-center">
              <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                Turning Dreams into Reality: Witness the Joy of Parenthood
                <span className="lg:block"> with Sudha Fertility Centre.</span>
              </h1>

              <p className="max-w-5xl flex mx-auto mt-5 text-[#353535]">
                Behind every testimonial is a journey filled with hope, trust,
                and perseverance. Hearing this happiness is what drives us. All
                the tears, years, fears and prayers have been answered. Listen
                to the happy stories of the couples welcoming their love of life
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Faq */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
          <div className="content mx-auto flex-1 text-center lg:text-left">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl flex justify-center">
              FAQ
            </h1>
          </div>
          <div className="mt-5">
            {/* {AmbatturPage.faqs.slice(0, visibleCount).map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))} */}
          </div>
        </div>
      </div>

      {/* contact us  */}
      <div
        className="py-16 bg-cover bg-center"
        style={{
          background:
            "linear-gradient(170deg, #F0F5FF, #F0F5FF 60%, white 60%, white)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-[32px] font-bold text-black mb-2">
                  Book your Free Appointment
                </h2>
                <p className="text-black text-lg">
                  Take the first step towards your parenthood journey.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path
                        d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-black uppercase tracking-wider">
                      CALL
                    </p>
                    <p className="text-black">9874651230</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-black uppercase tracking-wider">
                      EMAIL US
                    </p>
                    <p className="text-black">info@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-black">Connect with us:</p>
                <div className="flex gap-3">
                  {[
                    { name: "facebook", icon: fb },
                    { name: "twitter", icon: x },
                    { name: "linkedin", icon: Linkedin },
                    { name: "youtube", icon: youtube },
                    { name: "instagram", icon: Insta },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={`https://${social.name}.com`}
                      className="w-12 h-12 rounded-full flex cursor-pointer items-center justify-center hover:bg-gray-100 transition-colors"
                      aria-label={social.name}
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        className="w-full h-full object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-3xl shadow-xl p-8 bg-white z-30 relative">
              <h3 className="text-xl font-semibold text-black mb-8">
                Ready to Start Your Journey to Meet Your Little One?
              </h3>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-black mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm text-black mb-1"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    placeholder="Enter your Mobile Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm text-black mb-1"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    placeholder="Enter your Location"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="branch"
                    className="block text-sm text-black mb-1"
                  >
                    Select Branch
                  </label>
                  <div className="relative">
                    <select
                      id="branch"
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none appearance-none text-black"
                    >
                      <option value="" disabled>
                        Select Branch
                      </option>
                      <option value="branch1">Branch 1</option>
                      <option value="branch2">Branch 2</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e3a8a] text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  Book A Free Appointment
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MarqueeComponent */}
      <section>
        <div className="container mx-auto">
          <div className=" mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full">
            <MarqueeComponent
              items={Ambattur.gallery}
              direction="left"
              speed="fast"
              className="custom-class"
            />
            <div className="flex md:flex-row  flex-col justify-center gap-4 items-center mt-4 mb-4">
              <h2 className="text-2xl font-bold text-center ">
                Happy Patients, Happy Stories
              </h2>
              <Button title="View youtube" icon={<FaYoutube />} />
            </div>
            <MarqueeComponent
              items={Ambattur.gallery}
              direction="right"
              speed="fast"
              className="custom-class"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

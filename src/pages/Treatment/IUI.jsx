"use client";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/IVF/Banner.webp";
import About from "@/assets/Treatments/IVF/About.webp";
import Microscope from "@/assets/Treatments/IVF/microscope.webp";
import WhyChoose from "@/assets/Treatments/IVF/WhyChoose.webp";
import ChooseIVF from "@/assets/Treatments/IVF/ChooseIVF.webp";
import Tick from "@/assets/Treatments/IVF/Tick.svg";
import Facilities from "@/assets/Treatments/IVF/Facilities.webp";
import PrepareIVF from "@/assets/Treatments/IVF/PrepareIVF.webp";
import Button from "@/components/button/button";
import Image from "next/image";
import FAQItem from "@/components/accordion";
import SubBanner from "@/assets/contact-us/SubBanner.webp";

import Insta from "@/assets/Home/insta.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import x from "@/assets/Home/x.svg";
import fb from "@/assets/Home/fb.svg";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import { Ambattur } from "@/middleware/imagesroute";

const IVFData = [
  {
    question: "Ovulation stimulation",
    answer:
      "If you’re ovulating regularly, medications are not required to induce ovulation. If you’re not ovulating periodically, IUI specialists in Sudha will prescribe you medications that stimulate egg development. We plan your IVF procedure depending on your hormone and ultrasound test results.",
  },
  {
    question: "Sperm extraction",
    answer:
      "Our IUI doctors extract a sperm sample from your partner or donor and “wash it” to remove the non-motile sperms or non-healthy sperms.",
  },
  {
    question: "Insemination Procedure",
    answer:
      "In this procedure, the IUI experts used a thin catheter to inject the washed sperm sample into the uterus. By this method, the sperm skips the part of bypassing the vagina and cervix.",
  },
];

const FAQ = [
  {
    question: "Which hospital provides the best IUI treatment in Bangalore?",
    answer:
      "When looking for IUI (Intrauterine Insemination) treatment in Bangalore, Sudha Fertility Centre, the best IUI centre in Bangalore, is one of the top choices, known for its expertise and high success rates in fertility treatments. We offer you the best treatments with the best IUI doctors in India",
  },
  {
    question: "What is the success rate of IUI treatment?",
    answer:
      "The success rate of IUI treatment can vary based on factors such as the woman’s age, the cause of infertility, sperm quality, and overall reproductive health. At Sudha Fertility Centre, we offer personalised care to help optimize your chances of success with IUI treatment.",
  },
  {
    question: "Is there any risk associated with IUI treatment? ",
    answer:
      "IUI treatment is a safe procedure. There might be some risk factors including a slight chance of infection and the possibility of multiple pregnancies. At Sudha Fertility Centre, we take all precautions to minimize these risks and ensure the safety and well-being of our patients throughout the treatment process.",
  },
  {
    question: "Is IUI treatment painful?",
    answer:
      "IUI treatment is generally not painful. Most women experience only mild discomfort or cramping during the procedure, similar to menstrual cramps. At Sudha Fertility Centre, recognised as the best IUI treatment hospital in India, our experienced specialists ensure that the procedure is as comfortable as possible and provide support throughout your treatment.",
  },
  {
    question: "Can I do my regular work after IUI treatment?",
    answer:
      "Yes, it is safe to do your regular work and daily activities after IUI treatment. Light activities and normal tasks are typically fine, but it's recommended to avoid exhausting exercise or heavy lifting. At Sudha Fertility Centre, the best IUI hospital, our specialists will guide you on how to care for yourself post-treatment to support your health and maximise the chances of a positive outcome.",
  },
  {
    question: "Can I go to a job after IUI treatment?",
    answer:
      "Yes, you can go to work after IUI treatment. The procedure is minimally invasive, and most women feel well enough to resume their regular work activities the same day. However, it's best to avoid physically demanding tasks or heavy lifting. At Sudha Fertility Centre, the best IUI centre, we ensure you receive proper guidance on post-treatment care to help you feel comfortable and supported.",
  },
  {
    question: "Is normal delivery possible in IUI treatment?",
    answer:
      "Yes, normal delivery is possible after successful IUI treatment. Sudha Fertility Centre, the best fertility centre in India, offers continuous care throughout the pregnancy journey to ensure a healthy delivery.",
  },
  {
    question: "Should I take complete bed rest after IUI treatment",
    answer:
      "No, complete bed rest is not required. You can continue with normal activities but should avoid exhausting tasks or heavy lifting for a few days. At Sudha Fertility Centre, the best fertility centre in India, we provide guidance on how to manage post-IUI care effectively.",
  },
  {
    question: "What is the cost of IUI treatment?",
    answer:
      "IUI treatment costs vary depending on number of cycles required to attain a positive result. As the best IUI centre in India, Sudha Fertility Centre offers affordable and transparent pricing for all fertility treatments.",
  },
  {
    question: "Who should consider IUI treatment?",
    answer:
      "Couples with unexplained infertility, ovulation issues, or minor male fertility issues may consider IUI. At Sudha Fertility Centre, regarded as a leading IVF centre, we provide expert evaluations and help you determine the most suitable approach for your fertility journey.",
  },
  {
    question: "When should I consider IUI treatment?",
    answer:
      "You should consider IUI treatment if you have been trying to conceive for more than a year of regular unprotected sex. IUI is especially beneficial for couples facing mild infertility issues. At Sudha Fertility Centre, our expert IUI doctors provide personalised assessments to help determine the best treatment option for your fertility health.",
  },
  {
    question: "What is IUI treatment?",
    answer:
      "IUI (Intrauterine Insemination) is a fertility treatment where sperm is directly injected into the uterus using a catheter to increase the chances of fertilization. This process is beneficial for couples facing minor male infertility issues. At Sudha Fertility Centre, our expert IUI doctors provide personalized care to ensure the best chances of success in your fertility journey.",
  },
];

const When_Why_choose = [
  "Couples attempting to conceive through unprotected intercourse and have a healthy sexual life.",
  "Women with endometriosis condition (lining of the uterus growing outside the uterus).",
  "Men with reduced fertility due to sperm factors (slightly lower sperm count or motility).",
  "Couples or individuals who opt for donor sperm to get pregnant",
];

const prepare_for_IVF = [
  "Schedule a consultation with a fertility specialist and review the medical history of both partners to identify any pre-existing conditions.",
  "Both partners should adopt a healthy diet.",
  "Engage in regular exercise, and maintain a healthy diet.",
  "Limit exposure to environmental toxins. ",
  "Maintain a healthy weight, being underweight or overweight can affect hormone levels and ovulation.",
];
const facilities = [
  {
    title: "Best IUI doctors in India",
    position: "left-32 top-10",
    rounded: "rounded-br-none",
  },
  {
    title: "24/7 pharmacy access",
    position: "left-24 top-44",
    rounded: "rounded-br-none",
  },
  {
    title: "Round-the-clock care and support,",
    position: "left-1 top-2/4",
    rounded: "rounded-br-none",
  },
  {
    title: "World-class equipments, ",
    position: "right-32 top-[70px] ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Experienced lab technicians",
    position: "right-28 top-[140px]  ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Advanced treatments with personalised care.",
    position: "-right-6  top-[280px] ",
    rounded: "rounded-bl-none",
  },
];
const Do = [
  "Eat healthy food to help fertilization.",
  "Take the medicines prescribed by the IUI experts.",
  "Get enough sleep and rest.",
  "Focus on your physical and mental health.",
  "Exercise moderately to keep yourself active.",
];

const Dont = [
  "Avoid alcohol and smoking.",
  "Reduce caffeine intake.",
  "Refrain from ejaculation for 2-3 days before collecting a semen sample.",
];

function IUI() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [openIndex, setOpenIndex] = useState(0);
  const [faqIndex, setFaqIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleFAQ = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };
  const toggleViewMore = () => {
    if (showAll) {
      setVisibleCount(5); // Reset to initial count when showing less
      setShowAll(false); // Properly toggle state
    } else {
      setVisibleCount(Ambattur.faqs.length); // Show all FAQs
      setShowAll(true); // Properly toggle state
    }
  };

  return (
    <>
      {/* Banner */}
      <div className="relative ">
        <div
          className="absolute inset-0 bg-cover bg-center -top-28  md:-top-36"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundSize: "fill",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#173366A1] opacity-45"></div>
        </div>

        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mb-28 ">
            <div className="text-white text-center px-4 font-outfit mt-10">
              <h3 className="mt-3 max-w-3xl font-outfit  text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                Little you is on the way, hold on to hope
              </h3>
              <h1 className="font-outfit font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-4xl">
                Intrauterine insemination (IUI)
              </h1>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About IUI */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h2 className="text-2xl font-semibold flex justify-center text-center lg:hidden">
            About IUI
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image src={About} alt="About IUI" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title">
                  <h2 className="text-2xl font-semibold hidden lg:block">
                    About IUI
                  </h2>
                </div>
                <div className="description mt-4 text-[#838383]">
                  <p>
                    Intrauterine Insemination (IUI) is a fertility treatment
                    process in which the sperm is directly injected into the
                    uterus to help conception. This procedure is also known as
                    artificial insemination. IUI treatment is affordable and
                    highly successful for couples with less severe fertility
                    problems. This process causes less pain and less discomfort.
                    IUI treatment improves the chances of fertilization as the
                    sperm is directly placed in the uterus and the number of
                    sperm reaching the fallopian tubes can be increased.
                  </p>
                </div>
                <div className="mt-5">
                  <Button title="Get A Free Consultation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IVF in Sudha Fertility Centre */}
      <div className="container mx-auto relative h-full mt-6 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8 h-full">
          <h2 className="text-2xl font-semibold  flex justify-center text-center lg:hidden">
            IUI in Sudha Fertility Centre
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1  px-4">
              <div>
                <div className="Title">
                  <h2 className="text-2xl font-semibold hidden lg:block">
                    IUI in Sudha Fertility Centre
                  </h2>
                </div>
                <div className="description mt-4 text-[#838383]">
                  <p>
                    The IUI doctors in Sudha Fertility Centre examine you and
                    recommend you the right lifestyle changes, nutrients, and
                    proper time to start the IUI treatment for a positive
                    result. The IUI procedures involve the following steps.
                  </p>
                </div>
                <div className="Accordian mt-4 ">
                  {IVFData.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openIndex === index}
                      toggle={() => toggleAccordion(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 lg:px-12   flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-52 lg:h-96">
                  <Image src={Microscope} alt="IVF in Sudha Fertility Centre" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us for IVF? */}
      <div className="container mx-auto mt-6 lg:mt-20 relative h-full bg-[#F0F5FF]">
        <div className="max-w-7xl mx-auto px-4 py-10 pb-24 lg:pb-32 sm:px-6 lg:px-8 h-full">
          <div className="Title lg:hidden text-center">
            <h2 className="text-2xl font-semibold">Why choose us for IUI?</h2>
          </div>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image src={WhyChoose} alt="About IUI" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title hidden lg:block">
                  <h2 className="text-2xl font-semibold">
                    Why choose us for IUI?
                  </h2>
                </div>
                <div className="description mt-4 text-[#838383]">
                  <p>
                    As the best IUI centre in India, Sudha Fertility Centre has
                    delivered more than thousands of healthy IUI babies holding
                    a success rate of 85% in IUI treatments. With the best IUI
                    doctors in India, Sudha Fertility Centre provides you with
                    the best IUI treatments in India helping you to achieve your
                    dream of parenthood into reality. Our fertility experts are
                    dedicated to providing you with personalised care at every
                    step of your parenthood journey which retains us as the best
                    IUI hospital in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When and Why Choose IVF? */}
      <div className="container mx-auto relative h-full  mt-6 lg:mt-14 ">
        <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-6  lg:px-8 h-full">
          <h2 className="text-2xl font-semibold text-center lg:hidden">
            When and Why Choose IVF?
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1 flex items-center ">
              <div className="p-6">
                <div className="Title ">
                  <h2 className="text-2xl font-semibold lg:block hidden">
                    When and Why Choose IVF?
                  </h2>
                </div>
                <div className=" pt-6">
                  <div className="space-y-4">
                    {When_Why_choose.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center lg:items-start ">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full">
                  <Image src={ChooseIVF} alt="About IUI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="container mx-auto relative  bg-[#F0F5FF] mb-9">
        <div className="max-w-7xl mx-auto px-4 pt-10 mt-10 sm:px-6 lg:px-8 h-full">
          <h2 className="text-3xl font-bold text-center mb-12">Facilities</h2>

          {/* Desktop Layout - Hidden on mobile */}
          <div className="relative hidden md:flex justify-center items-center">
            {/* Center Image */}
            <div className="relative w-96">
              <Image
                src={Facilities}
                alt="Facilities"
                className="w-full h-auto"
              />
            </div>

            {/* Facility Cards for Desktop */}
            <div className="absolute inset-0">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`absolute ${
                    facility.position
                  } transform -translate-y-1/2 z-10 
                  ${
                    facility.position.includes("left")
                      ? "mr-4 md:mr-8 pr-4"
                      : "ml-4 md:ml-8 pl-4"
                  }
                  ${index % 2 === 0 ? "mt-8" : "mt-0"}`}
                >
                  <div
                    className={`${facility.rounded} rounded-2xl bg-white shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 `}
                  >
                    <p className="text-base font-medium text-gray-800 text-nowrap bg-white">
                      {facility.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Grid with 2 columns */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {/* Center Image */}
            <div className="col-span-2 flex justify-center mb-8">
              <div className="relative w-64">
                <Image
                  src={Facilities}
                  alt="Facilities"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Facility Cards for Mobile */}
            {facilities.map((facility, index) => (
              <div key={index} className="flex justify-center">
                <div className=" rounded-bl-none w-full rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 bg-white">
                  <p className="text-sm font-medium text-gray-800 text-center flex justify-center items-center">
                    {facility.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to prepare for IUI? */}
      <div className="container mx-auto relative h-full  mt-6 lg:mt-14 ">
        <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-6  lg:px-8 h-full">
          <h2 className="text-2xl font-semibold text-center lg:hidden">
            How to prepare for IUI?
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="lg:px-12 py-3  flex items-center pb-8 justify-center lg:items-start ">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full">
                  <Image src={PrepareIVF} alt="About IUI" />
                </div>
              </div>
            </div>

            <div className=" flex items-center ">
              <div className="p-6">
                <div className="Title ">
                  <h2 className="text-2xl font-semibold lg:block hidden">
                    How to prepare for IUI?
                  </h2>
                </div>
                <div className=" pt-6">
                  <div className="space-y-4">
                    {prepare_for_IVF.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Do’s & Don’ts During IVF */}
      <div className="container mx-auto relative h-full mt-8 pb-7">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full shadow-2xl">
          <div className="title">
            <h2 className="text-2xl font-semibold text-center mb-3">
              Do’s & Don’ts During IVF
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
            {/* Do's Section */}
            <div className="do flex-1">
              <div className="heading p-5">
                <h2 className="text-2xl font-semibold text-center text-[#173366]">
                  Do’s
                </h2>
              </div>
              <div className="pt-6">
                <div className="space-y-4">
                  {Do.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6">
                        <Image src={Tick} alt="Tick" />
                      </div>
                      <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Vertical Divider */}
            <div className="border-l-2 border-gray-300"></div>{" "}
            {/* Add this divider */}
            {/* Don'ts Section */}
            <div className="dont flex-1">
              <div className="heading p-5">
                <h2 className="text-2xl font-semibold text-center text-[#173366]">
                  Don’ts
                </h2>
              </div>
              <div className="pt-6">
                <div className="space-y-4">
                  {Dont.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6">
                        <Image src={Tick} alt="Tick" />
                      </div>
                      <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Your Baby into Your Home */}
      <div className="container mx-auto mt-6 mb-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative min-h-[250px] rounded-lg shadow-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${SubBanner.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative h-full flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 mt-9">
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start text-center lg:text-left mb-6 lg:mb-0">
                <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl text-white">
                  Welcome Your Baby into Your Home
                </h1>
              </div>
              <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center">
                <Button title="Book Your Free Appointment" />
              </div>
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
            {FAQ.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={faqIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {FAQ.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
              <div className="text-center mt-4">
                <button
                  className="bg-[#173366] text-white py-2 px-4 rounded-lg hover:bg-[#173366] transition-all"
                  onClick={toggleViewMore} // Updated onClick handler
                >
                  {showAll ? "View Less ←" : "View More →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* contact  */}
      <div
        className="py-16 bg-cover bg-center"
        style={{
          background:
            "linear-gradient(170deg, #F0F5FF, #F0F5FF 60%, white 60%, white)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid md:grid-cols-2 lg:gap-16 items-start">
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
                    Whatsapp Number
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
                    htmlFor="branch"
                    className="block text-sm text-black mb-1"
                  >
                    Location
                  </label>
                  <div className="relative">
                    <select
                      id="branch"
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none appearance-none text-black"
                    >
                      <option value="" disabled>
                        Select Location
                      </option>
                      <option value="branch1">Location 1</option>
                      <option value="branch2">Location 2</option>
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

export default IUI;

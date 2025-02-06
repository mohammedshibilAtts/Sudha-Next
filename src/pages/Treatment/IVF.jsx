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
import {Ambattur } from "@/middleware/imagesroute";
import Insta from "@/assets/Home/insta.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import x from "@/assets/Home/x.svg";
import fb from "@/assets/Home/fb.svg";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import { FaQ } from "react-icons/fa6";
 
const IVFData = [
  {
    question: "Initial Consultation",
    answer:
      "The IVF experts in Sudha Fertility Centre will review your medical history, examine you with necessary tests, and discuss treatment options. This step is vital to tailor a personalised treatment plan for a successful pregnancy.",
  },
  {
    question: "Super Ovulation or Super Stimulation",
    answer:
      "After setting the treatment plan, the first step in the IVF process is ovarian stimulation. In this process, the patient is prescribed certain medications to increase the production of eggs. During this period, the IVF doctors in Sudha will monitor you via ultrasounds and blood tests for positive results.",
  },
  {
    question: "Egg Retrieval and Sperm Collection",
    answer:
      "The next process involves a minor surgical procedure by the fertility specialists in Sudha to retrieve the eggs under sedation. Simultaneously, sperm samples will be collected from the male.",
  },
  {
    question: "Fertilization and Embryo Culture",
    answer:
      "After retrieving the eggs and sperm, they will be fertilized in the laboratory by the IVF experts in Sudha. After fertilization, the eggs grow as embryos and the fertility doctors will monitor to identify the risk of passing genetic disorders to the baby.",
  },
  {
    question: "Embryo Transfer",
    answer:
      "After proper monitoring, the healthy embryos will be placed into the woman’s womb",
  },
];
 
const FAQ = [
  {
    question: "Which hospital provides the best IVF treatment in India? ",
    answer:
      "Sudha Fertility Centre is widely recognized as one of the best IVF Centres in India. With a team of expert fertility specialists, cutting-edge technology, and a patient-centered approach, we offer personalized IVF treatments to help couples achieve their dream of parenthood.",
  },
  {
    question: "What is the IVF success rate in India?",
    answer:
      "The IVF success rate in India can vary depending on factors such as age, the cause of infertility, the clinic's expertise, and the treatment plan. Leading IVF Centres in India like Sudha Fertility Centre are known for their high success rates, which reflect their advanced technology, experienced fertility specialists, and personalized care.",
  },
  {
    question: "What is the cost of IVF treatment in India?",
    answer:
      "The cost of IVF treatment in India can vary based on factors like the clinic, treatment type, medications, and additional procedures. As a leading IVF Centre in India, Sudha Fertility Centre offers personalized care with transparent and affordable pricing.",
  },
  {
    question: "How many times can we try IVF?",
    answer:
      "The number of IVF attempts a couple can make depends on various factors, including the individual’s age, overall health, and the cause of infertility. At Sudha Fertility Centre, one of the best IVF centres, our fertility specialists assess your specific situation and guide you on the most suitable approach, ensuring the best chance of success in the first attempt itself.",
  },
  {
    question: "How long does it take for an IVF treatment?",
    answer:
      "IVF typically takes 4-6 weeks per cycle, and some couples may need more than one cycle to achieve successful results. At Sudha Fertility Centre, one of the top IVF centres in India, we prioritise providing comprehensive care and support, ensuring a well-guided and effective treatment experience throughout your journey.",
  },
  {
    question: "Is normal delivery possible in IVF treatment?",
    answer:
      "Yes, normal delivery is possible after IVF. Factors such as the mother’s health, the baby’s position, and any pregnancy-related complications are considered when determining the delivery method. Sudha Fertility Centre, the best fertility centre in India, supports you through your pregnancy journey to ensure a healthy, safe delivery.",
  },
  {
    question: "Is IVF an expensive treatment? ",
    answer:
      "The cost of IVF treatment can vary based on factors like the clinic chosen, medications, number of IVF cycles, and any additional procedures. At Sudha Fertility Centre, we provide transparent pricing and personalized care to ensure you receive the best treatment suited to your needs.",
  },
  {
    question: "Are IVF pregnancies risky? ",
    answer:
      "IVF pregnancies are generally safe, but like any pregnancy, there can be risks involved, especially in cases of multiple pregnancies or underlying health conditions. However, with advancements in IVF technology and expert care, the risks are significantly minimised. At Sudha Fertility Centre, we monitor your pregnancy closely to ensure the best outcomes for both mother and baby, providing comprehensive support throughout the process.",
  },
  {
    question: "What is the best age to undergo IVF?",
    answer:
      "The ideal age to undergo IVF is typically between 35 and 40 years, as fertility starts to decline after 35. However, women in their early 30s generally have higher chances of success. IVF can still be effective for women over 40. At Sudha Fertility Centre, we offer personalised care and expert guidance throughout your fertility journey with the best IVF doctors in India.",
  },
  {
    question: "When should I consider IVF after multiple miscarriages? ",
    answer:
      "If you’ve experienced multiple miscarriages, IVF is a good option to consider. Sudha Fertility Centre has helped thousands of couples who had faced multiple miscarriages deliver healthy babies. Our dedication and empathetic care retain us as the best IVF hospital in India.",
  },
  {
    question: "Should I take complete bed rest after IVF treatment? ",
    answer:
      "Complete bed rest is not required after IVF. However, it is important to avoid lifting heavy weights, doing heavy household chores, and exhausting activities. At Sudha Fertility Centre, a leading IVF centre, we offer expert guidance to help you recover comfortably and maximize your chances of success.",
  },
  {
    question: "Who should take IVF treatment? ",
    answer:
      "IVF is ideal for couples with unexplained infertility, blocked fallopian tubes, male infertility, or other reproductive issues. Sudha Fertility Centre, the best IVF centre in India, offers expert diagnosis to identify the cause of infertility and provide the best treatments.",
  },
];
 
const When_Why_choose = [
  "Elderly women above 40, as they produce less quality eggs or don’t produce eggs.",
  "Individuals who had their ovaries removed.",
  "Women with blocked or damaged fallopian tubes.",
  "Men with less sperm count, motility, or abnormal sperm shape.",
  "Couples who want to be parents after menopause",
  "For couples who have a history of failed fertility treatments.",
  "Couples with genetic disorders, to prevent the transmission of genetic diseases.",
];
 
const prepare_for_IVF = [
  "Focus on a balanced and nutritious diet, moderate exercise, and avoid alcohol and tobacco to support your body for IVF.",
  "Ensure conditions like PCOS, diabetes, or thyroid issues are under control, as these can impact IVF success.",
  "Include folic acid and prenatal vitamins to boost reproductive health and reduce birth risks.",
  "IVF can be an emotional journey. Communicate with your partner and your closed ones to help manage stress.",
  "Follow the prescribed medications properly and make sure you don’t skip regular checkups.",
  "Engage yourself in activities like yoga, meditation, or other relaxation techniques to maintain mental and physical well-being.",
];
const facilities = [
  {
    title: "High-tech technologies",
    position: "left-32 top-10",
    rounded: "rounded-br-none",
  },
  {
    title: "Modern IVF laboratories",
    position: "left-24 top-44",
    rounded: "rounded-br-none",
  },
  {
    title: "Round-the-clock pharmacy access",
    position: "left-1 top-2/4",
    rounded: "rounded-br-none",
  },
  {
    title: "Intellectual fertility experts",
    position: "right-32 top-[70px] ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Experienced embryologists",
    position: "right-28 top-[140px]  ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Advanced treatment with exceptional care",
    position: "-right-6  top-[280px] ",
    rounded: "rounded-bl-none",
  },
];
const Do = [
  "Drink plenty of water to keep your body hydrated.",
  "Focus on nutrient-dense foods rich in vitamins, minerals, and protein to support reproductive health.",
  "Seek emotional support as IVF can be an emotional journey.",
  "Prioritise sleep and rest. Aim for at least 7 hours of quality sleep",
  "Engage in gentle activities like walking or stretching.",
];
 
const Dont = [
  "Avoid heavy exercises.",
  "Restrict alcohol and caffeine intake.",
  "Avoid long travel to reduce body stress.",
  "Never skip the prescribed medications or intake unprescribed ones.",
  "Avoid exposure to toxins.",
];
 
function IVF() {
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
              <h1 className="font-outfit font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-4xl">
                In Vitro Fertilization (IVF)
              </h1>
              <h3 className="mt-3 max-w-3xl font-outfit  text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                “Join the 1,50,00+ Families who have Overcome Infertility”
              </h3>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} />
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* About IVF */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h2 className="text-2xl font-semibold flex justify-center  text-center lg:hidden">
            About IVF
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image src={About} alt="About IVF" />
                </div>
              </div>
            </div>
 
            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title">
                  <h2 className="text-2xl font-semibold hidden lg:block">
                    About IVF
                  </h2>
                </div>
                <div className="description mt-4 text-[#838383]">
                  <p>
                    In vitro fertilization (IVF) is one of the well-known and
                    most successful fertility treatments preferred for couples
                    with complicated fertility problems. IVF treatment is one of
                    the assisted reproductive technology types chosen by
                    millions of couples worldwide with fertility problems. With
                    a 90% success rate around India, IVF is known as a
                    successful fertility treatment. For a few couples, the first
                    IVF cycle might be successful, for some couples, it may take
                    more than one cycle. This treatment involves several medical
                    processes from initial consultation to embryo transfer.
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
          <h2 className="text-2xl font-semibold  flex justify-center mt-14 text-center lg:hidden">
            IVF in Sudha Fertility Centre
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1  px-4">
              <div>
                <div className="Title">
                  <h2 className="text-2xl font-semibold hidden lg:block">
                    IVF in Sudha Fertility Centre
                  </h2>
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
            <h2 className="text-2xl font-semibold">Why choose us for IVF?</h2>
            <h2 className="text-xl mt-2 ">
              With IVF, Your Little Miracle is Just Around the Corner
            </h2>
          </div>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image src={WhyChoose} alt="About IVF" />
                </div>
              </div>
            </div>
 
            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title hidden lg:block">
                  <h2 className="text-2xl font-semibold">
                    Why choose us for IVF?
                  </h2>
                  <h2 className="text-xl mt-2 ">
                    With IVF, Your Little Miracle is Just Around the Corner
                  </h2>
                </div>
                <div className="description mt-4 text-[#838383]">
                  <p>
                    As a leading IVF center in India, Sudha Fertility Centre has
                    a success rate of 85% in IVF treatments. With over 4 decades
                    of expertise in fertility care, we have delivered thousands
                    of healthy IVF babies. With the best IVF doctors in India,
                    we provide you the exceptional IVF treatments in India,
                    guiding you through every step of your parenthood journey
                    and helping you achieve your dream. We offer personalised
                    counselling and compassionate care from consultation to
                    delivery. The dedication of the IVF doctors in Sudha
                    Fertility Centre prioritising every step to maximize the
                    chances of a successful healthy pregnancy and also focusing
                    on the health of both mother and baby retains us as the best
                    IVF hospital in India.
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
                    {When_Why_choose .map((item, index) => (
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
                  <Image src={ChooseIVF} alt="About IVF" />
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
 
      {/* How to prepare for IVF? */}
      <div className="container mx-auto relative h-full  mt-6 lg:mt-14 ">
        <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-6  lg:px-8 h-full">
          <h2 className="text-2xl font-semibold text-center lg:hidden">
            How to prepare for IVF?
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="lg:px-12 py-3  flex items-center pb-8 justify-center lg:items-start ">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full">
                  <Image src={PrepareIVF} alt="About IVF" />
                </div>
              </div>
            </div>
 
            <div className=" flex items-center ">
              <div className="p-6">
                <div className="Title ">
                  <h2 className="text-2xl font-semibold lg:block hidden">
                    How to prepare for IVF?
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
 
export default IVF;
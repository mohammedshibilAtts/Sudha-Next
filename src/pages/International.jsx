"use client";
import Button from "@/components/button/button";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import React, { useState } from "react";
import SubBanner from "@/assets/contact-us/SubBanner.webp";
import Tab1 from "../assets/international/Visa.webp";
import Tab2 from "../assets/international/Transportation.webp";
import Tab3 from "../assets/international/Accommodation.webp";
import Tab4 from "../assets/international/Payment.webp";
import Tab5 from "../assets/international/languageservices.webp";
import Icon1 from "@/assets/Home/tab1.svg";
import Icon2 from "@/assets/Home/tab2.svg";
import Icon3 from "@/assets/Home/tab3.svg";
import Icon4 from "@/assets/Home/tab4.svg";
import Icon5 from "@/assets/Home/tab5.svg";
import FAQItem from "@/components/accordion";
import Image from "next/image";

import fb from "@/assets/Home/fb.svg";
import x from "@/assets/Home/x.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import Insta from "@/assets/Home/insta.svg";

import VideoThumbnail from "@/assets/international/VideoThumbnail.png";
import MetricsTabs from "@/components/ui/internationaltab";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoArrowBackSharp, IoArrowForwardOutline } from "react-icons/io5";

const testimonials = [
  {
    name: "William Shakespeare",
    text: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    // image: ProfileImage,
  },

  {
    name: "charles Dickens",
    text: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    // image: ProfileImage,
  },
  {
    name: "Myme Ishmael",
    text: "Call Myme Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    // image: ProfileImage,
  },
  // Add more testimonials as needed
];

function International() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const tabs = [
    {
      title: "Visa",
      label: "Visa",
      content: {
        heading: "Visa",
        description: (
          <ul className="list-disc pl-5 pr-5 text-gray-600">
            <li>
              Medical Visa or OCI card (overseas citizen of India) is compulsory
              for foreign nationals looking for medical treatment in India
            </li>
            <li>
              You must have a medical visa/OCI card for any kind of treatment
              including examinations, diagnostic tests, indoor admission of the
              patients, major operations, and interventions.
            </li>
            <li>
              Foreign nationals can only at best go for an OPD consultation with
              a nonmedical Visa.
            </li>
            <li>
              Must avoid liberal recommendations for medical visa extension.
            </li>
            <li>
              In case of emergency normal Visa can be transferred to a medical
              visa. Patients have to apply for the change at the regional FRRO
              office.
            </li>
            <li>
              Couples with Foreign nationality and OCI card holders are barred
              from seeking surrogacy in India. They can avail fertility
              treatment for themselves under a Medical Visa.
            </li>
          </ul>
        ),
        image: Tab1,
      },
      icon: Icon1,
    },
    {
      title: "Transportation ",
      label: "Transportation ",
      content: {
        heading: "Transportation ",
        description:
          "We persuade international patients to visit our center and benefit from our technology and high success rates. Complimentary airport pick-up and drop service will be provided by Sudha Fertility’s International Team. The team will also assist you with your travel while in India. ",
        image: Tab2,
      },
      icon: Icon2,
    },
    {
      title: "Accommodation ",
      label: "Accommodation ",
      content: {
        heading: "Accommodation",
        description:
          "Our international patient care team will help you find affordable, suitable, and safe accommodation for the duration of your treatment with us. You can reach out to the care team if you face any difficulties concerning your stay and we will help you make alternate arrangements. ",
        image: Tab3,
      },
      icon: Icon3,
    },
    {
      title: "Payment ",
      label: "Payment",
      content: {
        heading: "Payment",
        description: (
          <div>
            <ul className="list-disc pl-5 pr-5 text-gray-600">
              <li>Cash</li>
              <li>Wire Transfer</li>
              <li>Online Payment</li>
            </ul>
            
          </div>
        ),
        image: Tab4,
      },
      icon: Icon4,
    },
    {
      title: "Language Services ",
      label: "Language Services",
      content: {
        heading: "Language Services",
        description: (
          <div>
            <div>
              <h2>Language Services</h2>
              <p>
                Language will never be a barrier to achieving your dreams of
                having a child. At Sudha Fertility Centres, we offer the
                services of language interpreters to facilitate smooth
                communication between doctors and patients. Interpreters are
                available in multiple languages, including French, Spanish, and
                Russian.
              </p>
            </div>
          </div>
        ),
        image: Tab5,
      },
      icon: Icon5,
    },
  ];

  const FAQData = [
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
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3">
                Your health is everything to us
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
                “Join the 1,50,00+ Families who have
                <br />
                Overcome Infertility”
              </p>
              <div className="mt-6 flex justify-center">
                <Button title="Connect With whatsapp" />
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
        </div>
      </div>

      <div className="container mx-auto relative h-full">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col md:flex-row items-start">
          {/* Text Section */}
          <div className="md:w-1/2 pl-4 pr-4">
            <h2 className="text-2xl font-bold mb-4">Visa Process</h2>
            <p className="text-gray-600 mb-4">
              Sudha Fertility Centre welcomes international clients to avail
              themselves of the benefits of our treatment, subject to the
              fulfillment of legal obligations. As a rule, all foreign patients
              visiting a Medical Visa must register upon arrival with the FRRO
              within 14 days. We assist with all the paperwork you would have to
              get out of the way—from helping with filing forms to having them
              forwarded to the embassies—so you can have a stress-free
              experience.
            </p>
            <p className="text-gray-600 mb-4">
              The process begins when the patients inquire by filling out a
              form. The offices of the Fertility Center will reach out to you at
              the earliest with information about:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>The estimated cost of undergoing procedures</li>
              <li>The approximate timeframe of treatment</li>
              <li>
                Available accommodations and dining facilities for inpatients
              </li>
              <li>
                Availability and estimate figures of rent for guest houses or
                rental houses
              </li>
              <li>
                Following the receipt and perusal of the details given, the
                patient is then required to provide confirmation of their travel
                plans.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 p-4">
            <div className="relative">
              <Image
                src={VideoThumbnail}
                alt="Visa Process Video"
                className="w-full h-auto object-cover rounded-lg"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
                      "_blank"
                    )
                  }
                  className="bg-white p-2 rounded-full shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        

        <ul className="list-disc pl-4 ms-4 pr-4 text-gray-600">
          <li>
            Then, our Overseas Team would send the relevant letter for the
            Medical Visa to the patient and the accompanying attendant.
          </li>
          <li>
            The patients can apply for their Medical Visa on
            http://boi.gov.in/content/registration-requirements-foreign-national.
          </li>
          <li>
            A team representative will receive the patient and attendant upon
            arrival. At this time, their passports and Medical VISAs are
            verified to reduce the chances of any hassles upon registration of
            the FRRO.
          </li>
          <li>
            When all the paperwork and registrations are in order, the patient
            may then begin the consultation and treatment process. If the
            treatment ends within the stipulated time, the patient may leave to
            go back to their home country.
          </li>
          <li>
            If not, the option to extend their Medical VISA is also available,
            which can be done upon the production of relevant documents.
          </li>
        </ul>
      </div>
      </div>  

      {/* Tab  */}
      <div className="container mx-auto ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="tab mt-12">
            <MetricsTabs tabs={tabs} />
          </div>
        </div>
      </div>

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

      <section className="bg-[#F7F7F7]">
        <div className="container mx-auto p-8">
          <div className=" p-6 text-center relative">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoArrowBackSharp />
              </button>
              <motion.div
                key={current}
                className="p-[25px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold mb-2">
                  {testimonials[current].name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {testimonials[current].text}
                </p>
              </motion.div>

              <button
                onClick={nextSlide}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoArrowForwardOutline />
              </button>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex justify-center items-center space-x-2 w-full">
                <span>{String(current + 1).padStart(2, "0")}</span>
                <div className="w-[100px] bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#173366] h-full transition-all duration-300"
                    style={{
                      width: `${((current + 1) / testimonials.length) * 100}%`,
                    }}
                  />
                </div>
                <span>{String(testimonials.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* contact  */}
            <div
              className="py-16 bg-cover bg-center mt-6" 
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

      {/* FAQ  */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
          <div className="content mx-auto flex-1 text-center lg:text-left">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl flex justify-center">
              FAQ
            </h1>
          </div>
          <div className="mt-5">
            {FAQData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default International;

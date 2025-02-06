"use client";
import React, { useState } from "react";
import Banner from "@/assets/About/Banner.webp";
import DotBg from "@/assets/About/DotBg.webp";
import Button from "@/components/button/button";
import Founder from "@/assets/Home/Founder.webp";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Tab1 from "@/assets/Home/tab1.webp";
import { motion } from "framer-motion";
import Insta from "@/assets/Home/insta.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import x from "@/assets/Home/x.svg";
import fb from "@/assets/Home/fb.svg";
import Vision from "@/assets/About/vision.svg";
import Value from "@/assets/About/value.svg";
import Mission from "@/assets/About/mission.svg";
import ManagementCards from "@/components/MangemntCard/ManagementCard";
import TimelineTabs from "@/components/TimelineTab/TimeLineTab";
import { MarqueeComponent } from "@/components/marqueeSlider";
import {Ambattur } from "@/middleware/imagesroute";
import { FaYoutube } from "react-icons/fa";
const cardData = [
  {
    headLine: "Driven By the Happiness Of Thousands of Families",
    Image: Founder,
    subHead: "Experiencing Parenthood Is No More A Dream!",
    description: {
      title: "Four Decades of Compassionate Care in Parenthood.",
      content:
        "With 40+ years of excellence in fertility and child care, Sudha Fertility Centre is known as the best fertility centre in India. With an empathetic mission, Sudha was inaugurated in Erode in 1995 to help childless couples experience the joy of parenting. Today, we take the honour of having 22+ branches across South India and Sri Lanka. We offer comprehensive care with no compromise in quality from metropolitan cities to rural areas. Let us help you overcome your emotional challenges and guide you through your parenthood journey.",
    },
  },
  {
    headLine: "Test Data",
    Image: Tab1,
    subHead: "Experiencing Test Data",
    description: {
      title: "Four Decades of Compassionate Care in Parenthood.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sequi earum quia quos quod dolore molestiae, temporibus incidunt reprehenderit consectetur doloribus, dolorem quam sed exercitationem hic! Dicta tenetur a laudantium?",
    },
  },
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      {/* Banner  */}
      <div className="relative">
        {/* Background Image with Gradient Overlay */}
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

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center mb-40 mt-28">
            <div className="text-white text-center px-4 font-outfit">
              <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                About Us
              </h1>
              <h2 className="font-outfit font-semibold text-xl sm:text-lg md:text-2xl lg:text-xl">
                — Your Journey Starts Here！
              </h2>
              <div className="button mt-8">
                <Button title={"Get Consult Our Specialists"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Driven By the Happiness Of Lakhs of Families */}
      <div className="container mx-auto mt-5 ">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
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
          <div className="heading text-center xl:hidden mt-9">
            <motion.h1
              className="font-outfit font-semibold text-2xl"
              key={`headline-${currentIndex}`} // Make key unique by appending index
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {cardData[currentIndex].headLine}
            </motion.h1>
            <motion.p
              className="mt-2"
              key={`subheadline-${currentIndex}`} // Make key unique by appending index
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {cardData[currentIndex].subHead}
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="main flex flex-col md:flex-row xl:mt-9 mt-5 mb-9">
            {/* Image Section */}
            <div className="image w-full lg:w-1/2 flex justify-center items-center">
              <motion.div
                className="w-full  flex justify-center items-center"
                key={`image-${currentIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={cardData[currentIndex].Image}
                  alt="Founder"
                  className="rounded-xl object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[300px] xl:h-[400px]"
                />
              </motion.div>
            </div>

            {/* Description Section */}
            <div className="description w-full lg:w-1/2 px-3 mt-4 lg:mt-2 xl:mt-5 lg:ms-5">
              {/* Desktop Heading */}
              <div className="heading hidden xl:block">
                <motion.h1
                  className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-2xl"
                  key={`desktop-headline-${currentIndex}`} // Make key unique by appending index
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {cardData[currentIndex].headLine}
                </motion.h1>
                <motion.p
                  className="mt-2"
                  key={`desktop-subheadline-${currentIndex}`} // Make key unique by appending index
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {cardData[currentIndex].subHead}
                </motion.p>
              </div>

              <div className="content rounded-xl font-outfit mt-3">
                <motion.h1
                  className="font-outfit font-semibold text-xl text-[#173366]"
                  key={`description-title-${currentIndex}`} // Make key unique by appending index
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {cardData[currentIndex].description.title}
                </motion.h1>
                <motion.p
                  className="text-[#838383] mt-2"
                  key={`description-content-${currentIndex}`} // Make key unique by appending index
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {cardData[currentIndex].description.content}
                </motion.p>

                {/* Navigation */}
                <div className="navigator flex mt-4 gap-6 justify-center lg:justify-end">
                  <div
                    className="left shadow-xl rounded-full p-3 flex justify-center cursor-pointer"
                    onClick={handlePrev}
                  >
                    <button>
                      <FaAngleLeft
                        className={`${
                          currentIndex === 0 ? "text-[#838383]" : ""
                        }`}
                        size={20}
                      />
                    </button>
                  </div>
                  <div
                    className="next shadow-xl rounded-full p-3 flex justify-center cursor-pointer"
                    onClick={handleNext}
                  >
                    <button>
                      <FaAngleRight
                        className={`${
                          currentIndex === cardData.length - 1
                            ? "text-[#838383]"
                            : ""
                        }`}
                        size={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div
        className="mb-9 container mx-auto"
        style={{
          background: `url(${DotBg.src}) center center no-repeat, #F0F5FF`,
          backgroundSize: "cover", // or 'fill' depending on your needs
        }}
      >
        <div className="container mx-auto ">
          <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
            <div className="main flex flex-col lg:flex-row ">
              <div className="first  h-96 flex-1">
                <div className="tiltle mt-3">
                  <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-2xl">
                    Our Mission
                  </h1>
                  <p className="mt-4 max-w-lg">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s .Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s ...
                  </p>
                  <div className="button mt-5">
                    <Button title={"Book Your Free Appointment"} />
                  </div>
                </div>
              </div>

              <div className="second flex flex-1 my-4">
                <div className="flex flex-col md:flex-row">
                  <div className="vison-values flex-1">
                    <div className="vison bg-white shadow-lg rounded-xl ">
                      <div className="tiles-1  p-4 rounded-lg font-outfit ">
                        <div className="image">
                          <Image src={Vision} alt="Vison" />
                        </div>
                        <div className="main-tail flex mt-4">
                          <div className="content">
                            <div className="title">
                              <h1 className="text-xl font-bold text-[#173366]">
                                Vision
                              </h1>
                            </div>
                            <div className="des mt-2">
                              <p className="text-[#838383]">
                                To support couples with compassionate care and
                                advanced fertility solutions to achieve their
                                dream of parenthood
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="value mt-4">
                      <div className="vison bg-white shadow-lg rounded-xl">
                        <div className="tiles-1  p-4 rounded-lg font-outfit ">
                          <div className="image">
                            <Image src={Value} alt="Vison" />
                          </div>
                          <div className="main-tail flex mt-4">
                            <div className="content">
                              <div className="title">
                                <h1 className="text-xl font-bold text-[#173366]">
                                  Values
                                </h1>
                              </div>
                              <div className="des mt-2">
                                <p className="text-[#838383]">
                                  Compassion, integrity, innovation, and
                                  unwavering support in every step of the
                                  parenthood journey
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mission h-90 flex-1  flex justify-center items-center mt-4 md:mt-0 md:ms-9">
                    <div className="mission">
                      <div className="vison bg-white shadow-lg rounded-xl">
                        <div className="tiles-1  p-4 rounded-lg font-outfit ">
                          <div className="image">
                            <Image src={Mission} alt="Vison" />
                          </div>
                          <div className="main-tail flex mt-4">
                            <div className="content">
                              <div className="title">
                                <h1 className="text-xl font-bold text-[#173366]">
                                  Mission
                                </h1>
                              </div>
                              <div className="des mt-2">
                                <p className="text-[#838383]">
                                  To provide empathetic, personalised care that
                                  supports couples on their journey to
                                  parenthood
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Management */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
          <div className="title text-center">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Our Management
            </h1>

            <p className="max-w-5xl flex mx-auto mt-3 text-center justify-center">
              The Visionaries Powering Your Parenthood Dream
            </p>
          </div>
          <ManagementCards />
        </div>
      </div>

      {/* Tab  */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
          <div className="title text-center">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              The Journey of Sudha Hospital
            </h1>
          </div>
          <div className="timeLine mt-4">
            <TimelineTabs />
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

export default About;

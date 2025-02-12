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
import Award1 from "@/assets/About/award1.webp";
import Award2 from "@/assets/About/award2.webp";
import ManagementCards from "@/components/MangemntCard/ManagementCard";
import TimelineTabs from "@/components/TimelineTab/TimeLineTab";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import { Ambattur } from "@/middleware/imagesroute";
import Thumbnail from "@/assets/About/dhanabagyam-thumbnail.png";
import ContactForm from "@/components/contact/contactForm";
import BookingButton from "@/components/button/bookingButton";

const cardData = [
  {
    headLine: "Four Decades of Compassionate Care in Parenthood",
    Image: Founder,
    subHead: "",
    description: {
      title: "",
      content:
        "With 40+ years of excellence in fertility and childcare, Sudha Fertility Centre is known as the best fertility centre in India. With an empathetic mission, Sudha was inaugurated in Erode in 1995 to help childless couples experience the joy of parenting. Today, we take the honor of having 22+ branches across South India, Bangladesh, and Sri Lanka. We offer comprehensive care with no compromise in quality from metropolitan cities to rural areas. Let us help you overcome your emotional challenges and guide you through your parenthood journey. ",
    },
  },
  {
    headLine: "Being the Best by Providing the Best ",
    Image: Tab1,
    subHead: "",
    description: {
      title: "",
      content: `
      As the best fertility hospital in India, Sudha Fertility Centre is equipped with the best, from equipment to experts, with the intention to provide the best treatments to help you overcome your fertility challenges and make your dream of parenthood into reality.
    `,
      list: [
        "World-class facilities",
        "Best fertility doctors",
        "IVF specialists",
        "IUI doctors",
        "State-of-the-art technologies",
        "Finest embryologists",
        "Experienced gynecologists",
        "Meticulous surgeons",
      ],
    },
  },
  {
    headLine: " Inspired by Empathy, Driven by Purpose: ",
    Image: Tab1,
    subHead: "",
    description: {
      title: "",
      content: `
      We are inspired by the mission to help couples bring their parenthood dreams into reality. Our dedication, consistent care, and professionalism helped us remain the best fertility hospital in India. We have delivered 1 lakh+ healthy babies and brought happiness to the lives of thousands of families. Driven by the vision to vanish the stress and tears of couples longing for a baby. 
    `,
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
                Driven By the Happiness Of Lakhs of Families.
              </h1>
              <h2 className="font-outfit font-semibold text-xl sm:text-lg md:text-2xl lg:text-xl">
                Experiencing Parenthood Is No More A Dream!
              </h2>
              <div className="button mt-8 flex justify-center items-center">
                <Button title={"Get Free Consultation "} link="/#contact-now"/>
              </div>
              <div className="award mt-3 flex justify-center items-center gap-6">
                <div className="card ">
                  <div className="image">
                    <Image src={Award1} alt="Award" />
                  </div>
                </div>
                <div className="card ">
                  <div className="image">
                    <Image src={Award2} alt="Award" />
                  </div>
                </div>
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
                // key={`image-${currentIndex}`}
                // initial={{ opacity: 0, x: -20 }}
                // animate={{ opacity: 1, x: 0 }}
                // exit={{ opacity: 0, x: -100 }}
                // transition={{ duration: 0.5 }}
              >
                <Image
                  src={Founder}
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
                <motion.div
                  className="content rounded-xl font-outfit mt-3"
                  key={`description-content-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-[#838383] mt-2">
                    {cardData[currentIndex].description.content}
                  </p>
                  {cardData[currentIndex].description.list && (
                    <ul className="list-disc pl-5 mt-2 text-[#838383]">
                      {cardData[currentIndex].description.list.map(
                        (item, index) => (
                          <li key={index}>{item}</li>
                        )
                      )}
                    </ul>
                  )}
                </motion.div>

                {/* Navigation */}
              </div>
            </div>
          </div>

          <div className="navigator flex mt-4 gap-6 justify-center lg:justify-end">
            <div
              className="left shadow-xl rounded-full p-3 flex justify-center cursor-pointer"
              onClick={handlePrev}
            >
              <button>
                <FaAngleLeft
                  className={`${currentIndex === 0 ? "text-[#838383]" : ""}`}
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
                    currentIndex === cardData.length - 1 ? "text-[#838383]" : ""
                  }`}
                  size={20}
                />
              </button>
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
                    Sudha Fertility Centre is a trusted fertility hospital,
                    committed to providing compassionate and advanced care to
                    individuals and couples on their path to parenthood. As a
                    leading IVF centre, we combine innovation and expertise to
                    make the dream of building a family a reality. With a
                    patient-focused approach, we ensure the highest standard of
                    care in a supportive and nurturing environment.
                  </p>
                  <div className="button mt-5">
                    <Button title={"Get  Free Consultation"} link="/#contact-now" />
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
                                dream of parenthood.
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
                                  To provide empathetic, personalized care that
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

      <div className="container mx-auto mt-5 ">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold mb-4">Our Journey</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <Image
                src={Thumbnail}
                alt="Story Behind Sudha Fertility Centre"
                className="w-full h-auto rounded-lg"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() =>
                    window.open(
                      "https://youtu.be/E6aWzjaivps?si=j_XV57-KpA7QVN7L",
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
            <div className="w-full md:w-1/2 md:pl-4">
              <h3 className="text-xl font-semibold mb-2">
                40 Years of Excellence & Inauguration of New Branches
              </h3>
              <p className="text-gray-600">
                The journey of Sudha Fertility Centre started with an empathetic
                mission to help couples achieve their dream of parenthood. The
                vision of Dr. S. Dhanabagyam, the founder, was shaped by a
                heart-wrenching and life-changing experience. While performing a
                postmortem on a woman who had tragically taken her own life due
                to the immense societal pressure of not having children, Dr.
                Dhanabagyam was profoundly moved. This sorrowful event sparked
                her determination to make a difference in the lives of couples
                facing infertility. It led her to establish the Sudha Fertility
                Centre.
              </p>
            </div>
          </div>
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
              <Button title="View on YouTube" icon={<FaYoutube />} />
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

"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.png";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/ambatur/doc.png";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.png";
import Hospital from "@/assets/branch/Salem/salem.webp";
import charulatha from "@/assets/branch/Salem/charulatha.webp";
import ImageGrid from "@/components/imagegrid";

import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaWalking,
  FaMapMarkerAlt,
  FaShareAlt,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import FAQItem from "@/components/accordion";
import AppointmentForm from "@/components/appointmentForm";
import Navbar from "@/components/branchNav";
import ImageSlider from "@/components/imageSlider";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur, Salem } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";

function SalemPage() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false); // State to track if all FAQs are shown

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleViewMore = () => {
    if (showAll) {
      setVisibleCount(5); // Reset to initial count when showing less
      setShowAll(false); // Properly toggle state
    } else {
      setVisibleCount(Salem.faqs.length); // Show all FAQs
      setShowAll(true); // Properly toggle state
    }
  };
  const sections = [
    { id: "about", label: "About" },
    { id: "facilities", label: "Facilities" },
    { id: "specialists", label: "Fertility Specialists" },
    { id: "gallery", label: "Gallery" },
    { id: "location", label: "Location" },
  ];

  return (
    <>
      <div className="relative w-full min-h-[600px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover -top-40 bg-center"
          style={{
            backgroundImage: `url(${BgAbout.src}), linear-gradient(to bottom, rgba(23, 51, 102, 0.7), rgba(255, 255, 255, 1))`,
          }}
        />

        <div>
          <div className="relative py-10 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Content */}
                <motion.div
                  className="text-white w-full lg:w-1/2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-[#FFC65C] text-base sm:text-xl md:text-4xl uppercase">
                    VANAKKAM Salem
                  </h2>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
                    Best Fertility Centre In <br className="hidden sm:block" />
                    <span className="text-[#FDCB58]">Salem</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl mt-4">
                    ENCOURAGEMENT AND GUIDANCE FOR YOUR PREGNANCY JOURNEY
                  </p>
                  <Button styleClass="mt-6" text="Connect With WhatsApp →" />
                </motion.div>

                {/* Right Content - Form */}
                <BranchForm />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-64 lg:-bottom-44 w-full ">
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

      <div className="container mx-auto mt-52 lg:mt-36">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="w-full p-5">
              {/* Navbar */}
              <Navbar sections={sections} />

              {/* Sections */}
              <ScrollMotion>
                <section id="about" className="  pt-2">
                  <motion.div
                    className="flex flex-col lg:flex-row gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-[#173366] text-2xl font-bold">
                        About
                      </h2>
                      <p className="text-md font-bold">
                        Best Fertility Centre in Salem{" "}
                      </p>
                      <p className="text-md mt-3 text-md text-[#838383]">
                        With the opening of our Salem branch in 2018, Sudha
                        Fertility Centre has become the go-to destination for
                        fertility care in the region. We are proud to be
                        recognised as the best fertility hospital in Salem,
                        offering personalised services to make your parenthood
                        dreams come true. Our team of compassionate experts is
                        committed to guiding you through every step with care
                        and understanding.
                      </p>
                      <h5 className="mt-2 font-bold">
                        World-class Fertility Treatments in Salem:
                      </h5>
                      <p className="mt-2 text-md text-md text-[#838383]">
                        Sudha Fertility Centre stands as a beacon of hope for
                        couples in Salem seeking advanced fertility treatments.
                        With the best fertility specialists and cutting-edge
                        technology, we are your trusted fertility centre for
                        comprehensive solutions to infertility challenges.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-md text-md text-[#838383]">
                      As the best fertility hospital in Salem, Sudha Fertility
                      Centre specialises in the following treatments,
                    </p>

                    <ul className="text-md text-[#838383] list-disc mt-3 pl-4 line-height-10">
                      <li>Normal Delivery - Natural Labour For Mothers </li>
                      <li>IVF - In vitro fertilization </li>
                      <li>IUI - Intrauterine insemination</li>
                      <li>ICSI - Intracytoplasmic Sperm Injection</li>
                      <li>
                        IMSI - Intracytoplasmic morphologically selected sperm
                        injection
                      </li>
                      <li>TESE - Testicular sperm extraction</li>
                      <li>PESA - Percutaneous Epididymal Sperm Aspiration</li>
                      <li>LAH - Laparoscopic-assisted hepatectomy</li>
                      <li>
                        Ovarian ABCD - Ovarian Rejuvenation (Autologous Blood
                        Cell Derivative)
                      </li>
                      <li>FET - Frozen Embryo Transfer</li>
                      <li>ENDOMETRIUM PRP - Platelet-Rich Plasma</li>
                    </ul>
                    <p className="text-md text-[#838383]">
                      and other gynaec-related surgeries like C-section,
                      Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst
                      and fluid aspiration, Myomectomy, ERA, OBS as well as
                      other fertility preservation processes are performed by
                      the best fertility doctors in Salem.
                    </p>
                    <h2 className=" text-md font-bold mt-3">
                      Why Sudha Fertility Centre is the Best Fertility Centre in
                      Salem?
                    </h2>
                    <p className="text-md text-[#838383] mt-3">
                      At Sudha Fertility Centre in Salem, we have helped
                      numerous families overcome fertility challenges by
                      treating them with the utmost care, and we take great joy
                      in watching parents hold their newborns for the very first
                      time. Our success stories in Salem are diverse, spanning
                      young to older couples looking to start their journey to
                      parenthood.
                    </p>
                    <p className="text-md text-[#838383]">
                      Our fertility centre in Salem has established itself as a
                      beacon of hope, consistently offering fertility treatments
                      that bring joy to families facing complex challenges.
                      Guided by the expertise of the best IVF doctors in Salem,
                      many couples who have longed for a child have been blessed
                      with babies, making their dream of parenthood come true at
                      Sudha Fertility Centre.
                    </p>
                  </motion.div>

                  <hr className="mt-4" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="facilities">
                  <motion.div
                    className="flex flex-col lg:flex-row gap-8 mt-5 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-[#173366] text-2xl font-bold">
                        Facilities
                      </h2>
                      <p className="text-md text-[#838383] mt-2">
                        Sudha Fertility Centre, the Best IVF Centre in Salem is
                        committed to transforming your dreams of embracing
                        parenthood into reality. We offer quick and practical
                        solutions with proven outcomes. We are dedicated to
                        making your parenthood dreams come true with world-class
                        fertility treatments and facilities, delivering
                        excellence throughout your entire journey.
                      </p>
                      <ul className="text-md text-[#838383] mt-2 list-disc pl-4 line-height-10">
                        <li>Round-the-clock medical care </li>
                        <li>Fully equipped laboratories </li>
                        <li>24/7 diagnostic services </li>
                        <li>Easily accessible pharmacies </li>
                        <li>State-of-the-art operation theatre </li>
                        <li>Dedicated labour ward for natural birth </li>
                        <li>Advanced ultrasound equipments </li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <ImageSlider images={Ambattur.Facilities.Facilitiesimg} />
                    </div>
                  </motion.div>
                  <hr className="mt-4 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="specialists">
                  <motion.div
                    className="flex flex-col-reverse lg:flex-row gap-8 mt-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-[#173366] text-2xl font-bold">
                        Fertility Specialists <br />
                        in Salem
                      </h2>
                      <h3 className="text-[20px] font-bold mt-2">
                        Chief Experts of Sudha Fertility Centre in Salem
                      </h3>
                      <h4 className="text-[18px] text-[#173366] font-bold mt-2">
                        Dr.S. Pradeepa
                      </h4>
                      <h4 className="text-md text-[#000000]">
                        DGO, DNB(OG), MNAMS, ART
                      </h4>
                      <p className="text-md text-[#838383] mt-2 line-height-10">
                        Dr. Pradeepa’s unwavering commitment to excellence has
                        garnered global acclaim from a diverse clientele.
                        Following her appointment as Vice President at Sudha
                        Fertility Centre, a strategic and meticulously planned
                        expansion initiative led to the establishment of 19
                        branches within an impressive span of just 5 years, all
                        of which are now thriving successfully.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={Pradeepa}
                        alt="Pradeepa"
                        className="w-full h-auto"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col lg:flex-row gap-8 mt-5 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={charulatha}
                        alt="charulatha"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-[20px] font-bold mt-2">
                        Our Fertility Specialist in Salem
                      </h2>
                      <h2 className="text-[18px] text-[#173366] font-bold mt-2">
                        Dr. Charulatha Baaskaran
                      </h2>
                      <h2 className="text-md text-[#000000]">
                        M.D(OG) - Fertility Consultant / Gynaecologist
                      </h2>
                      <p className="text-md text-[#838383] mt-2">
                        Dr. Charulatha Baaskaran, M.D.,(OG), Fertility
                        Consultant/Gynecologist, brings over 3 1/2 years of
                        expertise in obstetrics and gynecology to our team. With
                        extensive experience including over 50 ICSI, 75 IUI, and
                        120 IVF procedures, Charulatha Baaskaran is dedicated to
                        providing exceptional care tailored to each patient’s
                        needs. Her proficiency extends to hysteroscopy,
                        laparoscopy, LSCS, and various other procedures,
                        ensuring comprehensive support for all aspects of
                        women’s health.
                      </p>
                    </div>
                  </motion.div>

                  <hr className="mt-4 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="gallery">
                  <h2 className="text-[#173366] mt-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
                    Gallery
                  </h2>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageGrid images={Salem.gallery} />
                  </motion.div>

                  <hr className="mt-4 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="location">
                  <motion.div
                    className="flex flex-col lg:flex-row gap-8 mt-5 bg-[#F0F5FF] p-5 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-[#173366] text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
                        Location
                      </h2>
                      <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-bold mt-2">
                        Book Your Free Appointment
                      </h3>
                      <p className="text-sm sm:text-md md:text-md lg:text-lg text-[#838383] mt-2">
                        Take the first step towards your parenthood journey.
                      </p>

                      <div className="bg-blue-50 p-6 rounded-lg space-y-6">
                        {/* Phone Section */}
                        <div className="flex items-center space-x-4">
                          <div className="bg-white p-2 rounded-full">
                            <IoCallOutline className="text-xl text-black size-4" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm md:text-base font-bold text-gray-500">
                              CALL
                            </p>
                            <p className="text-lg sm:text-xl md:text-sm font-bold">
                              +91 767-007-6006
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="bg-white p-3 rounded-full flex items-start justify-start shadow-md">
                            <CiLocationOn className="text-xl text-black size-4" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm md:text-base font-bold text-gray-500">
                              Address
                            </p>
                            <p className="text-lg sm:text-xl md:text-sm  font-bold">
                            C1, 2nd floor, RV TOWERS, Vanchinathan iyer street, Swarnapuri, Salem, Tamil Nadu 636004
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="bg-white p-2 rounded-full">
                            <AiTwotoneMail className="text-xl text-black size-4" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm md:text-base font-bold text-gray-500">
                              EMAIL US
                            </p>
                            <p className="text-lg sm:text-xl md:text-sm font-bold">
                              care@sudhahospitals.com
                            </p>
                          </div>
                        </div>

                        {/* Social Media Section */}
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="w-[20px] border-t border-2 border-black ml-2"></div>
                            <p className="p-1 text-sm sm:text-base md:text-lg font-bold">
                              Connect with us:
                            </p>
                          </div>
                          <div className="flex space-x-4">
                            <FaFacebook className="text-4xl  text-gray-600 bg-white p-2 rounded-full" />
                            <FaYoutube className="text-4xl text-gray-600 bg-white p-2 rounded-full" />
                            <FaInstagram className="text-4xl text-gray-600 bg-white p-2 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <div className="bg-blue-50 p-4 rounded-lg shadow-md max-w-sm mx-auto">
                        <div className="relative">
                          <Image
                            src={Hospital}
                            alt="Building"
                            className="rounded-lg w-full"
                            layout="responsive" // Ensures the image is responsive
                            width={700} // Set a default width
                            height={500} // Set a default height
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px" // Define sizes for different breakpoints
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs flex justify-around items-center p-2 rounded-b-lg">
                            <div className="flex items-center space-x-1">
                              <FaWalking />
                              <span>3D Walk Through</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaMapMarkerAlt />
                              <span>Get Direction</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaShareAlt />
                              <span>Share</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>
              </ScrollMotion>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="max-w-md mx-auto  bg-white shadow-lg rounded-lg sticky top-[135px]">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <section>
          <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h2>
            {Salem.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Salem.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
        </section>

        <section>
          {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
          <MarqueeComponent
            items={Salem.gallery}
            direction="left"
            speed="fast"
            className="custom-class"
          />
          <div className="flex justify-center flex-wrap gap-4 items-center mt-4 mb-4">
            <h2 className="text-2xl font-bold text-center ">
              Happy Patients, Happy Stories
            </h2>
            <Button text="View youtube " icon={<FaYoutube />} />
          </div>
          <MarqueeComponent
            items={Salem.gallery}
            direction="right"
            speed="fast"
            className="custom-class"
          />
          {/* </div>
          </div> */}
        </section>
      </div>
    </>
  );
}

export default SalemPage;

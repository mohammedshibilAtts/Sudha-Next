"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.png";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/ambatur/doc.png";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.png";
import BathulaPadmavathiDevi from "@/assets/branch/ambatur/bathula_padmavathi_devi.png";
import Hospital from "@/assets/branch/ambatur/hospital_img.png";

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
import Ambattur from "@/middleware/imagesroute";
import AppointmentForm from "@/components/appointmentForm";
import Navbar from "@/components/branchNav";
import ImageSlider from "@/components/imageSlider";
import {
  MarqueeComponent,
  MarqueeComponentLeft,
  MarqueeComponentRight,
} from "@/components/marqueeSlider";
function AmbatturPage() {
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
      setVisibleCount(Ambattur.faqs.length); // Show all FAQs
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
                    VANAKKAM AMBATTUR
                  </h2>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
                    Best Fertility Centre In <br className="hidden sm:block" />
                    <span className="text-[#FDCB58]">Ambattur</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl mt-4">
                    Where Dreams of Parenthood Begin
                  </p>
                  <Button styleClass="mt-6" text="Connect With WhatsApp →" />
                </motion.div>

                {/* Right Content - Form */}
                <motion.div
                  className="w-full lg:w-[450px] bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8 lg:mt-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      Book your
                      <span className="text-[#FDCB58] block mt-1">
                        Appointment
                        <br />
                        Today!
                      </span>
                    </h2>
                    <Image
                      src={Calendar}
                      alt="Calendar"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-4 bg-[#8894af]/80 rounded-md outline-none border-none 
                             placeholder-white text-white transition-all hover:bg-[#8894af]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full p-4 bg-[#8894af]/80 rounded-md outline-none border-none 
                             placeholder-white text-white transition-all hover:bg-[#8894af]"
                    />
                    <input
                      type="text"
                      placeholder="Select Location"
                      className="w-full p-4 bg-[#8894af]/80 rounded-md outline-none border-none 
                             placeholder-white text-white transition-all hover:bg-[#8894af]"
                    />
                    <button
                      className="w-full p-4 border-2 border-white rounded-lg text-lg 
                                   text-white hover:bg-white/10 transition-all"
                    >
                      Book a Free Appointment
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="w-full p-5">
              {/* Navbar */}
              <Navbar sections={sections} />

              {/* Sections */}
              <section id="about" className="  pt-2">
                <motion.div
                  className="flex flex-col lg:flex-row gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-[#173366] text-2xl font-bold">About</h2>
                    <p className="text-md">Best Fertility Centre in Ambattur</p>
                    <p className="text-md mt-3">
                      <span className="text-[#173366] font-bold">
                        Sudha Fertility Centre
                      </span>
                      launched its branch in Ambattur in 2023. With expertise in
                      fertility care, Sudha is known as the best fertility
                      hospital in Ambattur. Our experienced team is committed to
                      providing personalized care and compassionate support in
                      every step of your parenthood journey. We're driven by the
                      mission to turn your dreams of parenthood into reality.
                    </p>
                    <h5 className="mt-2 font-bold">
                      World-class Fertility Treatments in Ambattur:
                    </h5>
                    <p className="mt-2 text-md">
                      With advanced technologies and the
                      <span className="text-[#173366] font-bold">
                        best fertility specialists in Ambattur
                      </span>
                      , we provide you the exceptional
                      <span className="text-[#173366] font-bold">
                        fertility treatments in Ambattur
                      </span>
                      to support you throughout your parenthood journey.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <Image
                      src={SudhaAbout}
                      alt="Ambattur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-[#173366] text-lg font-bold">
                    As the best IVF centre in Ambattur, Sudha Fertility Centre
                    specialises in the following treatments,
                  </h4>
                  <h2 className=" text-md font-bold">Fertility Treatments:</h2>
                  <ul className="text-md text-[#838383] list-disc pl-4 line-height-10">
                    <li>Normal Delivery - Natural Labour For Mothers</li>
                    <li>IVF - In vitro fertilization</li>
                    <li>IUI - Intrauterine inseminatio</li>
                    <li>ICSI - Intracytoplasmic Sperm Injection</li>
                    <li>
                      IMSI - Intracytoplasmic morphologically selected
                      sperminjection
                    </li>
                    <li>TESE - Testicular sperm extraction</li>
                    <li>PESA - Percutaneous Epididymal Sperm Aspiration</li>
                    <li>LAH - Laparoscopic-assisted hepatectomy</li>
                    <li>
                      Ovarian ABCD - Ovarian Rejuvenation (Autologous Blood Cell
                      Derivative)
                    </li>
                    <li>FET - Frozen Embryo Transfer</li>
                    <li>ENDOMETRIUM PRP - Platelet-Rich Plasma</li>
                  </ul>
                  <p className="text-md text-[#838383]">
                    and other gynaec-related surgeries like,C-section,
                    Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and
                    fluid aspiration, Myomectomy, ERA, OBS as well as other
                    fertility preservation processes are performed by the
                    best fertility doctors in Ambattur
                  </p>
                  <h2 className=" text-md font-bold mt-3">
                    Why Sudha Fertility Centre is the Best Fertility Centre in
                    Ambattur?
                  </h2>
                  <p className="text-md text-[#838383] mt-3">
                    Sudha Fertility Centre in Ambattur has lighten up the lives
                    of thousands of families longing for a baby for years. Not
                    only young couples who start their marriage life but also
                    elderly couples longing for a child for years have been
                    blessed with babies. As the best
                    <span className="text-[#173366] font-bold">
                      IVF hospital in Ambattur
                    </span>
                    , we make sure every individual who visits our doors
                    receives the best care and enjoys every journey of
                    parenthood.
                  </p>
                  <p className="text-md text-[#838383] mt-3">
                    Driven by the mission to help couples enjoy their parenthood
                    journey, we guide every couple with the best IVF doctors in
                    Ambattur. With an immense record of delivering lakhs of
                    healthy babies across all branches, Sudha Fertility Centre
                    in Ambattur is known as the best fertility centre in
                    Ambattur.
                  </p>
                </motion.div>

                <hr className="mt-4" />
              </section>

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
                    <h2 className="text-md font-bold">Our Best Facilities</h2>
                    <p className="text-md text-[#838383] mt-2">
                      As the best
                      <span className="text-[#173366] font-bold ml-1">
                        fertility hospital in Ambattur
                      </span>
                      , Sudha Fertility Centre provides quick and practical
                      solutions to patients with evidence-based results. We help
                      you transform your dream of parenthood into reality with
                      our best fertility treatments and world-class facilities,
                      delivering excellence at every stage of your parenthood
                      journey.
                    </p>
                    <ul className="text-md text-[#838383] mt-2 list-disc pl-4 line-height-10">
                      <li>Operation Theatre</li>
                      <li>Daycare wards</li>
                      <li>Labour Ward</li>
                      <li>Round the clock Pharmacy</li>
                      <li>State-of-the-art Technologies</li>
                      <li>Full-fledged diagnostics department</li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <ImageSlider images={Ambattur.gallery} />

                    {/* <Image src={Facilities} alt="Facilities" className="w-full h-full object-cover" /> */}
                  </div>
                </motion.div>
                <hr className="mt-4 border-gray-300" />
              </section>

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
                      in Ambattur
                    </h2>
                    <h3 className="text-[20px] font-bold mt-2">
                      Our Chief Fertility Expert
                    </h3>
                    <h4 className="text-[18px] text-[#173366] font-bold mt-2">
                      Dr. S. Pradeepa
                    </h4>
                    <h4 className="text-md text-[#000000]">
                      DGO, DNB(OG), MNAMS , ART
                    </h4>
                    <p className="text-md text-[#838383] mt-2 line-height-10">
                      Dr. Pradeepa’s unwavering commitment to excellence has
                      garnered global acclaim from a diverse clientele.
                      Following her appointment as Vice President at Sudha
                      Fertility Centre, a strategic and meticulously planned
                      expansion initiative led to the establishment of 19
                      branches within an impressive span of just 5 years, all of
                      which are now thriving successfully.
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
                      src={BathulaPadmavathiDevi}
                      alt="BathulaPadmavathiDevi"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-[#173366] text-2xl font-bold">
                      Our Fertility Consultant
                    </h2>
                    <h2 className="text-[20px] font-bold mt-4">
                      Dr. Bathula Padmavathi Devi
                    </h2>
                    <h2 className="text-md font-bold mt-2">
                      MBBS., MD(OG)., FRM
                    </h2>
                    <p className="text-md text-[#838383] mt-2">
                      Dr. Bathula Padmavathi Devi, MBBS., MD(OG)., FRM is a
                      dedicated fertility specialist at Sudha Fertility Centre,
                      bringing expertise and compassionate care to couples on
                      their parenthood journey. With a strong focus on
                      personalized treatment plans and advanced reproductive
                      techniques, she strives to make every step of fertility
                      care as seamless and hopeful as possible.
                    </p>
                  </div>
                </motion.div>

                <hr className="mt-4 border-gray-300" />
              </section>

              <section id="gallery">
                <h2 className="text-[#173366] mt-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
                  Gallery
                </h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageGrid images={Ambattur.gallery} />
                </motion.div>

                <hr className="mt-4 border-gray-300" />
              </section>

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
                          <p className="text-lg sm:text-xl md:text-xl font-bold">
                            +91 767-007-6006
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
                          <p className="text-lg sm:text-xl md:text-xl font-bold">
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
            {Ambattur.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Ambattur.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
                items={Ambattur.gallery}
                direction="left"
                speed="fast"
                className="custom-class"
              />
              <div className="flex justify-center gap-4 items-center mt-4 mb-4">
                <h2 className="text-2xl font-bold text-center ">
                  Happy Patients, Happy Stories
                </h2>
                <Button text="View youtube " icon={<FaYoutube />} />
              </div>
              <MarqueeComponent
                items={Ambattur.gallery}
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

export default AmbatturPage;

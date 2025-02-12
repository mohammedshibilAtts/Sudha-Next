"use client";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/Blastocyst/Banner.webp";
import About from "@/assets/Treatments/Blastocyst/About.webp";
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
import { Ambattur } from "@/middleware/imagesroute";
import Insta from "@/assets/Home/insta.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import x from "@/assets/Home/x.svg";
import fb from "@/assets/Home/fb.svg";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import ContactForm from "@/components/contact/contactForm";

const facilities = [
  {
    title: "High-tech IVF laboratory",
    position: "left-32 top-10",
    rounded: "rounded-br-none",
  },
  {
    title: "World-class embryology equipment",
    position: "left-[30px] top-44",
    rounded: "rounded-br-none",
  },
  {
    title: "Sophisticated incubators",
    position: "left-[76px] top-2/4",
    rounded: "rounded-br-none",
  },
  {
    title: "State-of-the-Art Ultrasound Technology",
    position: "right-[40px] top-[70px] ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Comprehensive diagnostic tools",
    position: "right-[85px] top-[140px]  ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Experienced fertility specialists and embryologists in India",
    position: "-right-[122px] top-[275px] ",
    rounded: "rounded-bl-none",
  },
];

function Blastocyst() {
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
      setShowAll(true);
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
                Blastocyst Culture And Transfer
              </h1>
              <h3 className="mt-3 max-w-3xl font-outfit  text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                Every blastocyst transfer is a step toward your cherished dream
              </h3>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About  Blastocyst */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h2 className="text-2xl font-semibold flex justify-center text-center lg:hidden">
            About Blastocyst Culture And Transfer
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full flex justify-center items-center">
                  <Image
                    src={About}
                    alt="About  Blastocyst"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title">
                  <h2 className="text-2xl font-semibold hidden lg:block">
                    About Blastocyst Culture And Transfer
                  </h2>
                </div>
                <div className="description mt-4 text-[#838383]">
                  <p>
                    Blastocyst Culture and Transfer is an important process in
                    IVF that involves the creation of an embryo in a laboratory
                    for 5-6 days until it reaches the blastocyst stage, an
                    advanced development phase. This extended culture allows the
                    selection of the healthiest embryos, increasing the chances
                    of implantation and successful pregnancy when transferred to
                    the uterus.
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

      {/* Hysteroscopy in Sudha Fertility Centre */}
      <div className="container mx-auto relative h-full mt-6 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8 h-full">
          <h2 className="text-2xl font-semibold flex justify-center text-center mt-14 lg:hidden">
            Blastocyst Culture And Transfer in Sudha Fertility Centre
          </h2>
          <div className="max-w-6xl text-center">
            <div className="Title">
              <h2 className="text-2xl font-semibold hidden lg:block">
                Blastocyst Culture And Transfer in Sudha Fertility Centre
              </h2>
            </div>
            <div className="Accordian mt-4">
              <p className="text-[#838383] max-w-5xl mx-auto">
                Both IVF and Blastocyst culture treatments may seem similar but
                there is a huge difference in the duration that the embryos are
                cultured before implantation in the uterus. At Sudha Fertility
                Centre, fertility experts follow precise procedures to enhance
                the chances of a successful pregnancy.
              </p>
            </div>
          </div>
          <div className="main flex flex-col md:flex-row mt-8">
            <div className="flex-1 px-4">
              <div>
                <div className="description ">
                  <div className="mt-6 flex items-center gap-4   rounded-lg  hover:bg-[#F0F5FF] cursor-pointer p-5">
                    <span className="text-lg font-semibold bg-[#E7E7E7]  w-10 h-10 p-3 flex items-center justify-center rounded-full">
                      01
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">
                        Egg retrieval and Fertilization
                      </h3>
                      <p className="text-[#838383]">
                        After ovarian stimulation mature eggs are retrieved and
                        fertilized with sperm in the lab, creating embryos the
                        same as the IVF procedure.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-4 p-4 hover:bg-[#F0F5FF] rounded-lg cursor-pointer">
                    <span className="text-lg font-semibold bg-[#E7E7E7] w-10 h-10 flex p-3 items-center justify-center rounded-full">
                      02
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">
                        Extended Culture
                      </h3>
                      <p className="text-[#838383]">
                        The embryos are carefully cultured for 5-6 days,
                        allowing them to develop into blastocysts with advanced
                        cell differentiation, which increases their implantation
                        potential.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-4 p-4 hover:bg-[#F0F5FF] rounded-lg cursor-pointer">
                    <span className="text-lg font-semibold bg-[#E7E7E7] p-3 w-10 h-10 flex items-center justify-center rounded-full">
                      03
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">
                        Blastocyst Selection
                      </h3>
                      <p className="text-[#838383]">
                        Embryologists in Sudha Fertility Centre, closely monitor
                        and select the healthiest blastocyst, which exemplifies
                        strong growth and viability
                      </p>
                    </div>
                  </div>
                  <div className="mt-6  items-center gap-4 p-4 hover:bg-[#F0F5FF] rounded-lg cursor-pointer flex md:hidden">
                <span className="text-lg font-semibold bg-[#E7E7E7] w-10 h-10 p-3 flex items-center justify-center rounded-full">
                  04
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Blastocyst Transfer</h3>
                  <p className="text-[#838383]">
                    Using a thin catheter, the selected blastocyst is
                    transferred into the uterus with ultrasound guidance,
                    ensuring precise placement by the best fertility specialists
                    in India.
                  </p>
                </div>
              </div>
                  <div className="description  p-2 mt-3 px-4 sm:px-6 md:px-8">
                    <p className="text-[#838383]">
                      The good-quality embryos that are not transferred are
                      frozen and stored. Those will be used if the first cycle
                      is not successful
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className=" lg:px-12 flex items-center justify-center mt-6 md:mt-0">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="relative w-full ">
                    <Image
                      src={Microscope}
                      alt="IVF in Sudha Fertility Centre"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6  items-center gap-4 p-4 hover:bg-[#F0F5FF] rounded-lg cursor-pointer hidden md:flex">
                <span className="text-lg font-semibold bg-[#E7E7E7] w-10 h-10 p-3 flex items-center justify-center rounded-full">
                  04
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Blastocyst Transfer</h3>
                  <p className="text-[#838383]">
                    Using a thin catheter, the selected blastocyst is
                    transferred into the uterus with ultrasound guidance,
                    ensuring precise placement by the best fertility specialists
                    in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us for Blastocyst Culture And Transfer */}
      <div className="container mx-auto mt-6 lg:mt-20 relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-10  sm:px-6 lg:px-8 h-full">
          <div className="Title  text-center">
            <h2 className="text-2xl font-semibold">
              Why choose us for Blastocyst Culture And Transfer
            </h2>
            <p className=" mt-2  text-[#838383] max-w-5xl text-center mx-auto">
            With blastocyst transfer, each moment brings your baby closer.
            </p>
          </div>
          <div className="main flex flex-col-reverse md:flex-row mt-5">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full  flex justify-center items-center">
                  <Image src={WhyChoose} alt="About  Blastocyst" className="rounded-2xl" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="description mt-4 text-[#838383]">
                  <p>
                    Equipped with the best fertility doctors in India, Sudha
                    Fertility Centre has delivered 1 lakh+ healthy babies. After
                    conducting tests, our fertility specialists suggest you a
                    personalised treatment plan considering your needs and
                    medical history.
                  </p>
                  <p className="mt-2">
                    Blastocyst Culture and Transfer is often recommended in
                    cases of:
                  </p>

                  <ul className="text-[#838383] space-y-2 px-4 list-disc mt-3">
                    <li>
                      Parents with genetic disorders to avoid passing it on to
                      the baby.{" "}
                    </li>
                    <li>
                      Couple with advanced maternal age to maximise the chances
                      of a successful pregnancy.
                    </li>
                    <li>
                      When multiple embryos are available, this process is used
                      to select the most viable and healthy blastocyst.
                    </li>
                    <li>
                      Couples who have a history of IVF and other fertility
                      treatment failures.{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-[#F0F5FF]">
      <div className="container mx-auto relative   mb-9">
        <div className="max-w-7xl mx-auto px-4 py-10 mt-10 sm:px-6 lg:px-8 h-full">
          <h2 className="text-3xl font-bold text-center mb-12">Facilities</h2>

          {/* Desktop Layout - For Lg screen only */}
          <div className="relative hidden md:flex  2xl:hidden justify-center items-center">
            <div className="flex justify-center items-center gap-12 ">
              <div className="left space-y-5 flex-1">
              {facilities.slice(0,3).map((facility, index) => (
              <div key={index} className="flex justify-center">
                <div className=" rounded-bl-none w-full rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 bg-white">
                  <p className="text-sm font-medium text-gray-800 text-center flex justify-center items-center">
                    {facility.title}
                  </p>
                </div>
              </div>
            ))}
              </div>
          <div className="Image flex justify-center items-center  mb-8 flex-1">
              <div className="relative w-64">
                <Image
                  src={Facilities}
                  alt="Facilities"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            <div className="right space-y-5 flex-1">
              {facilities.slice(3).map((facility, index) => (
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


          <div className="relative hidden 2xl:flex justify-center items-center">
            {/* Center Image */}
            <div className="relative w-96">
              <Image
                src={Facilities}
                alt="Facilities"
                className="w-full h-auto rounded-2xl"
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
                  className="w-full h-auto rounded-2xl"
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
      </div>

      {/* Welcome Your Baby into Your Home */}
      <div className="container mx-auto mt-16 mb-9">
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

      {/* contact  */}
      <ContactForm />

      {/* MarqueeComponent */}
      <section>
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
      </section>
    </>
  );
}

export default Blastocyst;

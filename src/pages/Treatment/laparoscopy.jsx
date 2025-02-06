import React from "react";
import Banner from "@/assets/Treatments/laparoscopy/Banner.webp";
import { MarqueeComponent } from "@/components/marqueeSlider";
import Button from "@/components/button/button";
import About from "@/assets/Treatments/IVF/About.webp";
import Microscope from "@/assets/Treatments/IVF/microscope.webp";
import WhyChoose from "@/assets/Treatments/IVF/WhyChoose.webp";
import ChooseIVF from "@/assets/Treatments/IVF/ChooseIVF.webp";
import Tick from "@/assets/Treatments/IVF/Tick.svg";
import Facilities from "@/assets/Treatments/IVF/Facilities.webp";
import PrepareIVF from "@/assets/Treatments/IVF/PrepareIVF.webp";
import Image from "next/image";
import FAQItem from "@/components/accordion";
import SubBanner from "@/assets/contact-us/SubBanner.webp";
import { Ambattur } from "@/middleware/imagesroute";
import Insta from "@/assets/Home/insta.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import x from "@/assets/Home/x.svg";
import fb from "@/assets/Home/fb.svg";
import { FaYoutube } from "react-icons/fa";
function Laparoscopy() {
  const facilities = [
    {
      title: "World-class laparoscopic surgical equipment",
      position: "left-32 top-10",
      rounded: "rounded-br-none",
    },
    {
      title: "Fully-equipped operating rooms",
      position: "left-24 top-44",
      rounded: "rounded-br-none",
    },
    {
      title: "Dedicated rooms for pre- and post-procedure resting",
      position: "left-1 top-2/4",
      rounded: "rounded-br-none",
    },
    {
      title: "Round-the-clock emergency medical support",
      position: "right-32 top-[70px] ",
      rounded: "rounded-bl-none",
    },
    {
      title: "Hygienic environment",
      position: "right-36 top-[140px]  ",
      rounded: "rounded-bl-none",
    },
    {
      title: "State-of-the-Art Ultrasound Technology",
      position: "-right-6  top-[280px] ",
      rounded: "rounded-bl-none",
    },
  ];

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
                Embrace the power of precision for a healthier tomorrow.
              </h3>
              <h1 className="font-outfit font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-4xl">
                Laparoscopy
              </h1>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AboutAbout Laparoscopy */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h2 className="text-2xl font-semibold flex justify-center text-center lg:hidden">
            About Laparoscopy
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
                    About Laparoscopy
                  </h2>
                </div>
                <div className="description mt-4 text-[#838383]">
                  <p>
                    Laparoscopy is a minimally invasive procedure performed to
                    examine the stomach or pelvis. In this process, a thin
                    lighted tube with a video camera is inserted with a tiny
                    incision into your belly. In fertility treatments,
                    laparoscopy allows to diagnose the fertility problems that
                    are not identified in other tests. Issues like endometriosis
                    and pelvic adhesions can be detected only with the help of
                    surgical observance, done through laparoscopy. It also takes
                    very little time to recover, unlike traditional open
                    surgical procedures.
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

      {/*  Laparoscopy in Sudha Fertility Centre */}
      <div className="container mx-auto relative h-full mt-6 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8 h-full">
          <h2 className="text-2xl font-semibold flex justify-center text-center mt-14 lg:hidden">
            Laparoscopy in Sudha Fertility Centre
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1 px-4">
              <div>
                <div className="Title">
                  <h2 className="text-2xl font-semibold hidden lg:block">
                    Laparoscopy in Sudha Fertility Centre
                  </h2>
                </div>
                <div className="Accordian mt-4">
                  <p className="text-[#838383]">
                    A laparoscopy is performed under general anesthetic, so the
                    patient will be asleep during the procedure and will not
                    feel any pain. Sudha Fertility Centre is well equipped with
                    experienced laparoscopic surgeons to perform this procedure
                  </p>

                  <ul className="text-[#838383] space-y-2 list-inside list-disc mt-3">
                    <li>
                      The surgeon will make a small cut near the belly button of
                      the patient
                    </li>
                    <li>
                      Air will be pumped into the tummy through the cut making
                      it easier for the surgeons to examine the inside of the
                      tummy
                    </li>
                    <li>
                      A laparoscopy which is thin and flexible with a camera
                      inside will be inserted into the cut to make the inside of
                      the tummy visible on screen.{" "}
                    </li>
                    <li>
                      If the patient requires surgery, the surgeon may need to
                      make more small cuts to insert surgical tools
                    </li>
                    <li>
                      After the surgery, the tools and most of the gas will be
                      removed and the incisions will be closed with stitches or
                      surgical tape
                    </li>
                  </ul>

                  <p className="text-[#838383] mt-5">
                    Mostly after laparoscopy surgery, the patient can go home
                    the same day. The surgeons will advise for discharge after
                    monitoring the breathing, heart rates, and prolonged
                    bleeding.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:px-12 flex items-center justify-center mt-6 md:mt-0">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-52 lg:h-96">
                  <Image
                    src={Microscope}
                    alt="IVF in Sudha Fertility Centre"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Why choose us for Laparoscopy?  */}
      <div className="container mx-auto mt-6  relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-10 pb-24 lg:pb-32 sm:px-6 lg:px-8 h-full">
          <div className="Title lg:hidden text-center">
            <h2 className="text-2xl font-semibold">
              {" "}
              Why choose us for Laparoscopy?{" "}
            </h2>
            <h2 className="text-xl mt-2 ">
              Where hope meets expertise—experience the promise of laparoscopy
            </h2>
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
                    Why choose us for Laparoscopy?
                  </h2>
                  <h2 className="text-xl mt-2 ">
                    Where hope meets expertise—experience the promise of
                    laparoscopy
                  </h2>
                </div>
                <div className="description mt-4 text-[#838383]">
                  <p>
                    Being the best fertility hospital in India, Sudha Fertility
                    Centre has performed 1 lakh+ successful laparoscopies with
                    the best surgeons in India. With laparoscopy, our fertility
                    doctors have identified the fertility challenges and helped
                    many couples achieve their dream of parenthood into reality.
                    With the best surgeons, we perform painless laparoscopies,
                    offering
                  </p>
                </div>

                <ul className="text-[#838383] space-y-2 list-inside list-disc mt-3">
                  <li>Minimal scarring</li>
                  <li>Shorter recovery time</li>
                  <li>Precise Diagnosis</li>
                  <li>
                    Faster fertility treatments to increase the chances of
                    conception
                  </li>
                </ul>

                <div className="description mt-4 text-[#838383]">
                  <p>
                    At Sudha Fertility Centre, we combine advanced technology
                    with compassionate care to help you on your path to
                    parenthood.
                  </p>
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
         
      </section>
    </>
  );
}

export default Laparoscopy;

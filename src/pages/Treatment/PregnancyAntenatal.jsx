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
    question:"",
    answer:
    ""
   },
];


function PregnancyAntenatal() {
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
      

      {/* About pregnancy-and-antenatal-care */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
        <div className="mt-5 text-center">
                <div className="Title">
                  <h2 className="text-2xl font-semibold  ">
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
              </div>

              
          <h2 className="text-2xl font-semibold flex justify-center text-center lg:hidden mt-4">
            About IUI
          </h2>
          <div className="main flex flex-col md:flex-row-reverse mt-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Website Visitors
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Like most website operators, Sudha Fertility Centre collects
              non-personally-identifying information of the sort that web
              browsers and servers typically make available, such as the browser
              type, language preference, referring site, and the date and time
              of each visitor request. Sudha Fertility Centre’ purpose in
              collecting non-personally identifying information is to better
              understand how Sudha Fertility Centre’ visitors use its website.
              From time to time, Sudha Fertility Centre may release
              non-personally-identifying information in the aggregate, e.g., by
              publishing a report on trends in the usage of its website.
            </p>
            <p className="mt-5 text-[#838383]">
              Sudha Fertility Centre also collects potentially
              personally-identifying information like Internet Protocol (IP)
              addresses for logged in users and for users leaving comments on
              https://www.sudhafertilitycentre.com/ blog posts. Sudha Fertility
              Centre only discloses logged in user and commenter IP addresses
              under the same circumstances that it uses and discloses
              personally-identifying information as described below.
            </p>
          </div>
        </div>
      </div>



      {/* Nutrition and Lifestyle Guidance */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Website Visitors
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Like most website operators, Sudha Fertility Centre collects
              non-personally-identifying information of the sort that web
              browsers and servers typically make available, such as the browser
              type, language preference, referring site, and the date and time
              of each visitor request. Sudha Fertility Centre’ purpose in
              collecting non-personally identifying information is to better
              understand how Sudha Fertility Centre’ visitors use its website.
              From time to time, Sudha Fertility Centre may release
              non-personally-identifying information in the aggregate, e.g., by
              publishing a report on trends in the usage of its website.
            </p>
            
          </div>
        </div>
      </div>


      {/* High-Risk Pregnancy Care */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Website Visitors
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Like most website operators, Sudha Fertility Centre collects
              non-personally-identifying information of the sort that web
              browsers and servers typically make available, such as the browser
              type, language preference, referring site, and the date and time
              of each visitor request. Sudha Fertility Centre’ purpose in
              collecting non-personally identifying information is to better
              understand how Sudha Fertility Centre’ visitors use its website.
              From time to time, Sudha Fertility Centre may release
              non-personally-identifying information in the aggregate, e.g., by
              publishing a report on trends in the usage of its website.
            </p>
            
          </div>
        </div>
      </div>


      {/* Emotional and Psychological Support */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Website Visitors
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Like most website operators, Sudha Fertility Centre collects
              non-personally-identifying information of the sort that web
              browsers and servers typically make available, such as the browser
              type, language preference, referring site, and the date and time
              of each visitor request. Sudha Fertility Centre’ purpose in
              collecting non-personally identifying information is to better
              understand how Sudha Fertility Centre’ visitors use its website.
              From time to time, Sudha Fertility Centre may release
              non-personally-identifying information in the aggregate, e.g., by
              publishing a report on trends in the usage of its website.
            </p>
            
          </div>
        </div>
      </div>

      {/* Preparing for a Healthy Delivery */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Website Visitors
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Like most website operators, Sudha Fertility Centre collects
              non-personally-identifying information of the sort that web
              browsers and servers typically make available, such as the browser
              type, language preference, referring site, and the date and time
              of each visitor request. Sudha Fertility Centre’ purpose in
              collecting non-personally identifying information is to better
              understand how Sudha Fertility Centre’ visitors use its website.
              From time to time, Sudha Fertility Centre may release
              non-personally-identifying information in the aggregate, e.g., by
              publishing a report on trends in the usage of its website.
            </p>
            
          </div>
        </div>
      </div>


    </>
  );
}

export default PregnancyAntenatal;

"use client"
import Button from "@/components/button/button";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import MetricsTabs from "@/components/ui/tab";
import React, { useState } from "react";

import Tab1 from "@/assets/Home/tab1.webp";
import Tab2 from "@/assets/Home/tab2.webp";
import Tab3 from "@/assets/Home/tab3.webp";
import Tab4 from "@/assets/Home/tab4.webp";
import Tab5 from "@/assets/Home/tab5.webp";
import Icon1 from "@/assets/Home/tab1.svg";
import Icon2 from "@/assets/Home/tab2.svg";
import Icon3 from "@/assets/Home/tab3.svg";
import Icon4 from "@/assets/Home/tab4.svg";
import Icon5 from "@/assets/Home/tab5.svg";
import FAQItem from "@/components/accordion";

function International() {

   const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  const tabs = [
    {
      title: "80% Success Rates",
      label: "80% Success Rates ",
      content: {
        heading: "80% Success Rates",
        description:
          "As the leading fertility hospital in South India, Sudha Fertility Centre serves as a beacon of hope and brings happiness. With the best fertility doctors and world-class fertility treatments, Sudha Fertility Centre has a record of 80% success rate in helping parents achieve the dream of parenthood. With delivering lakhs of healthy babies, we are identified as a renowned IVF hospital in South India offering personalized solutions and treatments for couples trying for pregnancy. From young couples to older couples, we stand with them in every step of their parenthood journey.",
        image: Tab1,
      },
      icon: Icon1,
    },
    {
      title: "Affordable Treatment Cost",
      label: "Affordable Treatment Cost",
      content: {
        heading: "Affordable Treatment Cost",
        description:
          "At Sudha Fertility Centre, we believe that fertility care should be both affordable and of the highest quality. We conduct free medical camps every month to make sure quality treatment reaches everyone. Free consultation and tests are provided at every camp. With affordable treatment costs, we make sure that your dream of parenthood is within reach. Every camp has helped countless people achieve their dreams easily with trusted experts. We cherish and support every parenthood journey. ",
        image: Tab2,
      },
      icon: Icon2,
    },
    {
      title: "People's Most Trusted",
      label: "People's Most Trusted",
      content: {
        heading: "People's Most Trusted",
        description:
          "Sudha Fertility Centre has earned the trust of lakhs of families as South India's best fertility centre. We are happy and blessed to witness the parenthood stories of lakhs of parents. Each review and video we receive always remember our motto of helping couples in their parenthood journey. We are driven by the mission to help couples experience the happiness of parenthood, and dedicated to making it happen. We ensure every couple who visits us receives the best care and starts their journey of parenthood.",
        image: Tab3,
      },
      icon: Icon3,
    },
    {
      title: "40+ Years Of Excellence",
      label: "40+ Years Of Excellence",
      content: {
        heading: "40+ Years Of Excellence",
        description:
          "Sudha Fertility Centre is known as an icon in fertility care with more than 4 decades of excellence in making lakhs of parents' dreams into reality. With experienced Fertility specialists, we offer you the best treatments personalized according to your needs and medical history. With 20+ branches across Tamil Nadu, we ensure that expert fertility care is accessible to all, giving you the support and guidance you need on your parenthood journey",
        image: Tab4,
      },
      icon: Icon4,
    },
    {
      title: "150+ Fertility Specialists",
      label: "150+ Fertility Specialists",
      content: {
        heading: "150+ Fertility Specialists",
        description:
          "With a team of hundreds of experienced fertility experts, Sudha Fertility Centre offers comprehensive and specialized treatments tailored to your needs. Under the guidance of the fertility experts, Dr. S. Dhanabagyam and Dr. S. Pradeepa, our skilled IVF specialists and IUI doctors are dedicated to helping you through every step of your parenthood journey. Supported by the expertise and care of our fertility specialists, lakhs of happy parents have successfully welcomed healthy, beautiful babies into their families. ",
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


          {/* Tab  */}
      <div className="container mx-auto ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              What Makes Sudha Fertility Centre{" "}
              <span className="lg:block">the Best Choice</span>
            </h1>
          </div>
          <div className="tab mt-12">
            <MetricsTabs tabs={tabs} />
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

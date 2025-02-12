"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/assets/Home/Banner.webp";
import Button from "@/components/button/button";
import GoogleReview, {
  InfiniteMovingCardsDemo,
} from "@/components/review_Card/reviewCard";
import Image from "next/image";
import Founder from "@/assets/Home/Founder.webp";
import BookPic from "@/assets/Home/BookPic.webp";
import MetricsTabs from "@/components/ui/tab";
import Vitro from "@/assets/Home/Vitro.svg";
import Intrauterine from "@/assets/Home/Intrauterine.svg";
import Intracytoplasmic from "@/assets/Home/Intracytoplasmic.svg";
import Laser_Assisted from "@/assets/Home/Laser-Assisted.svg";
import Pregnancy from "@/assets/Home/Pregnancy.svg";
import { motion } from "framer-motion";
import Pregnancy_Calculator from "@/assets/Home/Pregnancy-Calculator.svg";
import Ovulation_Calculator from "@/assets/Home/Ovulation-Calculator.svg";
import Period_Calculator from "@/assets/Home/Period-Calculator.svg";
import Pregnancy_Conception from "@/assets/Home/Pregnancy-Conception.svg";
import Pregnancy_DueDate from "@/assets/Home/Pregnancy-DueDate.svg";
import FAQItem from "@/components/accordion";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
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
import { Ambattur } from "@/middleware/imagesroute";
import VideoCard from "@/components/videoCard/videoCard";
import Pradeepa from "@/assets/Home/pradeepa.webp";
import ContactUs from "./contactUs";
import ContactForm from "@/components/contact/contactForm";
import Link from "next/link";
import BookingButton from "@/components/button/bookingButton";

const FAQ = [
  {
    question: "Which is the best fertility centre in South India?",
    answer:
      "Sudha Fertility Centre is considered the best fertility centre in South India, equipped with world-class facilities, state-of-the-art technologies, the best fertility doctors in India, experienced gynecologists, and 22+ branches across South India and Sri Lanka with a high success rate. ",
  },
  {
    question: "Which is the best fertility centre for IVF treatment?",
    answer:
      "With more than 4 decades of experience and expertise in fertility care, Sudha Fertility Centre has delivered more than 1 lakh+ healthy babies, recognizing us as the best IVF centre in India.",
  },
  {
    question: "What is the average cost of fertility treatments?",
    answer:
      "The average cost of fertility treatments varies based on the type of procedure the doctor suggests. At Sudha Fertility Centre, the best fertility hospital in India, we offer affordable and personalized fertility solutions to support your journey toward parenthood with the highest level of care.",
  },
  {
    question: "Which IVF Centre has the highest success rate in Tamil Nadu?",
    answer:
      "With more than 80% success rate in delivering healthy babies, Sudha Fertility Centre is known as the best IVF centre in India, equipped with the best fertility doctors in India and world-class treatments and facilities. ",
  },
  {
    question: "Which hospital has the best IVF Doctors in Tamil Nadu?",
    answer:
      "Sudha Fertility Centre, recognised as the best IVF hospital in India is well-equipped with the best IVF doctors, experienced fertility specialists, and skillful gynecologists. ",
  },
  {
    question:
      "Which Fertility Centre provides world-class fertility treatments?",
    answer:
      "Sudha Fertility Centre is considered the best fertility centre in South India, providing world-class fertility treatments with state-of-the-art technologies, the best fertility doctors in India, experienced gynecologists, and high-tech technologies. ",
  },
  {
    question: "Why choose Sudha Fertility Centre for IVF treatments?",
    answer:
      "Sudha Fertility Centre is renowned as one of the best fertility hospitals providing the best IVF treatments with state-of-the-art facilities, experienced specialists, and personalized care. We blend advanced technology with compassionate support to offer you the best chance of achieving your parenthood goals. ",
  },
  {
    question:
      "What can I expect during my first consultation with a fertility specialist?",
    answer:
      "During your first consultation, fertility specialists will review your medical history, discuss any fertility concerns, and recommend necessary tests. As the best fertility hospital in India, we focus on understanding your unique situation and will explain the best treatment options for you. At Sudha Fertility Centre, we are committed to providing compassionate care, expert guidance, and personalized treatment plans to help you achieve your parenthood dreams.",
  },
  {
    question: "Does Sudha Fertility Centre provide free fertility camps?",
    answer:
      "Yes, Sudha Fertility Centre conducts free fertility camps every month all over South India, ensuring our world-class fertility treatment is accessible to everyone. You can know the updates about our free medical camps on our social media platforms.",
  },
  {
    question: "How do you start fertility treatment at Sudha Fertility Centre?",
    answer:
      "To start fertility treatment at Sudha Fertility Centre, visit your nearest Sudha branch or book an appointment by messaging our WhatsApp or calling our helpline number 7670076006. ",
  },
  {
    question: "Is there any protocol to start a fertility treatment?",
    answer:
      "At Sudha Fertility Centre, the process begins with a thorough assessment, including medical history, physical exams, and fertility tests for both partners. Based on the results, your fertility specialist will develop a personalized treatment plan. The protocol may involve lifestyle changes, medications, or assisted reproductive technologies like IVF,  IUI, etc. Throughout the journey, we provide expert guidance, care, and support to ensure the best possible outcome.",
  },
  {
    question: "When is the right time to start fertility treatment?",
    answer:
      "It’s advisable to consult the best fertility hospital if you have been trying to conceive for over a year without success or if you have known reproductive health issues. Sudha Fertility Centre, recognized as one of the best fertility centres, offers comprehensive consultations to evaluate your fertility and discuss tailored treatment options. Our expert team provides personalized care to help you navigate your fertility journey and achieve your parenthood goals. ",
  },
];

function Home() {
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
      setVisibleCount(FAQ.length); // Show all FAQs
      setShowAll(true); // Properly toggle state
    }
  };

  const testimonials = [
    {
      image: Founder,
      text: "The journey of Sudha Fertility Centre started with an empathetic mission to help couples achieve their dream of parenthood. The vision of Dr. S. Dhanabagyam, the founder, was shaped by a heart-wrenching and life-changing experience. While performing a postmortem on a woman who had tragically taken her own life due to the immense societal pressure of not having children, Dr. Dhanabagyam was profoundly moved. This sorrowful event sparked her determination to make a difference in the lives of couples facing infertility. It led her to establish the Sudha Fertility Centre.Dr. S. Pradeepa, Vice President of Sudha Fertility Centre, has been an integral part of the IVF team that achieved the remarkable milestone of delivering 26 IVF babies in a single day. Her dedication and expertise have been instrumental in expanding Sudha Fertility Centre, leading to the establishment of multiple branches across Tamil Nadu. She has actively organized prestigious medical conferences, including CME Coimbatore (2013) and the 3rd International Live 3D Laparoscopic Workshop, Erode (2014). She was also part of the organizing committee for INFERTICON 2016 and served as Organizing Secretary for FETOCARE 2016, focusing on infertility, fetal medicine, and high-risk pregnancy.",
      author: "- Mrs Nagalakshi & Mr Anjineyalu.",
    },
    {
      image: Pradeepa,
      text: "Dr. S. Pradeepa, Vice President of Sudha Fertility Centre, has been an integral part of the IVF team that achieved the remarkable milestone of delivering 26 IVF babies in a single day. Her dedication and expertise have been instrumental in expanding Sudha Fertility Centre, leading to the establishment of multiple branches across Tamil Nadu. She has actively organized prestigious medical conferences, including CME Coimbatore (2013) and the 3rd International Live 3D Laparoscopic Workshop, Erode (2014). She was also part of the organizing committee for INFERTICON 2016 and served as Organizing Secretary for FETOCARE 2016, focusing on infertility, fetal medicine, and high-risk pregnancy.",
      author: "- Mrs Priya & Mr Ramesh.",
    },
  ];

  const tabs = [
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
      title: "Trusted by 1 Lakh+",
      label: "Trusted by 1 Lakh+",
      content: {
        heading: "Trusted by 1 Lakh+",
        description:
          "Sudha Fertility Centre has earned the trust of lakhs of families as South India's best fertility centre. We are happy and blessed to witness the parenthood stories of lakhs of parents. Each review and video we receive always remember our motto of helping couples in their parenthood journey. We are driven by the mission to help couples experience the happiness of parenthood, and dedicated to making it happen. We ensure every couple who visits us receives the best care and starts their journey of parenthood.",
        image: Tab3,
      },
      icon: Icon3,
    },
    {
      title: "High Success Rate",
      label: "High Success Rate ",
      content: {
        heading: "High Success Rate",
        description:
          "As the leading fertility hospital in South India, Sudha Fertility Centre serves as a beacon of hope and brings happiness. With the best fertility doctors and world-class fertility treatments, Sudha Fertility Centre has a record of high success rate in helping parents achieve the dream of parenthood. With delivering lakhs of healthy babies, we are identified as a renowned IVF hospital in South India offering personalized solutions and treatments for couples trying for pregnancy. From young couples to older couples, we stand with them in every step of their parenthood journey.",
        image: Tab1,
      },
      icon: Icon1,
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

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 6000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);
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
              <h2 className="text-[#FFC65C] font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                "Cherish the Boon of Motherhood"
              </h2>
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3">
                Turning Dreams of Parenthood
                <br />
                into Reality for 40 Years.
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
                "Join the 1,50,000+ Families who have
                <br />
                Overcome Infertility"
              </p>
              <div className="mt-6 flex justify-center">
                <BookingButton title="Book Your Free Appointment" />
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
          <div className="main flex flex-col lg:flex-row mt-9 mb-9">
            {/* Image */}
            <div className="image w-full lg:w-1/2">
              <motion.div
                key={index} // Key change triggers animation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={testimonials[index].image}
                  alt="Founder"
                  className="rounded-xl "
                />
              </motion.div>
            </div>

            {/* Description */}
            <div className="description w-full lg:w-1/2 px-3 lg:mt-0 relative">
              {" "}
              {/* Add relative positioning here */}
              <div className="content shadow-xl p-7 rounded-xl font-outfit">
                <motion.p
                  
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-[#838383]"
                >
                  Sudha Fertility Centre began with a compassionate mission to help couples achieve parenthood. Dr. S. Dhanabagyam was deeply moved by a tragic experience—performing a postmortem on a woman who took her own life due to infertility stigma. This inspired her to establish the Sudha Fertility Centre. Our Vice President Dr. S. Pradeepa has been a strong pillar of support, and together, their efforts have led to the expansion of multiple branches across South India, Bangladesh and Sri Lanka. Sudha has also achieved the remarkable milestone of delivering 26 IVF babies in a single day.
 
                </motion.p>

              
              </div>
              {/* Make sure button stays fixed at the bottom */}
              <div className="absolute bottom-8 right-4  justify-center mt-4 hidden xl:flex">
                {" "}
                {/* Adjust positioning */}
                <Button title={"Learn More"} link="/about-us" />
              </div>
              <div className="flex justify-center xl:hidden mt-3">
                <Button title={"Learn More"} link="/about-us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes Sudha Fertility Centre  the Best Choice */}
      <div className="container mx-auto ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              What Makes Sudha Fertility Centre{" "}
              <span className="lg:bock">the Best Choice</span>
            </h1>
          </div>
          <div className="tab mt-12">
            <MetricsTabs tabs={tabs} />
          </div>
        </div>
      </div>

      {/* Advanced Fertility Treatments at Sudha Fertility Centre */}
      <div className="container mx-auto ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Advanced Fertility Treatments at{" "}
              <span className="lg:block"> Sudha Fertility Centre</span>
            </h1>

            <p className="max-w-5xl flex mx-auto mt-5 text-[#838383]">
              Start your parenthood journey with India’s leading fertility
              specialists. With decades of expertise and world-class treatments,
              we provide personalized care that supports your dreams and guides
              you through every step of the way.
            </p>
          </div>

          <div>
            <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5   gap-6  mt-9">
              <div className="tiles-1 border border-[#E7E7E7] p-4 rounded-2xl font-outfit hover:bg-[#EBF2FE] cursor-pointer">
               <Link href={"/in-vitro-fertilization"}>
               <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="image flex justify-center">
                      <Image src={Vitro} alt="In Vitro Fertilization" />
                    </div>
                    <div className="des mt-4 ">
                      <p className="text-[#838383] text-center">
                        In Vitro Fertilization
                      </p>

                      <p className="text-[#838383] text-center mt-2 font-bold">( IVF )</p>
                    </div>
                  </div>
                </div>
               </Link>
              </div>

              <div className="tiles-1 border border-[#E7E7E7] p-4 rounded-2xl hover:bg-[#EBF2FE] cursor-pointer">
              <Link href={"/intrauterine-insemination"}>
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <div className="image flex justify-center">
                        <Image
                          src={Intrauterine}
                          alt=" Intrauterine insemination "
                        />
                      </div>
                    </div>
                    <div className="des mt-4 ">
                      <p className="text-[#838383] text-center">
                        Intrauterine insemination
                      </p>
                      <p className="text-[#838383] text-center mt-2 font-bold">( IUI )</p>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-2xl hover:bg-[#EBF2FE] cursor-pointer">
                <Link href={'/intracytoplasmic-sperm-injection'} >
                <div className="main-tail flex items-center justify-center ">
                  <div className="content">
                    <div className="title">
                      <div className="image flex justify-center">
                        <Image
                          src={Intracytoplasmic}
                          alt="Intracytoplasmic Sperm Injection"
                        />
                      </div>
                    </div>
                    <div className="des mt-4">
                      <p className="text-[#838383] text-center">
                        Intracytoplasmic Sperm Injection
                      </p>
                      <p className="text-[#838383] text-center mt-2 font-bold">( ICSI )</p>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-2xl hover:bg-[#EBF2FE] cursor-pointer">
                <Link href={'/pcos-and-pdoc'}>
                <div className="main-tail flex items-center justify-center">
                  <div className="content text-cente">
                    <div className="title">
                      <div className="image flex justify-center">
                        <Image
                          src={Laser_Assisted}
                          alt="pcos-and-pdoc"
                        />
                      </div>
                    </div>
                    <div className="des mt-4">
                      <p className="text-[#838383] text-center">
                      PCOS/PCOD
                      </p>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-2xl hover:bg-[#EBF2FE] cursor-pointer">
                <Link href={'/pregnancy-and-antenatal-care'}>
                <div className="main-tail flex items-center justify-center">
                  <div className="content text-center">
                    <div className="title">
                      <div className="image flex justify-center">
                        <Image
                          src={Pregnancy}
                          alt="Pregnancy and Antenatal Care"
                        />
                      </div>
                    </div>
                    <div className="des mt-4">
                      <p className="text-[#838383] text-center">
                        Pregnancy and Antenatal Care
                      </p>
                    </div>
                  </div>
                </div>
                </Link> 
              </div>

              <div className="tiles-1 flex items-center justify-center">
                <div className="main-tailflex items-center justify-center ">
                  <div className="content  flex justify-center items-center ">
                    <div className="title">
                      <div className="button flex items-center justify-center lg:hidden">
                        <Button title={"View More"}  link="/treatment" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button hidden lg:flex justify-center mt-8">
              <Button title={"View All Treatments"} link="/treatment" />
            </div>
          </div>
        </div>
      </div>

      {/* Bring your little one home and start the adventure of parenthood */}
      <div className="container mx-auto mt-6">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row shadow-2xl px-7 p-3 items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="content  flex-1 text-center lg:text-left">
              <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                Bring your little one home and start the adventure of parenthood
              </h1>
            </div>

            <div className="flex flex-col items-center  space-y-4 lg:space-y-0 lg:items-start">
              <div className="image">
                <Image src={BookPic} alt="Book Image" className="max-w-full" />
              </div>
            </div>
            <div className="button">
            <BookingButton title={"Book Your Free Appointment"} />
            </div>
          </div>
        </div>
      </div>

      {/* Make Pregnancy Planning Simple and Confident with Our Calculator Tools */}
      <div className="container mx-auto mt-8">
        <div className="max-w-7xl mx-auto px-3 py-12 sm:px-6 lg:px-8">
          <div className="main-box">
            <div className="flex flex-col lg:flex-row p-4 lg:pb-0 lg:p-7 border rounded-3xl">
              {/* Left Section */}
              <div className="left px-3 flex-1">
                <div className="content h-auto lg:h-72 flex flex-col justify-center items-center text-center lg:text-left">
                  <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                    Plan your pregnancy with our highly efficient Tools
                  </h1>
                  <p className="text-[#838383] mt-5">
                    Planning your pregnancy should feel empowering, not
                    overwhelming. Use our Pregnancy calculator to track your
                    fertility cycle and plan for conception at the optimal time.
                    Make your journey to parenthood stress-free.
                  </p>
                </div>
                <div className="button mt-5 flex justify-center lg:justify-start">
                  <Button title={"Check Now"} />
                </div>
              </div>

              {/* Right Section */}
              <div className="h-[] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>

              <div className="right flex-1 flex justify-center items-center px-3">
                <div className="tiles grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:gap-8 xl mt-9">
                  <Link href={'/free-online-pregnancy-calculator'}>
                  <div className="tiles-1 flex flex-col items-center justify-center text-center hover:bg-[#EBF2FE] rounded-2xl p-5 cursor-pointer">
                    <div className="title mb-3">
                      <Image
                        src={Pregnancy_Calculator}
                        alt="Pregnancy Calculator"
                        className="mx-auto"
                      />
                    </div>
                    <div className="des">
                      <p className="text-[#838383]">Pregnancy Calculator</p>
                    </div>
                  </div>
                  </Link>

                  <Link href={'/free-ovulation-calculator'}>   
                  <div className="tiles-1 flex flex-col items-center justify-center text-center hover:bg-[#EBF2FE] rounded-2xl p-5 cursor-pointer">
                    <div className="title mb-3">
                      <Image
                        src={Ovulation_Calculator}
                        alt="Ovulation Calculator"
                        className="mx-auto"
                      />
                    </div>
                    <div className="des">
                      <p className="text-[#838383]">Ovulation Calculator</p>
                    </div>
                  </div>
                  </Link>

                    <Link href={'/free-menstrual-cycle-calculator'}>
                  <div className="tiles-1 flex flex-col items-center justify-center text-center hover:bg-[#EBF2FE] rounded-2xl p-5 cursor-pointer">
                    <div className="title mb-3">
                      <Image
                        src={Period_Calculator}
                        alt="Period Calculator"
                        className="mx-auto"
                      />
                    </div>
                    <div className="des">
                      <p className="text-[#838383]">Period Calculator</p>
                    </div>
                  </div>
                    </Link>

                  <Link href={'/free-conception-calculator'}>
                  <div className="tiles-1 flex flex-col items-center justify-center text-center px-3 hover:bg-[#EBF2FE] rounded-2xl p-5 cursor-pointer">
                    <div className="title mb-3">
                      <Image
                        src={Pregnancy_Conception}
                        alt="Pregnancy Conception Calculator"
                        className="mx-auto"
                      />
                    </div>
                    <div className="des">
                      <p className="text-[#838383]">
                        Pregnancy Conception <br /> Calculator
                      </p>
                    </div>
                  </div>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIdeo section  */}
      <div className="bg-[#EBF2FE]">
        <div className="container mx-auto ">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="title text-center">
              <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl ">
                Turning Dreams into Reality: Witness the Joy of Parenthood with
                Sudha Fertility Centre, {" "}
                <span className="lg:bock">the Best Choice</span>
              </h1>

              <p className="text-[#838383] text-center ">
                Behind every testimonial is a journey filled with hope, trust,
                and perseverance. Hearing this happiness is what drives us. All
                the tears, years, fears and prayers have been answered. Listen
                to the happy stories of the couples welcoming their love of life
              </p>
            </div>
            <div className="tab mt-12">
              <VideoCard tabs={tabs} />
            </div>
          </div>
        </div>
      </div>

      {/* Turning Dreams into Reality: Witness the Joy of Parenthood  with Sudha Fertility Centre. */}
      <div className="bg-[#DDE9FD] hidden">
        <div className="container mx-auto relative h-full">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
            <div className="title text-center">
              <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                Turning Dreams into Reality: Witness the Joy of Parenthood
                <span className="lg:block"> with Sudha Fertility Centre.</span>
              </h1>

              <p className="max-w-5xl flex mx-auto mt-5 text-[#353535]">
                Behind every testimonial is a journey filled with hope, trust,
                and perseverance. Hearing this happiness is what drives us. All
                the tears, years, fears and prayers have been answered. Listen
                to the happy stories of the couples welcoming their love of life
              </p>
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

      <ContactForm />

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
              <Button title="View on YouTube" link="https://www.youtube.com/@sudhafertilitycentre" icon={<FaYoutube />} />
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

export default Home;

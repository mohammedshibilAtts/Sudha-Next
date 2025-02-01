"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utility";
import Button from "../button/button";
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
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const MetricsTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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

  // Observer for tab section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setSelectedTab(0);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative xl:bg-[#EBF2FE] rounded-2xl" ref={containerRef} >
      <div className="max-w-7xl mx-auto p-2 xl:p-9 font-outfit">
      <motion.div
        className="flex overflow-x-auto no-scrollbar p-3 mb-8 xl:flex-wrap xl:justify-center bg-slate-100 xl:bg-white rounded-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={cn(
              "px-3 py-4 rounded-full font-medium transition-all flex items-center gap-1 group whitespace-nowrap flex-shrink-0",
              "mr-2 last:mr-0", // Add margin between items except last one
              index === selectedTab
                ? "bg-[#173366] text-white"
                : "text-[#173366] hover:bg-[#173366] hover:text-white"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={tab.icon}
              alt="icon"
              className="w-5 h-5 group-hover:invert"
              style={{
                filter: index === selectedTab ? "invert(1)" : "",
              }}
            />
            {tab.label}
          </motion.button>
        ))}
      </motion.div>

        {/* Content Section with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#EBF2FE] xl:bg-transparent rounded-3xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 md:flex-col-reverse gap-8">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold">
                  {tabs[selectedTab].content.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {tabs[selectedTab].content.description}
                </p>
                <Button title={"Get A Free Consultation"} />
              </motion.div>

              <motion.div
                className="relative w-full  h-[420px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="rounded-3xl overflow-hidden h-full mb-9">
                  <Image
                    src={tabs[selectedTab].content.image}
                    alt={tabs[selectedTab].content.heading}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MetricsTabs;

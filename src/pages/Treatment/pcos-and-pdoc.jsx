"use client"
import Button from "@/components/button/button";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/PcosAndPdoc/Banner.webp";
import About from "@/assets/Treatments/PcosAndPdoc/About.webp";
import subAbout from "@/assets/Treatments/PcosAndPdoc/SubAbout.webp";
import Symptoms from "@/assets/Treatments/PcosAndPdoc/Symptoms.webp";
import Diagnosis from "@/assets/Treatments/PcosAndPdoc/Diagnosis.webp";
import Treatment from "@/assets/Treatments/PcosAndPdoc/Treatment.webp";
import SYNDROME from "@/assets/Treatments/PcosAndPdoc/SYNDROME.webp";
import Disease from "@/assets/Treatments/PcosAndPdoc/Disease.webp";
import WhyChoose from "@/assets/Treatments/IVF/WhyChoose.webp";
import Image from "next/image";
import Tick from "@/assets/Treatments/IVF/Tick.svg";
import FAQItem from "@/components/accordion";

const FAQ = [
  {
    question: "Does hormonal imbalance affect PCOS/PCOD?",
    answer: "Yes, hormonal imbalance is a key factor in conditions like PCOS or PCOD. In PCOS/PCOD, an imbalance of hormones such as insulin, estrogen, and progesterone can lead to irregular menstrual cycles, ovulation issues, and other symptoms. At Sudha Fertility Centre, we offer specialised care to manage hormonal imbalances and help women with PCOS/PCOD achieve their fertility goals.",
  },
  {
    question: "What is polycystic ovarian syndrome?",
    answer: "Polycystic Ovarian Syndrome (PCOS) is a condition where the ovaries produce excess male hormones, affecting the menstrual cycle and ovulation. Sudha Fertility Centre, the best fertility centre in India, provides effective treatments for treating PCOS with the best fertility specialists in India.",
  },
  {
    question: "Does PCOS/PCOD affect female fertility?",
    answer: "Yes, PCOS/PCOD can lead to infertility by disrupting the menstrual cycle and ovulation, making it more difficult to conceive. However, with proper treatment and management, many women with PCOS/PCOD can achieve pregnancy. At Sudha Fertility Centre, we provide tailored treatment options to help manage PCOS/PCOD and enhance fertility.",
  },
  {
    question: "Can PCOS be cured?",
    answer: "PCOS can be effectively managed with lifestyle changes and medical treatments. Managing symptoms like irregular periods, hormonal imbalances, and infertility is possible through medication, weight management, and other therapies. As the best fertility centre, Sudha Fertility Centre offers personalised treatment plans to help manage PCOS and improve fertility outcomes, enabling women to live healthier, more balanced lives.",
  },
  {
    question: "How to cure PCOS permanently?",
    answer: "There is no permanent cure for PCOS, but symptoms can be managed with lifestyle changes and medical treatments. Weight management, a balanced diet, exercise, and medications can help control symptoms and improve fertility. At Sudha Fertility Centre, we offer personalised care to manage PCOS effectively.",
  },
  {
    question: "Do irregular or heavy menstrual periods mean PCOS/PCOD?",
    answer: "Irregular or heavy menstrual periods don’t mean PCOS/PCOD, but for some women, it might be a symptom of PCOS/PCOD. Other factors like stress, thyroid imbalances, or other hormonal issues can also cause similar symptoms. As the best fertility centre in India, Sudha Fertility Centre offers diagnostic tests to confirm PCOS and treat them with personalised care.",
  },
  {
    question: "Which medical test confirms PCOS/PCOD?",
    answer: "A pelvic ultrasound, blood tests for hormone levels, and a physical exam help confirm PCOS/PCOD. Sudha Fertility Centre, the best fertility centre in India, provides thorough diagnostic services to accurately diagnose PCOS.",
  },
  {
    question: "Is PCOS/PCOD a serious problem?",
    answer: "PCOS/PCOD can be a serious condition if left unmanaged, as it can lead to complications like infertility, diabetes, heart disease, and endometrial cancer. However, with early diagnosis and proper management, most women can lead healthy lives. As the best fertility centre in India, Sudha Fertility Centre offers personalised treatment plans to manage PCOS/PCOD and improve overall health and fertility.",
  },
  {
    question: "Can I have PCOS with regular periods?",
    answer: "Yes, it is possible to have PCOS (Polycystic Ovary Syndrome) even with regular periods. PCOS symptoms can vary widely, and some women may experience regular cycles while still having other signs like ovarian cysts, hormonal imbalances, or difficulty conceiving. If you suspect you have PCOS, consult a fertility specialist at Sudha Fertility Centre, the best fertility centre in India, for an accurate diagnosis and appropriate treatment.",
  },
  {
    question: "What is the best age to get pregnant with PCOS?",
    answer: "The best age to get pregnant with PCOS (Polycystic Ovary Syndrome) is typically in your 20s or early 30s, as fertility tends to decline with age. However, many women with PCOS can conceive successfully at any age with the right treatment and care. If you're struggling with fertility due to PCOS, consult with a specialist at Sudha Fertility Centre, the best fertility centre in India, for personalised guidance and treatment options to enhance your chances of pregnancy.",
  },
  {
    question: "Can I conceive with PCOS?",
    answer: "Yes, many women with PCOS can conceive with the right treatment and care. While PCOS can affect ovulation and make conception more challenging, various treatments, including medication, lifestyle changes, and assisted reproductive techniques, can help improve fertility. At Sudha Fertility Centre, the best fertility centre in India, we provide personalised care and effective solutions to help women with PCOS achieve their pregnancy goals.",
  },
  {
    question: "Can pregnancy with PCOS affect the baby?",
    answer: "With the right care and treatment, women with PCOS (Polycystic Ovary Syndrome) can have a healthy pregnancy and baby. While PCOS may increase the risk of certain complications like gestational diabetes or preeclampsia, these risks can be managed effectively with regular monitoring and medical support. At Sudha Fertility Centre, the best fertility centre in India, we provide personalised care to ensure the best outcomes for both mother and baby.",
  },
];
function PcosAndPdoc() {
  const Causes = [
    "Irregular menstrual cycle",
    "Absence of menstruation",
    "Weight gain",
    "Acne",
    "Excessive hair growth",
    "Heavy menstrual bleeding",
    "Skin darkening",
    "Hair loss",
    "Excess insulin production",
    "Excess androgen production",
    "Heredity condition",
    
  ];

  const SYNDROMEData = [
    "Heart diseases",
    "Miscarriage",
    "Gestational diabetes",
    "Preeclampsia",
    "Preterm birth",
    "Newborn in NICU",
    "Stillbirth",
    "Need of C-section",
  ];

  const DiseaseData = [
    "Difficulty getting pregnant",
    "Swelling in ovaries",
    "Male-pattern hair loss",
    "Abdominal weight gain",
    "Irregular menstrual cycle",
    "Infertility",
  ];

   const [visibleCount, setVisibleCount] = useState(5);
    const [faqIndex, setFaqIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);
  
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
                Let us help you overcome the challenges of PCOS/PCOD
              </h1>
              <h3 className="mt-3 max-w-3xl font-outfit  text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                Comprehensive treatments for PCOS/PCOD.
              </h3>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Polycystic Ovarian Syndrome (PCOS): */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h1 className="text-2xl font-semibold flex justify-center text-center lg:hidden">
            Understanding PCOS/PCOD
          </h1>
          <h2 className="text-xl font-semibold flex justify-center text-center lg:hidden">
            Polycystic Ovarian Syndrome (PCOS)
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
                  <h1 className="text-2xl font-semibold flex justify-center  lg:block mb-5">
                    Understanding PCOS/PCOD
                  </h1>
                  <h2 className="text-xl font-semibold hidden lg:block">
                    Polycystic Ovarian Syndrome (PCOS):
                  </h2>
                </div>
                <div className="description mt-4 text-[#838383]">
                  <p>
                    PCOS is a medical condition in which the woman’s body
                    produces a high number of male hormones (androgen). This
                    affects the menstrual cycle, it may be irregular, last for a
                    long number of days, or may not menstruate for a long time.
                    PCOS affects an estimated 8 - 13% of reproductive-aged
                    women.
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

      {/*  Polycystic Ovarian Disease (PCOD): */}
      <div className="container mx-auto relative h-full mt-6 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8 h-full">
          <h2 className="text-2xl font-semibold flex justify-center text-center mt-14 lg:hidden">
            Polycystic Ovarian Disease (PCOD):
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1 px-4">
              <div>
                <div className="Title">
                  <h2 className="text-2xl font-semibold hidden lg:block">
                    Polycystic Ovarian Disease (PCOD):
                  </h2>
                </div>
                <div className="Accordian mt-4">
                  <p className="text-[#838383]">
                    PCOD is a condition in which ovaries release immature or
                    partially mature eggs, which may develop as cysts in
                    ovaries. This is caused by hormonal imbalance, and also
                    genetics could be a cause. One-third of all menstruating
                    women are affected by PCOD around the globe.
                  </p>
                  <p className="text-[#838383] mt-3">
                    oth PCOS and PCOD can affect women’s fertility, leaving it
                    untreated may increase the chances of risk in conception.
                    It’s important to understand the symptoms and treat them in
                    the earlier stages. Women can develop this condition at any
                    age after puberty, but most of them find out they have this
                    condition in their mid-20s and 30s.
                  </p>

                  <p className="text-[#838383] mt-3">
                    In the initial stages of these conditions, it is easy to
                    treat them, leaving them undiagnosed and untreated can
                    increase the complications of
                  </p>

                  <ul className="text-[#838383] space-y-2 list-inside list-disc mt-3">
                    <li>cyst formation </li>
                    <li>high blood pressure</li>
                    <li>diabetes, obesity</li>
                    <li>Even cancers in the uterus.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:px-12 flex items-center justify-center mt-6 md:mt-0">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-52 lg:h-96">
                  <Image
                    src={subAbout}
                    alt="IVF in Sudha Fertility Centre"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="description rounded-lg p-2  mt-2">
            <p className="text-[#838383]">
              Most of the women with PCOS and PCOD problems face difficulty in
              getting pregnant
            </p>

            <p className="text-[#838383] mt-2">
              Sudha Fertility Centre provides the best PCOD or PCOS treatment in
              India, with the best fertility experts in India. As the best
              fertility centre in India, we stand with you and help you overcome
              the challenges of PCOS/PCOD
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Sudha For PCOS & PCOD Treatments? */}

      <div className="container mx-auto mt-6 relative h-full bg-[#F0F5FF]">
        <div className="max-w-7xl mx-auto px-4 py-10 pb-24 lg:pb-32 sm:px-6 lg:px-8 h-full">
          <div className="Title lg:hidden text-center">
            <h2 className="text-2xl font-semibold">
              {" "}
              Why Choose Sudha For PCOS & PCOD Treatments
            </h2>
          </div>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96 mt-4">
                  <Image src={WhyChoose} alt="About IUI" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title hidden lg:block">
                  <h2 className="text-2xl font-semibold">
                    Why Choose Sudha For PCOS & PCOD Treatments
                  </h2>
                </div>
                <div className="description mt-4 text-[#838383]">
                  <p>
                    As the best fertility centre in India, Sudha Fertility
                    Centre provides exceptional treatments for PCOS/PCOD in
                    India with the best fertility experts. Our doctors examine
                    you thoroughly and provide you with the right treatments. We
                    help you nurture your reproductive health in the hands of
                    expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h2 className="text-2xl font-semibold flex justify-center text-center mb-5">
          Symptoms and Treatment
          </h2>
          <div className="main flex flex-col-reverse lg:flex-row mt-6">
            <div className="flex-1  items-center px-4">
              <div className="title">
                <h2 className="text-2xl font-semibold text-center ">
                  Causes & Symptoms
                </h2>
              </div>
              <div className="flex flex-col-reverse lg:flex-row">
                {/* Do's Section */}
                <div className="do flex-1">
                  <div className="heading"></div>
                  <div className="pt-6 flex">
                    <div className="space-y-4">
                      {Causes.slice(0, 6).map((item, index) => (
                        <div key={index} className="flex items-start lg:gap-4">
                          <div className="flex-shrink-0 w-6 h-6">
                            <Image src={Tick} alt="Tick" />
                          </div>
                          <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4 ms-8 flex-1">
                      {Causes.slice(6).map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-6 h-6">
                            <Image src={Tick} alt="Tick" />
                          </div>
                          <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Vertical Divider */}
              </div>
            </div>

            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image src={Symptoms} alt="About IUI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <div className="main flex flex-col-reverse lg:flex-row">
            <div className="flex-1 lg:px-12 py-3   flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image src={Diagnosis} alt="Diagnosis" />
                </div>
              </div>
            </div>

            <div className="flex-1  items-center px-4  ">
              <div className="title">
                <h2 className="text-2xl font-semibold ms-2">Diagnosis:</h2>
              </div>
              <div className="flex flex-col ">
                {/* Do's Section */}
                <div className="do flex-1">
                  <div className="heading"></div>
                  <div className="pt-6 flex">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Medical history review (menstrual irregularities,
                          weight gain, acne, hirsutism)
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Transvaginal ultrasound to check for ovarian cysts.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Blood tests to assess hormone levels (androgens,
                          insulin, LH/FSH ratio).
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Physical examination for symptoms like excess hair
                          growth or skin changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Vertical Divider */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <div className="main flex flex-col lg:flex-row">
            <div className="flex-1  items-center px-4  ">
              <div className="title mt-4">
                <h2 className="text-2xl font-semibold ms-2">Treatment:</h2>
              </div>
              <div className="flex flex-col ">
                {/* Do's Section */}
                <div className="do flex-1">
                  <div className="heading"></div>
                  <div className="pt-6 flex">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          A balanced diet and regular exercise to manage insulin
                          resistance and weight.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Birth control pills, Metformin, anti-androgens, and
                          ovulation stimulants.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Ovulation induction with fertility drugs or IVF for
                          unresponsive cases.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Ovarian drilling to restore ovulation in some cases
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Therapy or support groups to manage emotional
                          challenges
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:px-12 py-3   flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image src={Treatment} alt="Diagnosis" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full mt-16">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h2 className="text-2xl font-semibold text-center ">
            {" "}
            How does PCOS & PCOD Affect Women’s Health?
          </h2>
          <div className="main flex flex-col-reverse lg:flex-row py-7 mt-8">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image src={SYNDROME} alt="About IUI" />
                </div>
              </div>
            </div>

            <div className="flex-1  items-center px-4">
              <div className="title">
                <h2 className="text-2xl font-semibold  ">PCOS</h2>
              </div>
              <div className="flex flex-col-reverse lg:flex-row">
                {/* Do's Section */}
                <div className="do flex-1">
                  <div className="heading"></div>
                  <div className="pt-6 flex">
                    <div className="space-y-4">
                      {SYNDROMEData.slice(0, 4).map((item, index) => (
                        <div key={index} className="flex items-start lg:gap-4">
                          <div className="flex-shrink-0 w-6 h-6">
                            <Image src={Tick} alt="Tick" />
                          </div>
                          <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4 ms-8 flex-1">
                      {SYNDROMEData.slice(4).map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-6 h-6">
                            <Image src={Tick} alt="Tick" />
                          </div>
                          <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Vertical Divider */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 h-full">
          <div className="main flex flex-col-reverse lg:flex-row ">
            <div className="flex-1  items-center px-4">
              <div className="title">
                <h2 className="text-2xl font-semibold  ">Causes & symptoms</h2>
              </div>
              <div className="flex flex-col-reverse lg:flex-row">
                {/* Do's Section */}
                <div className="do flex-1">
                  <div className="heading"></div>
                  <div className="pt-6 flex">
                    <div className="space-y-4">
                      {DiseaseData.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex items-start lg:gap-4">
                          <div className="flex-shrink-0 w-6 h-6">
                            <Image src={Tick} alt="Tick" />
                          </div>
                          <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4 ms-8 flex-1">
                      {DiseaseData.slice(3).map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-6 h-6">
                            <Image src={Tick} alt="Tick" />
                          </div>
                          <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Vertical Divider */}
              </div>
            </div>

            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image src={Disease} alt="About IUI" />
                </div>
              </div>
            </div>
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
    </>
  );
}

export default PcosAndPdoc;

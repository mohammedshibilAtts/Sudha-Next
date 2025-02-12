"use client";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/Male/Banner.webp";
import Button from "@/components/button";
import { motion } from "framer-motion";
import Card from "@/components/card";
import FAQItem from "@/components/accordion";
import { Ambattur } from "@/middleware/imagesroute";
import fb from "@/assets/Home/fb.svg";
import x from "@/assets/Home/x.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import Insta from "@/assets/Home/insta.svg";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { MarqueeComponent } from "@/components/marqueeSlider";

function MaleInfertility() {
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
      setVisibleCount(faqs.length); // Show all FAQs
      setShowAll(true); // Properly toggle state
    }
  };
  const cards = [
    {
      id: 1,
      title: "Sperm Disorders ",
      content:
        "The inability of male sperm to fertilize an egg is called male infertility. As a result, it becomes difficult to get pregnant. There are several causes of male infertility, but the most common causes of male infertility are sperm-related factors.",
    },

    {
      id: 2,
      title: "Varicocele  ",
      content:
        "Most men with varicoceles do not have fertility problems. However, individuals with varicoceles have a higher rate of infertility than those without varicoceles. This difference may be due to the varicocele, which prevents the body from producing and storing sperm. ",
    },

    {
      id: 3,
      title: "Genetic Disorders Infertility ",
      content:
        "Infertility linked with genetic disorders is usually due to the production of abnormal sperms or lack of sperms. The genetic disorders that affect male fertility are Kleinfelter Syndrome, Cystic Fibrosis Gene Mutation, Y chromosome microdeletion, and other Chromosomal Abnormalities. ",
    },

    {
      id: 4,
      title: "Retrograde Ejaculation ",
      content:
        "Retrograde Ejaculation is otherwise known as a dry orgasm. Although some men with retrograde ejaculation still ejaculate at some point, they might experience less fluid. In a few men, Retrograde ejaculation can lead to infertility. There is a minimal possibility of sperm fertilizing an egg when very little or no ejaculate leaves the body. ",
    },

    {
      id: 5,
      title: "Sperm Transport Issues  ",
      content:
        "Men’s testicles produce adequate sperm; however, infertility may result if there is a problem with sperm transport that stops the sperm from leaving the testes and entering the ejaculate in the urethra or penis. The parts of the male genital tract where the obstructions occur are the Epididymis, Vas deferens, and the Ejaculatory duct.",
    },

    {
      id: 6,
      title: "Stress & Infertility ",
      content:
        "When you are stressed, the quality of your sperm may be compromised, resulting in fewer sperm each time you ejaculate. They may not move as well, resulting in poor motility. It could be harder for couples to get pregnant if stress affects the male patient’s sperm quality. ",
    },
    {
      id: 7,
      title: "Undescended Testicles  ",
      content:
        "Undescended testicles, also referred to as cryptorchidism, are conditions in which one or both testicles do not naturally descend into the scrotum. Due to poor testicular development or an increase in temperature when the testicle is outside of the scrotum, undescended testicles may affect fertility. Heat affects sperm production, and as a consequence, this becomes an issue.",
    },
    {
      id: 8,
      title: "Erectile Dysfunction ",
      content:
        "A male patient’s fertility is not directly influenced by his erectile dysfunction problems. However, it can be a factor affecting the chance of conception. ",
    },

    {
      id: 9,
      title: "Hormonal Imbalance ",
      content:
        "For the male reproductive system to work properly, hormones are essential. The effectiveness of this system depends on the right hormone balance. Around 10% of all male factor infertility cases are caused by hormonal imbalances which can present themselves in a variety of ways, from poor sperm concentration to sexual dysfunction. In general, hormone abnormalities can be identified and treated. ",
    },
    {
      id: 10,
      title: "Celiac Disease and Male Infertility ",
      content:
        "The small intestine becomes very sensitive when the male patient suffers from celiac disease- this is because of gluten. The patient’s digestive tract would suffer problems over time due to the overactive immune system. In addition to this, many studies have revealed a relationship between celiac disease and infertility, thus leading to the inference that the former does cause the latter. ",
    },
    {
      id: 11,
      title: "Medications and Male Infertility ",
      content:
        "The consumption of many medications may affect a male patient’s fertility. Further, if the patient indulges in banned medication, the effects can be adverse. These must be avoided at every turn. Some of the drugs that cause infertility are Testosterone, Anabolic steroids, Alcohol, Tobacco, Marijuana, Narcotics, 5-alpha-reductase inhibitors, Alpha-blockers, Ketoconazole, and more. ",
    },
    {
      id: 12,
      title: "Sexual Dysfunction and Infertility  ",
      content:
        "Erectile dysfunction is one of the most prevalent and well-known of the world’s fertility issues. When a male patient is affected by it, his sexual organ does not become or stay firm during sexual intercourse. High blood pressure, diabetes, blood vessel diseases, surgery that affects a man’s genitals or bladder, nerve problems or injury, hormonal problems, and depression are the main causes of erectile dysfunction. ",
    },
    {
      id: 13,
      title: "Immunological Infertility ",
      content:
        "An estimated 5% of sterility cases are thought to be immunological and associated with the existence of anti-sperm antibodies in either men or women. Because of the functions that macrophages and polynuclear neutrophils play in the initial and second stages of the spermatozoa’s demise, the production is higher in men than in women. ",
    },
    {
      id: 14,
      title: "Cancer and Fertility  ",
      content:
        "Cancer and related treatments can cause long-term damage to a male patient’s fertility. Common cancer treatments such as radiation therapy, alkylating chemotherapy, and surgery to treat prostate or bladder cancer can affect male patient’s fertility drastically. Ejaculatory problems can occur after surgery for testicular cancer or colon cancer in men. ",
    },

  ];

  const faqs = [
    {
      id: 1,
      question: "What are the factors affecting male infertility?",
      answer:
        "Male infertility can be affected by factors like age, lifestyle, medical conditions, and environmental exposures. As the best fertility centre in India, Sudha Fertility Centre is dedicated to identifying and addressing the factors that impact your fertility."
    },
    {
      id: 2,
      question: "What are the common causes of male infertility?",
      answer:
        "Common causes of male infertility include low sperm count, poor sperm motility, and blockages. Being the best fertility centre in India, Sudha Fertility Centre offers personalised care to diagnose and treat these issues.",
    },
    {
      id: 3,
      question: "Can male infertility be treated? ",
      answer:
        "Yes, male infertility can often be treated through medication, lifestyle changes, or assisted reproductive technologies. As the leading fertility centre in India, Sudha Fertility Centre specialises in identifying and treating the factors that can optimize fertility outcomes",
    },
    {
      id: 4,

      question: "Which is the best Hospital for male infertility treatments?",
      answer:
        "When it comes to male infertility treatments, Sudha Fertility Centre is recognized as one of the best hospitals in India. We are known for our advanced treatments and personalized care, helping men overcome infertility challenges effectively.",
    },
    {
      id: 5,
      question: "What should I do to prevent male infertility?",
      answer:
        "To prevent male infertility, maintain a healthy lifestyle, avoid smoking and excessive alcohol, and manage stress. Sudha Fertility Centre, the best fertility centre in India, offers expert guidance on maintaining reproductive health.",
    },
    {
      id: 6,
      question: "What are the available treatments for male infertility?",
      answer:
        "Treatments for male infertility include medications, surgery, and assisted reproductive techniques like IVF and ICSI. Sudha Fertility Centre, the best fertility centre in India, provides comprehensive fertility treatments.",
    },

    {
      id: 7,
      question: "How common is male infertility? ",
      answer:
        "Male infertility is more common than many realise. Factors such as low sperm count, poor sperm motility, hormonal imbalances, and structural issues can contribute to male infertility.  At Sudha Fertility Centre, we specialize in diagnosing and treating male infertility, offering personalised care to help couples on their journey to parenthood.",
    },
    {
      id: 8,
      question: "Does Smoking and alcohol consumption affect my fertility?",
      answer:
        "Yes, smoking, alcohol, and drug consumption can negatively impact fertility. Smoking can reduce sperm count and motility, while alcohol and drug consumption can affect hormone levels and sperm quality. As the best fertility centre in India, Sudha Fertility Centre is dedicated to providing expert advice and treatment to help you optimize your fertility.",
    },
    {
      id: 9,
      question: "When should I consider seeking infertility treatment? ",
      answer:
        "It’s advisable to seek infertility treatment if you have been trying to conceive for over a year without success or if you have known reproductive health issues. Sudha Fertility Centre, recognized as one of the best fertility centres, offers comprehensive consultations to evaluate your fertility and discuss tailored treatment options. Our expert team provides personalised care to help you navigate your fertility journey and achieve your goals.",
    },
    {
      id: 10,
      question: "How long does it take to cure male infertility?",
      answer:
        "The time to treat male infertility depends on the cause and severity of the infertility. Sudha Fertility Centre, known as the best fertility centre in India, offers personalized care to help achieve successful outcomes in the shortest time possible.",
    },
    {
      id: 11,
      question: "How can I know, I am infertile?",
      answer:
        "Infertility is often diagnosed through a combination of medical history, physical exams, and diagnostic tests but can be thoroughly assessed with the help of the best fertility hospital. At Sudha Fertility Centre, we conduct a comprehensive assessment to determine if there are any fertility issues and guide you on the appropriate next steps. Our expert team is dedicated to providing clear insights and support throughout your journey as the best fertility centre.",
    },
    {
      id: 12,
      question: "How successful is infertility treatment?",
      answer:
        "The success of infertility treatment depends on various factors, including the underlying cause and the severity of the infertility problem. The success rate may vary for each treatment. As the leading fertility centre in India, Sudha Fertility Centre offers high success rates through advanced treatments and expert care.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div>
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
            <div className="text-white max-w-5xl text-center px-4 font-outfit mt-10">
              <h1 className="font-outfit font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-4xl">
                Your journey is unique, and the joy awaiting you will be worth
                every moment
              </h1>
              <h3 className="mt-3  font-outfit  text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Male Infertility Treatments 
              </h3>
              <div className="button mt-7 flex justify-center">
                <Button text={"Book Your Free Appointment →"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto ">
        <h2 className="text-2xl font-semibold flex justify-center text-center mt-5">
        Male Infertility Treatments 
        </h2>
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card key={index} title={card.title} content={card.content} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <section>
          <div className=" max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
            <h2 className="text-2xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h2>
            {faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
      </div>

      {/* Contact  */}

      <div
        className="py-16 bg-cover bg-center"
        style={{
          background:
            "linear-gradient(170deg, #F0F5FF, #F0F5FF 60%, white 60%, white)",
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                  Quick Enquiry
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
                      htmlFor="Email"
                      className="block text-sm text-black mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm text-black mb-1"
                    >
                      Mobile
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      placeholder="Enter your Mobile"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1e3a8a] text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    Enquiry Now
                    <MdArrowOutward className="rotate-45" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
      <section>
          {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
          <MarqueeComponent
            items={Ambattur.gallery}
            direction="left"
            speed="fast"
            className="custom-class"
          />
          <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
            <h2 className="text-2xl font-bold text-center ">
              Happy Patients, Happy Stories
            </h2>
            <Button text="View on YouTube " icon={<FaYoutube />} />
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
    </div>
  );
}

export default MaleInfertility;

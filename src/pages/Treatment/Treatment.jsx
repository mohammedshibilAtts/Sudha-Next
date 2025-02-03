import React from "react";
import Banner from "@/assets/Treatments/Banner.webp";
import Button from "@/components/button/button";
import Image from "next/image";
import Female from "@/assets/Treatments/Female.svg";
import Male from "@/assets/Treatments/Male.svg";
import Assisted_Reproduction from "@/assets/Treatments/Assisted-Reproduction.svg";
import PCOS from "@/assets/Treatments/PCOS.svg";
import Pregnancy from "@/assets/Treatments/Pregnancy.svg";
import Laparoscopy from "@/assets/Treatments/Laparoscopy.svg";
import Laser_Assisted from "@/assets/Treatments/Laser-Assisted.svg";
import Blastocyst from "@/assets/Treatments/Blastocyst.svg";
import Hysteroscopy from "@/assets/Treatments/Hysteroscopy.svg";
import Intracytoplasmic from "@/assets/Treatments/Intracytoplasmic.svg";
import Intrauterine from "@/assets/Treatments/Intrauterine.svg";
import Vitro from "@/assets/Treatments/Vitro.svg";

import { FaArrowRight } from "react-icons/fa6";
import { MarqueeComponent } from "@/components/marqueeSlider";
import Ambattur from "@/middleware/imagesroute";
import { FaYoutube } from "react-icons/fa";
function Treatment() {
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
                Treatments
              </h1>
              <h3 className="mt-3 max-w-3xl font-outfit  text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                — Your Journey Starts Here !
              </h3>
              <div className="button mt-7 flex justify-center">
                <Button title={"Get Consult Our Specialists"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Driven By the Happiness Of Lakhs of Families */}
      <div className="container mx-auto mt-8 ">
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

      {/* Advanced Fertility Treatments at Sudha Fertility Centre */}

      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
          <div className="title text-center ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Advanced Fertility Treatments at{" "}
              <span className="lg:block">Sudha Fertility Centre </span>
            </h1>

            <p className="max-w-5xl text-[#838383] flex mx-auto mt-5 justify-center text-center ">
              Start your parenthood journey with India’s leading fertility
              specialists. With decades of expertise and world-class treatments,
              we provide personalized care that supports your dreams and guides
              you through every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 shadow-xl relative">
            {/* First Row */}
            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0 ">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Vitro}
                  className="w-14 h-14 object-contain"
                  alt="Vitro"
                />
              </div>
              <div className="title">
                <h1 className="text-xl text-center">In Vitro Fertilization</h1>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <button className="text-[#173366] flex items-center">
                  View More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Intrauterine}
                  className="w-14 h-14 object-contain"
                  alt="immediate assistance"
                />
              </div>
              <div className="title">
                <h1 className="text-xl text-center">
                  Intrauterine insemination
                </h1>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <button className="text-[#173366] flex items-center">
                  View More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Intracytoplasmic}
                  className="w-14 h-14 object-contain"
                  alt="Intracytoplasmic"
                />
              </div>
              <div className="title">
                <h1 className="text-xl text-center">
                  Intracytoplasmic Sperm Injection
                </h1>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <button className="text-[#173366] flex items-center">
                  View More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            {/* Second Row */}
            <div className="py-16 relative border-r lg:border-t last:border-r-0 border-b last:border-b-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Hysteroscopy}
                  className="w-14 h-14 object-contain"
                  alt="Hysteroscopy "
                />
              </div>
              <div className="title">
                <h1 className="text-xl text-center">Hysteroscopy</h1>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <button className="text-[#173366] flex items-center">
                  View More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <div className="py-16 relative border-r lg:border-t last:border-r-0 border-b last:border-b-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Blastocyst}
                  className="w-14 h-14 object-contain"
                  alt="Blastocyst Culture And Transter"
                />
              </div>
              <div className="title">
                <h1 className="text-xl text-center">
                  Blastocyst Culture And Transter{" "}
                </h1>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <button className="text-[#173366] flex items-center">
                  View More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <div className="py-16 relative border-r lg:border-t last:border-r-0 border-b last:border-b-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Laser_Assisted}
                  className="w-14 h-14 object-contain"
                  alt="Laser-Assisted Hatching"
                />
              </div>
              <div className="title">
                <h1 className="text-xl text-center">
                  Laser-Assisted Hatching
                </h1>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <button className="text-[#173366] flex items-center">
                  View More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            {/* third Row  */}
            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0 ">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Laparoscopy}
                  className="w-14 h-14 object-contain"
                  alt="Laparoscopy "
                />
              </div>
              <div className="title">
                <h1 className="text-xl text-center">Laparoscopy </h1>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <button className="text-[#173366] flex items-center">
                  View More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Pregnancy}
                  className="w-14 h-14 object-contain"
                  alt="Pregnancy and Antenatal Care"
                />
              </div>
              <div className="title">
                <h1 className="text-xl text-center">Pregnancy and Antenatal Care</h1>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <button className="text-[#173366] flex items-center">
                  View More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={PCOS}
                  className="w-14 h-14 object-contain"
                  alt="PCOS & PCOD "
                />
              </div>
              <div className="title">
                <h1 className="text-xl text-center">
                PCOS & PCOD 
                </h1>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <button className="text-[#173366] flex items-center">
                  View More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            {/* fourth Row  */}
            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0 ">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Assisted_Reproduction}
                  className="w-14 h-14 object-contain"
                  alt="Assisted Reproduction"
                />
              </div>
              <div className="title">
                <h1 className="text-xl text-center">Assisted Reproduction</h1>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <button className="text-[#173366] flex items-center">
                  View More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Male}
                  className="w-14 h-14 object-contain"
                  alt="Male Infertility"
                />
              </div>
              <div className="title">
                <h1 className="text-xl text-center">Male Infertility</h1>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <button className="text-[#173366] flex items-center">
                  View More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Female}
                  className="w-14 h-14 object-contain"
                  alt="Female Infertility "
                />
              </div>
              <div className="title">
                <h1 className="text-xl text-center">
                Female Infertility 
                </h1>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <button className="text-[#173366] flex items-center">
                  View More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          <Button title="View youtube" icon={<FaYoutube />} />
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

export default Treatment;

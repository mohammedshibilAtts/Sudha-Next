"use client";
import React, { useState } from "react";
import Banner from "@/assets/contact-us/Banner.webp";
import Button from "@/components/button";

import { motion } from "framer-motion";
import Image from "next/image";
import Dhanabagyam from "@/assets/About/dhanabagyam.webp";
import Pradeepa from "@/assets/About/pradeepa.webp";
import Link from "next/link";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import { Ambattur } from "@/middleware/imagesroute";

const managementData = [
  {
    id: 2,
    name: "Dr. S. Dhanabagyam ",
    role: "President, Sudha Hospitals Pvt ltd ",
    course: "MD, O&G, ART ",
    description: "",
    image: Dhanabagyam,
    website: "",
  },

  {
    id: 4,
    name: "Dr. S. Pradeepa",
    role: "Vice President, Sudha Hospitals Pvt ltd ",
    course: "MD., DNB (Cardiology) ",
    description: "",
    image: Pradeepa,
    website: "https://drpradeepa.com/",
  },
];

const images = [
  <div className="w-full max-w-lg mx-auto">
    <iframe
      src="https://www.youtube.com/embed/5ogetYWaiGE?si=R7dr-tddgoBtvoAj"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full h-[300px]" // Fixed height
    ></iframe>
</div>,
  <div className="w-full max-w-lg mx-auto">
    <iframe
      className="w-full h-[300px]" //
      src="https://www.youtube.com/embed/KJtvttAZVuA?si=hLC06l181ItV5PmD"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto">
    <iframe
      className="w-full h-[300px]"
      src="https://www.youtube.com/embed/Sv7c-qP5cVU?si=9s9iv6RbsuKjlE2S"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto">
<iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/qtS5EK29wDc?si=DKzYJFeUUTyB4Eoz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto">
<iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/_CE2nwRkzPs?si=xQLKIzBjbSdpREgn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto">
<iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/E_r-Uvpolvs?si=_gNbu6te-ErqbuD1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto">
<iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/GMCE8xDUfZE?si=f1cTdM1rA4hdGllR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto">
<iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/Ne4MMlfm2CM?si=ac7YK3fjxB7DPZHv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto">
<iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/Sv7c-qP5cVU?si=TvTr6wwNrD-vqlIZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto">
<iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/D6lyAvoxJpg?si=9UoxkHqfHQ96bphg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto">
<iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/_CE2nwRkzPs?si=NCXtlKr7U9azAXAm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto">
<iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/EetKsCl6SM8?si=j4cClzjzVN5KQ0ho" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>,
];

function InterviewSection() {
  const [visibleImages, setVisibleImages] = useState(18);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 6);
  };
  return (
    <>
      <div className="relative">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center -top-28  md:-top-36"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundSize: "fill",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#173366A1] opacity-45"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center mb-40 mt-16">
            <div className="text-white text-center px-4 font-outfit">
              <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                Interview
              </h1>
              <h2 className="font-outfit font-semibold text-xl sm:text-lg md:text-2xl lg:text-xl">
                — Your Journey Starts Here！
              </h2>
            </div>
          </div>
        </div>
      </div>


      
      <div className="container mx-auto  ">
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
      <div className="container mx-auto  ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Our Management
            </h1>
            <p className="max-w-5xl flex mx-auto mt-3 text-center justify-center">
              The Visionaries Powering Your Parenthood Dream
            </p>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-6">
                {managementData.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="group p-3 sm:p-4">
                      <div className="relative w-full aspect-square mb-3 sm:mb-4">
                        <Image
                          src={member.image}
                          alt={member.name}
                          className="rounded-lg object-cover"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-outfit font-semibold text-base sm:text-lg line-clamp-2">
                          {member.name}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
                          {member.role}
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
                          {member.course}
                        </p>
                        {member.website && (
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link
                              href={member.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm sm:text-base text-blue-500 hover:underline"
                            >
                              Visit Website
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold my-6 text-center">Videos</h2>

          {/* Masonry Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {images.slice(0, visibleImages).map((element, index) => (
              <div key={index} className="mb-4">
                <div className="w-full max-w-lg mx-auto">{element}</div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="relative w-full flex justify-center mt-6">
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            {visibleImages < images.length && (
              <button
                onClick={loadMore}
                className="relative z-10 px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 text-sm sm:text-base"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>


      <section>
    
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
      <Button text="View youtube " icon={<FaYoutube />} />
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

export default InterviewSection;

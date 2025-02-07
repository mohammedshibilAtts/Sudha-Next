"use client";
import { useState } from "react";
import Image from "next/image";
import gallery1 from "../assets/gallery/1.webp";
import gallery2 from "../assets/gallery/2.webp";
import gallery3 from "../assets/gallery/3.webp";
import gallery4 from "../assets/gallery/4.webp";
import gallery5 from "../assets/gallery/5.webp";
import gallery6 from "../assets/gallery/6.webp";
import gallery7 from "../assets/gallery/7.webp";
import gallery8 from "../assets/gallery/8.webp";
import gallery9 from "../assets/gallery/9.webp";
import gallery10 from "../assets/gallery/10.webp";
import gallery11 from "../assets/gallery/11.webp";
import gallery12 from "../assets/gallery/12.webp";
import gallery13 from "../assets/gallery/1.webp";
import gallery14 from "../assets/gallery/2.webp";
import gallery15 from "../assets/gallery/3.webp";
import gallery16 from "../assets/gallery/4.webp";
import gallery17 from "../assets/gallery/5.webp";
import gallery18 from "../assets/gallery/6.webp";
import gallery19 from "../assets/gallery/7.webp";
import gallery20 from "../assets/gallery/8.webp";
import gallery21 from "../assets/gallery/9.webp";
import gallery22 from "../assets/gallery/10.webp";
import gallery23 from "../assets/gallery/11.webp";
import gallery24 from "../assets/gallery/12.webp";
import gallery25 from "../assets/gallery/1.webp";
import gallery26 from "../assets/gallery/2.webp";
import gallery27 from "../assets/gallery/3.webp";
import gallery28 from "../assets/gallery/4.webp";
import Banner from "@/assets/About/Banner.webp"

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
];

export default function Gallery() {
  const [visibleImages, setVisibleImages] = useState(18);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 6);
  };

  return (

    <>

          {/* Banner Section */}
          <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center -top-28 md:-top-36"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#173366A1] opacity-45"></div>
        </div>

        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mb-40 mt-28">
            <div className="text-white text-center px-4 font-outfit">
              <h1 className="font-semibold text-3xl md:text-4xl">Gallery</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-5">
          <h1 className="text-center font-semibold text-2xl md:text-3xl">
            Driven By the Happiness Of Lakhs of Families
            <span className="block">Our Achievements</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-9 xl:px-16">
            {[
              { title: "3.5L+", desc: "Infertile Couples Counselled" },
              { title: "1L+", desc: "Laparoscopic Surgeries" },
              { title: "35k+", desc: "IUI Babies" },
              { title: "60k+", desc: "IVF Babies" },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#E7E7E7] p-4 rounded-lg text-center"
              >
                <h1 className="text-xl font-bold text-[#173366]">{item.title}</h1>
                <p className="text-[#838383]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    
      <div className="container mx-auto relative h-full">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold my-6">Gallery</h2>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        {images.slice(0, visibleImages).map((src, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
              width={500}
              height={300}
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="relative w-full flex justify-center mt-6">
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        {visibleImages < images.length && (
          <button
            onClick={loadMore}
            className="relative z-10 px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            Load More
          </button>
        )}
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

"use client"
import React, { useState } from "react";
import Banner from "@/assets/About/Banner.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageLayout from "@/components/ImageLayout/ImageLayout";

// Variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Gallery Image Data
const imageData = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
   
];

function Gallery() {
  const [visibleImages, setVisibleImages] = useState(8);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 6);
  };
    console.log(motion)
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
      <div className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-12">
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

     {/* Gallery  */}
     <div className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-5">
          <h1 className="text-center font-semibold text-2xl md:text-3xl">
              Gallery            
          </h1>
          </div>
          <ImageLayout/>
          </div>

    </>
  );
}

export default Gallery;

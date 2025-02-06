"use cleint";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../button/button";
import { IoMdRocket } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

import one from "@/assets/Gallery/1.webp"
import two from "@/assets/Gallery/2.webp"
import three from "@/assets/Gallery/3.webp"
import four from "@/assets/Gallery/4.webp"
import five from "@/assets/Gallery/5.webp"
import six from "@/assets/Gallery/6.webp"

function ImageLayout() {
  const [showMore, setShowMore] = useState(false);
  // Motion animation settings
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-6">
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="h-auto max-w-full rounded-lg"
          >
            <Image
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt="Image 1"
              height={100}
              width={400}
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="h-auto max-w-full rounded-lg"
          >
            <Image
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt="Image 2"
              height={100}
              width={400}
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="h-auto max-w-full rounded-lg"
          >
            <Image
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt="Image 3"
              height={100}
              width={400}
            />
          </motion.div>
        </div>

        <div className="grid gap-4">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="h-auto max-w-full rounded-lg"
          >
            <Image
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt="Image 4"
              height={100}
              width={400}
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="h-auto max-w-full rounded-lg"
          >
            <Image
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt="Image 5"
              height={100}
              width={400}
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="h-auto max-w-full rounded-lg"
          >
            <Image
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt="Image 6"
              height={100}
              width={400}
            />
          </motion.div>
        </div>

        <div className="grid gap-4">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="h-auto max-w-full rounded-lg"
          >
            <Image
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt="Image 7"
              height={100}
              width={400}
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="h-auto max-w-full rounded-lg"
          >
            <Image
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt="Image 8"
              height={100}
              width={400}
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="h-auto max-w-full rounded-lg"
          >
            <Image
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt="Image 9"
              height={100}
              width={400}
            />
          </motion.div>
        </div>

        <div className="grid gap-4">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="h-auto max-w-full rounded-lg"
          >
            <Image
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt="Image 10"
              height={100}
              width={400}
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="h-auto max-w-full rounded-lg"
          >
            <Image
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt="Image 11"
              height={100}
              width={400}
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="h-auto max-w-full rounded-lg"
          >
            <Image
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt="Image 12"
              height={100}
              width={400}
            />
          </motion.div>
        </div>
      </div>

      {!showMore && (
        <div className="button flex justify-center mt-5">
          <button onClick={()=>setShowMore(true)} className="bg-[#173366] text-white px-6 py-3 rounded-full transition-all duration-300 mb-3 flex items-center font-outfit hover:bg-[#FFC65C]">
            
              Show More
              <span
                className="ml-2 transform transition-all duration-500  rotate-45"
                
              >
                {<MdArrowOutward />}
              </span>
            
          </button>
        </div>
      )}

      {showMore && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          <div className="grid gap-4">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="h-auto max-w-full rounded-lg"
            >
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt="Image 1"
                height={100}
                width={400}
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="h-auto max-w-full rounded-lg"
            >
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt="Image 2"
                height={100}
                width={400}
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="h-auto max-w-full rounded-lg"
            >
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt="Image 3"
                height={100}
                width={400}
              />
            </motion.div>
          </div>

          <div className="grid gap-4">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="h-auto max-w-full rounded-lg"
            >
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt="Image 4"
                height={100}
                width={400}
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="h-auto max-w-full rounded-lg"
            >
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt="Image 5"
                height={100}
                width={400}
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="h-auto max-w-full rounded-lg"
            >
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt="Image 6"
                height={100}
                width={400}
              />
            </motion.div>
          </div>

          <div className="grid gap-4">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="h-auto max-w-full rounded-lg"
            >
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt="Image 7"
                height={100}
                width={400}
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="h-auto max-w-full rounded-lg"
            >
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt="Image 8"
                height={100}
                width={400}
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="h-auto max-w-full rounded-lg"
            >
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt="Image 9"
                height={100}
                width={400}
              />
            </motion.div>
          </div>

          <div className="grid gap-4">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="h-auto max-w-full rounded-lg"
            >
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt="Image 10"
                height={100}
                width={400}
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="h-auto max-w-full rounded-lg"
            >
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt="Image 11"
                height={100}
                width={400}
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="h-auto max-w-full rounded-lg"
            >
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt="Image 12"
                height={100}
                width={400}
              />
            </motion.div>
          </div>
        </div>
      )}
  

{showMore && (
    <div className="button flex justify-center mt-5">
      <button onClick={(prev)=>setShowMore(!prev)} className="bg-[#173366] text-white px-6 py-3 rounded-full transition-all duration-300 mb-3 flex items-center font-outfit hover:bg-[#FFC65C]">
        
          Show Less
          <span
            className="ml-2 transform transition-all duration-500  rotate-45"
            
          >
            {<MdArrowOutward />}
          </span>
        
      </button>
    </div>
  )}
    </div>
  );
}

export default ImageLayout;

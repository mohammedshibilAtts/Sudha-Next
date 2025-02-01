import React from 'react';
import Image from 'next/image';



function ImageGrid({ images }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
    {/* Large Image */}
    <div className="w-full md:w-1/2">
      <Image
        src={images[0]}
        alt="Large Image"
        className="rounded-lg"
        layout="responsive"
        width={700}
        height={290}
        objectFit="cover"
      />
    </div>

    {/* Smaller Images */}
    <div className="flex flex-col gap-4 w-full md:w-1/2">
      <div className="flex gap-4">
        <div className="w-1/2">
          <Image
            src={images[1]}
            alt="Image 2"
            className="rounded-lg"
            layout="responsive"
            width={350}
            height={200}
            objectFit="cover"
          />
        </div>
        <div className="w-1/2">
          <Image
            src={images[2]}
            alt="Image 3"
            className="rounded-lg"
            layout="responsive"
            width={350}
            height={200}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <Image
            src={images[3]}
            alt="Image 4"
            className="rounded-lg"
            layout="responsive"
            width={350}
            height={200}
            objectFit="cover"
          />
        </div>
        <div className="relative w-1/2">
          <Image
            src={images[4]}
            alt="View More"
            className="rounded-lg"
            layout="responsive"
            width={350}
            height={200}
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <span className="text-white font-bold">View More</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ImageGrid;
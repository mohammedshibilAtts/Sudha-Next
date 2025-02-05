import Button from "@/components/button/button";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import React from "react";

function International() {
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
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3">
                Your health is everything to us
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
                “Join the 1,50,00+ Families who have
                <br />
                Overcome Infertility”
              </p>
              <div className="mt-6 flex justify-center">
                <Button title="Connect With whatsapp" />
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
    </>
  );
}

export default International;

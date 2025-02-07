import React, { useState } from "react";
import Kandaswamy from "@/assets/About/kandaswamy.webp";
import Dhanabagyam from "@/assets/About/dhanabagyam.webp";
import Sudhakar from "@/assets/About/sudhakar.webp";
import Pradeepa from "@/assets/About/pradeepa.webp";
import Image from "next/image";
import Link from "next/link";

const managementData = [
  {
    id: 1,
    name: "Dr. Kandaswamy",
    role: "Chairman, Sudha Hospitals Pvt ltd",
    course: "MD., DTCD., MIL (Preventive Cardiology) ",
    description: "",
    image: Kandaswamy,
    website:""
  },
  {
    id: 2,
    name: "Dr. S. Dhanabagyam ",
    role: "President, Sudha Hospitals Pvt ltd ",
    course: "MD, O&G, ART ",
    description:
      "",
    image: Dhanabagyam,
    website:""
  },
  {
    id: 3,
    name: "Dr. Sudhakar",
    role: "Managing Director, Sudha Hospitals Pvt ltd ",
    course: "MD., DNB (Cardiology) ",
    description:"",
    image: Sudhakar,
    website:"https://dr-sudhakar.com/"
  },

  {
    id: 4,
    name: "Dr. S. Pradeepa",
    role: "Vice President, Sudha Hospitals Pvt ltd ",
    course: "MD., DNB (Cardiology) ",
    description:"",
    image: Pradeepa,
    website: "https://drpradeepa.com/",
  },
];

const ManagementCards = () => {


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {managementData.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="">
              <div className="group p-4 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
                <div className="relative w-full mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover rounded-lg"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(255, 255, 255, 0.5), transparent)",
                    }}
                  />
                </div>
                <h3 className="font-outfit font-semibold text-lg ">
                  {member.name}
                </h3>
                <p className=" text-gray-600 mb-4">{member.role}</p>
                <p className=" text-gray-600 mb-4">{member.course}</p>
                {member.website !== "" ? (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Visit Website
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </>
  );
};

export default ManagementCards;

"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Logo from "@/assets/logo-dark.svg";
import whatsapp from "@/assets/footer/whatsapp.svg";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import phone from "@/assets/footer/phone.svg";
import fb from "@/assets/footer/fb.svg";
import insta from "@/assets/footer/insta.svg";
import yt from "@/assets/footer/yt.svg";

const branches = [
  { title: "Ambattur  ", link: "" },
  { title: "Attapur", link: "" },
  { title: "Bengaluru", link: "" },
  { title: "Chennai", link: "" },
  { title: "Coimbatore", link: "" },
  { title: "Erode", link: "" },
  { title: "Dindigul", link: "" },
  { title: "Hyderabad", link: "" },
  { title: "Karur", link: "" },
  { title: "Krishnagiri", link: "" },
  { title: "Madurai", link: "" },
  { title: "Nagercoil", link: "" },
  { title: "Puducherry", link: "" },
  { title: "Ramanathapuram", link: "" },
  { title: "Salem", link: "" },
  { title: "Tiruvannamalai", link: "" },
  { title: "Trichy", link: "" },
  { title: "Thanjavur", link: "" },
  { title: "Tiruppur", link: "" },
  { title: "Theni", link: "" },
  { title: "Tirunelveli", link: "" },
  { title: "Vellore", link: "" },
  { title: "Vijayawada", link: "" },
];

export default function Footer() {
  return (
    <footer className="container mx-auto relative h-full">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
        {/* Branches Section */}
        <div>
          <h3 className="font-semibold text-blue-900 text-lg md:text-xl">
            Our Branches
          </h3>
          <div className="flex flex-wrap gap-4 mt-2 text-sm md:text-base text-gray-600">
            {branches.map((item, index) => (
              <Link href={item.link} key={index}>
                <p className="hover:text-[#FFC65C] transition-colors duration-300 cursor-pointer">
                  {item.title} <span className="ms-3">|</span>
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="border-b border-gray-300 my-6"></div>

        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-4">
            <Image src={Logo} alt="Sudha Fertility Centre" width={200} />
            <p className="text-gray-600 text-sm md:text-base">
              As a leading Fertility hospital in India, we provide world-class
              treatments with the best fertility specialists in a supportive
              environment. Let's make your dream come true and welcome your
              little one.
            </p>
            <button className="mt-4 px-6 py-3 bg-[#173366] rounded-full text-white text-sm  flex items-center justify-center gap-2 transition">
              Get Directions{" "}
              <span>
                <MdLocationOn size={22} />
              </span>
            </button>
            <div className="flex gap-4 mt-4 text-gray-700 ">
            <Image src={yt} alt="whatsapp" />
            <Image src={insta} alt="whatsapp" />
            <Image src={fb} alt="whatsapp" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 text-lg md:text-xl">
              Quick Links
            </h3>
            <ul className="text-gray-600 text-sm md:text-base mt-2 space-y-2">
              <li>
               <Link href={'/about'}> About Us</Link>
                </li>
              <li>
                <Link href={"/treatments"}/>
                Treatments
                </li>
              <li
              >News & Events
              </li>
              {/* <li>Blog</li> */}
              <li>
                Gallery
                </li>
              <li>Interviews</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-gray-800 text-lg md:text-xl">
              Legal
            </h3>
            <ul className="text-gray-600 text-sm md:text-base mt-2 space-y-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-semibold text-gray-800 text-lg md:text-xl">
              Contact Us
            </h3>
            <button className="mt-2 px-6 py-3 text-gray-800 text-sm rounded-full border border-[#000000] transition">
              Contact Us →
            </button>
            <div className="flex items-center gap-2 mt-4 text-gray-700">
              <Image src={whatsapp} alt="whatsapp" />
              <span className="text-sm md:text-base">Chat on Whatsapp</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-gray-700">
              <Image src={phone} alt="phone" />
              <span className="text-sm md:text-base">+91 767-007-6006</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm md:text-base">
          <p>Copyright © 2025 Sudhafertilitycentre.com. All Rights Reserved.</p>
          <p>
            Powered By <span className="text-blue-600">Arion Media Corp</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

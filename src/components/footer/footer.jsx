"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "@/assets/logo-dark.svg";
import whatsapp from "@/assets/footer/whatsapp.svg";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import phone from "@/assets/footer/phone.svg";
import fb from "@/assets/footer/fb.svg";
import insta from "@/assets/footer/insta.svg";
import yt from "@/assets/footer/yt.svg";
import { MdEmail } from "react-icons/md";
import Button from "../button/button";

export const branches = [
  { title: "Ambattur  ", link: "fertility-centre-in-ambattur" },
  { title: "Attapur", link: "fertility-centre-in-attapur" },
  { title: "Bengaluru", link: "fertility-centre-in-bengaluru" },
  { title: "Chennai", link: "fertility-centre-in-chennai" },
  { title: "Coimbatore", link: "fertility-centre-in-coimbatore" },
  { title: "Erode", link: "fertility-centre-in-erode" },
  { title: "Dindigul", link: "fertility-centre-in-dindigul" },
  { title: "Hyderabad", link: "fertility-centre-in-hyderabad" },
  { title: "Karur", link: "fertility-centre-in-karur" },
  { title: "Krishnagiri", link: "fertility-centre-in-krishnagiri" },
  { title: "Madurai", link: "fertility-centre-in-madurai" },
  { title: "Nagercoil", link: "fertility-centre-in-nagercoil" },
  { title: "Puducherry", link: "fertility-centre-in-puducherry" },
  { title: "Ramanathapuram", link: "fertility-centre-in-ramanathapuram" },
  { title: "Salem", link: "fertility-centre-in-salem" },
  { title: "Tiruvannamalai", link: "fertility-centre-in-tiruvannamalai" },
  { title: "Trichy", link: "fertility-centre-in-trichy" },
  { title: "Thanjavur", link: "fertility-centre-in-thanjavur" },
  { title: "Tiruppur", link: "fertility-centre-in-tiruppur" },
  { title: "Theni", link: "fertility-centre-in-theni" },
  { title: "Tirunelveli", link: "fertility-centre-in-tirunelveli" },
  { title: "Vellore", link: "fertility-centre-in-vellore" },
  { title: "Vijayawada", link: "fertility-centre-in-vijayawada" },
];

export default function Footer() {
  return (
    <footer className="container mx-auto relative h-full py-7">
      <div className="max-w-7xl mx-auto px-6   sm:px-8 lg:px-10 h-full">
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
            <Link href={"https://maps.app.goo.gl/hJJAgqV19kYQ1cveA"}>
              <button className="mt-4 px-6 py-3 bg-[#173366] rounded-full text-white text-sm  flex items-center justify-center gap-2 transition">
                Get Directions{" "}
                <span>
                  <MdLocationOn size={22} />
                </span>
              </button>
            </Link>
            <div className="flex gap-4 mt-4 text-gray-700 ">
              <Link
                href="https://www.youtube.com/@sudhafertilitycentre"
                target="_blank"
              >
                <Image src={yt} alt="YouTube" />
              </Link>
              <Link
                href="https://instagram.com/sudhafertilitycentre/"
                target="_blank"
              >
                <Image src={insta} alt="Instagram" />
              </Link>
              <Link
                href="https://www.facebook.com/sudhafertilitycentre"
                target="_blank"
              >
                <Image src={fb} alt="Facebook" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 text-lg md:text-xl">
              Quick Links
            </h3>
            <ul className="text-gray-600 text-sm md:text-base mt-2 ">
              <li className="mt-3">
                <Link href={"/treatments"}>Treatments</Link>
              </li>
              <Link href={"/international"}>
                <li className="mt-3">International Patients</li>
              </Link>
              {/* <li>Blog</li> */}
              <Link href={"/gallery"}>
                <li className="mt-3">Gallery</li>
              </Link>
              <Link href={"/interviews"}>
                <li className="mt-3">Interviews</li>
              </Link>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-gray-800 text-lg md:text-xl">
              Legal
            </h3>
            <ul className="text-gray-600 text-sm md:text-base mt-2 space-y-2">
              <Link href={"/privacy-policy"}>
                <li className="mt-3">Privacy Policy</li>
              </Link>
              <Link href={"/terms-condition"}>
                <li className="mt-3">Terms & Conditions</li>
              </Link>
            </ul>
          </div>

          {/* Contact Us Section */}

          <div>
            <h3 className="font-semibold text-gray-800 text-lg md:text-xl ">
              Contact Us
            </h3>

            {/* Contact Us Button with Link */}

            <div className="mt-4">
              <Button title={" Contact Us"} link="/contact-us" />
            </div>

            {/* WhatsApp Link */}
            <div className="flex items-center gap-2 mt-4 text-gray-700">
              <a
                href="https://wa.me/917670076006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Image src={whatsapp} alt="whatsapp" width={20} height={20} />
                <span className="text-sm md:text-base">Chat on Whatsapp</span>
              </a>
            </div>

            {/* Phone Link */}
            <div className="flex items-center gap-2 mt-2 text-gray-700">
              <a href="tel:+917670076006" className="flex items-center gap-2">
                <Image src={phone} alt="phone" width={20} height={20} />
                <span className="text-sm md:text-base">+91 767-007-6006</span>
              </a>
            </div>

            {/* Email Link */}
            <div className="flex items-center gap-2 mt-2 text-gray-700">
              <a
                href="mailto:care@sudhahospitals.com"
                className="flex items-center gap-2"
              >
                <MdEmail size={20} />
                <span className="text-sm md:text-base">
                  care@sudhahospitals.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm md:text-base">
          <p>Copyright © 2025 sudhafertilitycentre.com. All Rights Reserved.</p>
          <p>
            Powered By{" "}
            <span className="text-blue-600">
              <Link
                href={"https://arionmediacorp.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Arion Media Corp
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

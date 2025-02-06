"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoClose, IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Logo from "@/assets/logo.svg";
import Bar from "@/assets/Navbar/bar.svg";
import DarkLogo from "@/assets/logo-dark.svg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const topNavItems = ["Helpline No: +91 767-007-6006", "Book Appointment"];

const mainNavItems = [
  { item: "Home", link: "/" },
  { item: "About Us", link: "/about" },
  {
    title: "Treatments",
    link: "treatment",
    dropdownItems: [
      { item: "In Vitro Fertilization", link: "/in-vitro-fertilization" },
      { item: "Intrauterine Insemination", link: "/intrauterine-insemination" },
      {
        item: "Intracytoplasmic Sperm Injection",
        link: "/intracytoplasmic-sperm-injection",
      },
      { item: "Hysteroscopy", link: "/hysteroscopy" },
      {
        item: "Blastocyst Culture And Transfer",
        link: "/blastocyst-culture-and-transfer",
      },
      // { item: "Laser Assisted Hatching", link: "/laser-assisted-hatching" },
      // { item: "laparoscopy", link: "/laparoscopy" },
      {
        item: "Assisted Reproduction Treatments",
        link: "/assisted-reproduction-treatments",
      },
      { item: "female-infertility", link: "/female-infertility" },
      { item: "Male Infertility", link: "/male-infertility" },
    ],
  },
  // "Blogs",
  {
    title: "Branches",
    states: [
      {
        name: "Tamil Nadu",
        branches: [
          { item: "Ambattur", link: "/fertility-centre-in-ambattur" },
          { item: "Chennai", link: "/fertility-centre-in-chennai" },
          { item: "Coimbatore", link: "/fertility-centre-in-coimbatore" },
          { item: "Dindigul", link: "/fertility-centre-in-dindigul" },
          { item: "Erode", link: "/fertility-centre-in-erode" },
          { item: "Karur", link: "/fertility-centre-in-karur" },
          { item: "Krishnagiri", link: "/fertility-centre-in-krishnagiri" },
          { item: "Madurai", link: "/fertility-centre-in-madurai" },     
          { item: "Salem", link: "/fertility-centre-in-salem" },
          { item: "Thanjavur", link: "/fertility-centre-in-thanjavur" },
          { item: "Theni", link: "/fertility-centre-in-theni" },
          { item: "Tirunelveli", link: "/fertility-centre-in-tirunelveli" },
          { item: "Vellore", link: "/fertility-centre-in-vellore" },
          { item: "Tiruppur", link: "/fertility-centre-in-tiruppur" },
          {
            item: "Tiruvannamalai",
            link: "/fertility-centre-in-tiruvannamalai",
          },
          {
            item: "Ramanathapuram",
            link: "/fertility-centre-in-ramanathapuram",
          },
        ],
      },
      {
        name: "karnataka",
        branches: [
          { item: "Bengaluru ", link: "/fertility-centre-in-bengaluru" },
        ],
      },
      {
        name: "Telangana",
        branches: [
          { item: "Hyderabad ", link: "/fertility-centre-in-hyderabad" },
          { item: "Attapur", link: "/fertility-centre-in-attapur" },
        ],
      },
      {
        name: "Andhra Pradesh",
        branches: [
          { item: "Vijayawada ", link: "/fertility-centre-in-Vijayawada" },
        ],
      },
    ],
  },
  { item: "Gallery", link: "/gallery" },
  { item: "International Patients", link: "/international" },
  { item: "Contact Us", link: "/contact" },
];

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeState, setActiveState] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState(false);

  // State for mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleStateClick = (index) => {
    setActiveState(activeState === index ? null : index); // Toggle state visibility
  };

  // Handle scroll event to update the navbar color
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 200) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveState(null);
  };

  const handleStateHover = (stateName) => {
    setActiveState(stateName);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  return (
    <header
      className={`w-full  text-white font-outfit z-30 sticky top-0 ${
        navbarColor ? "bg-[#173366]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          {/* Top Navigation Bar */}
          <div className=" py-3">
            <div className="mx-auto px-7">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="w-40 ">
                  <Image
                    src={Logo}
                    alt="Sudha-Logo"
                    className="w-full h-auto  top-2"
                  />
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                  <button onClick={toggleMobileMenu}>
                    <Image src={Bar} alt="Bar" />
                  </button>
                </div>

                {/* Top Nav Container */}
                <div className="flex-1 flex justify-between items-center pl-7 hidden lg:flex">
                  {/* Find Us */}
                  <div className="flex items-center group cursor-pointer">
                    <IoLocationSharp
                      size={25}
                      className="group-hover:text-[#FFC65C]"
                    />
                    <span className="ml-1 group-hover:text-[#FFC65C] text-md">
                      Find us
                    </span>
                  </div>

                  {/* Right Navigation Items */}
                  <div className="flex items-center">
                    <ul className="flex gap-9">
                      {topNavItems.map((item, index) => (
                        <li
                          key={index}
                          className="hover:text-[#FFC65C] transition-colors duration-300 text-md cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                      <li className="flex items-center gap-2 group cursor-pointer">
                        <BsFillTelephoneInboundFill
                          size={18}
                          className="group-hover:text-[#FFC65C]"
                        />
                        <span className="group-hover:text-[#FFC65C] transition-colors duration-300 text-md">
                          Request A Call
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="relative">
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto pb-9"
              initial={{ opacity: 0, x: 20 }} // Start with opacity 0 and translateX
              animate={{ opacity: 1, x: 0 }} // Fade in and move to normal position
              exit={{ opacity: 0, x: -20 }} // Fade out and move to the left
              transition={{ duration: 0.4 }} // Duration for the animation
            >
              <div className="container mx-auto py-6">
                <div className="flex justify-between px-4">
                  <div className="w-40">
                    <Image
                      src={DarkLogo}
                      alt="Sudha-Logo"
                      className="w-full h-auto top-2"
                    />
                  </div>
                  {/* Close Button */}
                  <div className="flex">
                    <button
                      onClick={toggleMobileMenu}
                      className="text-gray-600 p-2"
                    >
                      <IoClose size={24} />
                    </button>
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                <nav className="mt-3 px-4">
                  {mainNavItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200">
                      {/* Render simple string items (e.g., "Home", "About Us", "Blogs", etc.) */}
                      {typeof item.item === "string" ? (
                        <Link
                          href={item.link}
                          className="block py-4 text-gray-800 hover:text-blue-600 text-lg"
                          onClick={toggleMobileMenu}
                        >
                          {item.item}
                        </Link>
                      ) : (
                        // Render items with a title and dropdown (Treatments and Branches)
                        <div>
                          <button
                            className="w-full py-4 flex justify-between items-center text-gray-800"
                            onClick={() => handleDropdownClick(index)}
                          >
                            <span className="text-lg">{item.title}</span>
                            <IoIosArrowDown
                              className={`transition-transform duration-200 ${
                                activeDropdown === index ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Render Treatments dropdown */}
                          {item.dropdownItems && activeDropdown === index && (
                            <div className="bg-gray-50 px-4 py-2">
                              {item.dropdownItems.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.link}
                                  className="block py-2 text-gray-600 hover:text-blue-600"
                                  onClick={toggleMobileMenu}
                                >
                                  {subItem.item}
                                </Link>
                              ))}
                            </div>
                          )}

                          {/* Render Branches dropdown */}
                          {item.states && activeDropdown === index && (
                            <div className="bg-gray-50 px-4 py-2">
                              {item.states.map((state, stateIndex) => (
                                <div key={stateIndex}>
                                  <button
                                    className="w-full py-4 flex justify-between items-center text-gray-800"
                                    onClick={() => handleStateClick(stateIndex)}
                                  >
                                    <h4 className="font-semibold text-gray-800">
                                      {state.name}
                                    </h4>
                                    <IoIosArrowDown
                                      className={`transition-transform duration-200 ${
                                        activeState === stateIndex
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </button>

                                  {/* Render branches of the selected state */}
                                  {activeState === stateIndex && (
                                    <ul className="list-disc ml-4">
                                      {state.branches.map(
                                        (branch, branchIndex) => (
                                          <Link
                                            href={branch.link}
                                            key={branchIndex}
                                            onClick={toggleMobileMenu}
                                          >
                                            <li className="py-1 text-gray-600 hover:text-blue-600">
                                              {branch.item}
                                            </li>
                                          </Link>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Action Buttons */}
                <div className="relative">
                  <div className="mt-8 gap-2 w-full fixed bottom-0 left-0 flex bg-[#173366]">
                    <button className="w-full py-3 border-r text-white font-medium">
                      Book Appointment
                    </button>
                    <button className="w-full py-3 font-medium">
                      Request A Call
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Navigation Bar for Larger Screens */}
      <div className="container mx-auto">
        <div className="pb-4 hidden lg:block">
          <div className="ms-9 2xl:mt-5">
            <ul className="container flex gap-8 2xl:gap-12 justify-center">
              {mainNavItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`hover:text-[#FFC65C] xl:ps-8 transition-colors duration-300 cursor-pointer text-md flex items-center gap-1
    ${activeDropdown === index ? "text-[#FFC65C]" : ""}`}
                  >
                    {typeof item.item === "string" ? (
                      <Link href={item.link}>{item.item}</Link>
                    ) : (
                      item.title
                    )}


                    {/* Check for dropdownItems and states being present and correct */}
                    {(typeof item.dropdownItems === "object" &&
                      item.dropdownItems !== null) ||
                    (typeof item.states === "object" &&
                      item.states !== null) ? (
                      <IoIosArrowDown
                        className={`transition-transform duration-300 ${
                          activeDropdown === index
                            ? "rotate-180 text-[#FFC65C]"
                            : ""
                        }`}
                      />
                    ) : null}
                  </div>

                  {/* Dropdown for Treatments */}
                  {typeof item === "object" &&
                    item.title === "Treatments" &&
                    activeDropdown === index && (
                      <div className="absolute top-full left-0 bg-white text-gray-800 py-2 min-w-[280px] shadow-lg rounded-b-md">
                        {item.dropdownItems.map((dropdownItem, dropIndex) => (
                          <Link href={dropdownItem.link} key={dropIndex}>
                            <div
                              key={dropIndex}
                              className="px-4 py-2 hover:bg-blue-50 hover:text-[#1a237e] cursor-pointer"
                            >
                              {dropdownItem.item}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}

                  {/* Dropdown for States and Branches */}
                  {typeof item === "object" &&
                    item.states &&
                    activeDropdown === index && (
                      <div className="absolute top-full left-0 bg-white text-gray-800 py-2 min-w-[200px] shadow-lg rounded-b-md">
                        {item.states.map((state) => (
                          <div
                            key={state.name}
                            className="relative group"
                            onMouseEnter={() => handleStateHover(state.name)}
                            onMouseLeave={() => handleStateHover(null)}
                          >
                            <div className="px-4 py-2 hover:bg-blue-50 hover:text-[#1a237e] cursor-pointer flex justify-between items-center">
                              {state.name}
                              <IoIosArrowDown className="text-gray-500" />
                            </div>

                            {/* Secondary dropdown for branches */}
                            {activeState === state.name && (
                              <div className="absolute left-full top-0 bg-white text-gray-800 py-2 min-w-[200px] shadow-lg rounded-md -ml-1">
                                {state.branches.map((branch, branchIndex) => (
                                  <div
                                    key={branchIndex}
                                    className="px-4 py-2 hover:bg-blue-50 hover:text-[#1a237e] cursor-pointer"
                                  >
                                    <Link href={branch.link}>
                                      {branch.item}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

// lestn

export default Navbar;

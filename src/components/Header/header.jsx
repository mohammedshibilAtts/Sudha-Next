"use client"
// import React, { useState } from "react";
// import Image from "next/image";
// import { IoLocationSharp } from "react-icons/io5";
// import { BsFillTelephoneInboundFill } from "react-icons/bs";
// import { IoIosArrowDown } from "react-icons/io";
// import Logo from "@/assets/logo.svg";

// const topNavItems = ["Helpline No: +91 767-007-6006", "Book Appointment"];

// const mainNavItems = [
//   "Home",
//   "About Us",
//   { 
//     title: "Treatments",
//     dropdownItems: ["Treatment 1", "Treatment 2", "Treatment 3", "Treatment 4"]
//   },
//   "Blogs",
//   { 
//     title: "Branches",
//     states: [
//       {
//         name: "Delhi",
//         branches: ["Rohini", "Dwarka", "Pitampura"]
//       },
//       {
//         name: "Maharashtra",
//         branches: ["Mumbai Central", "Pune", "Nashik"]
//       },
//       {
//         name: "Karnataka",
//         branches: ["Bangalore", "Mysore", "Hubli"]
//       }
//     ]
//   },
//   "Gallery",
//   "International Patients",
//   "Contact Us",
// ];

//  function Navbar() {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [activeState, setActiveState] = useState(null);

//   const handleMouseEnter = (index) => {
//     setActiveDropdown(index);
//   };

//   const handleMouseLeave = () => {
//     setActiveDropdown(null);
//     setActiveState(null);
//   };

//   const handleStateHover = (stateName) => {
//     setActiveState(stateName);
//   };

//   return (
// <header className="w-full text-white font-outfit  z-10 hidden lg:block sticky top-0 bg-transparent">
// {/* Top Navigation Bar */}
//       <div className="py-5">
//         <div className="mx-auto px-7">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="w-40 2xl:relative">
//               <Image
//                 src={Logo}
//                 alt="Sudha Logo"
//                 className="w-full h-auto 2xl:absolute top-2"
//               />
           
//             </div>
            
//             {/* Top Nav Container */}
//             <div className="flex-1 flex justify-between items-center pl-7">
//               {/* Find Us */}
//               <div className="flex items-center group cursor-pointer">
//                 <IoLocationSharp
//                   size={25}
//                   className="group-hover:text-[#FFC65C]"
//                 />
//                 <span className="ml-1 group-hover:text-[#FFC65C] text-md">
//                   Find us
//                 </span>
//               </div>

//               {/* Right Navigation Items */}
//               <div className="flex items-center">
//                 <ul className="flex gap-9">
//                   {topNavItems.map((item, index) => (
//                     <li
//                       key={index}
//                       className="hover:text-[#FFC65C] transition-colors duration-300 text-md cursor-pointer"
//                     >
//                       {item}
//                     </li>
//                   ))}
//                   <li className="flex items-center gap-2 group cursor-pointer">
//                     <BsFillTelephoneInboundFill
//                       size={18}
//                       className="group-hover:text-[#FFC65C]"
//                     />
//                     <span className="group-hover:text-[#FFC65C] transition-colors duration-300 text-md">
//                       Request A Call
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-end">
//   <hr className="2xl:w-[87%] w-full mb-2" />
// </div>
  
//       {/* Main Navigation Bar */}
//       <div className="pb-4 hidden lg:block">
//         <div className="ms-9 2xl:mt-5">
//           <ul className="container flex gap-8 2xl:gap-12 justify-center">
//             {mainNavItems.map((item, index) => (
//               <li
//                 key={index}
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div
//                   className={`hover:text-[#FFC65C] xl:ps-8 transition-colors duration-300 cursor-pointer text-md flex items-center gap-1
//                     ${activeDropdown === index ? 'text-[#FFC65C]' : ''}`}
//                 >
//                   {typeof item === 'string' ? item : item.title}
//                   {typeof item === 'object' && (
//                     <IoIosArrowDown className={`transition-transform duration-300 
//                       ${activeDropdown === index ? 'rotate-180 text-[#FFC65C]' : ''}`}
//                     />
//                   )}
//                 </div>

//                 {/* Dropdown for Treatments */}
//                 {typeof item === 'object' && item.title === 'Treatments' && activeDropdown === index && (
//                   <div className="absolute top-full left-0 bg-white text-gray-800 py-2 min-w-[200px] shadow-lg rounded-b-md">
//                     {item.dropdownItems.map((dropdownItem, dropIndex) => (
//                       <div
//                         key={dropIndex}
//                         className="px-4 py-2 hover:bg-blue-50 hover:text-[#1a237e] cursor-pointer"
//                       >
//                         {dropdownItem}
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Dropdown for States and Branches */}
//                 {typeof item === 'object' && item.states && activeDropdown === index && (
//                   <div className="absolute top-full left-0 bg-white text-gray-800 py-2 min-w-[200px] shadow-lg rounded-b-md">
//                     {item.states.map((state) => (
//                       <div
//                         key={state.name}
//                         className="relative group"
//                         onMouseEnter={() => handleStateHover(state.name)}
//                         onMouseLeave={() => handleStateHover(null)}
//                       >
//                         <div className="px-4 py-2 hover:bg-blue-50 hover:text-[#1a237e] cursor-pointer flex justify-between items-center">
//                           {state.name}
//                           <IoIosArrowDown className="text-gray-500" />
//                         </div>
                        
//                         {/* Secondary dropdown for branches */}
//                         {activeState === state.name && (
//                           <div className="absolute left-full top-0 bg-white text-gray-800 py-2 min-w-[200px] shadow-lg rounded-md -ml-1">
//                             {state.branches.map((branch, branchIndex) => (
//                               <div
//                                 key={branchIndex}
//                                 className="px-4 py-2 hover:bg-blue-50 hover:text-[#1a237e] cursor-pointer"
//                               >
//                                 {branch}
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "@/assets/logo.svg";

const topNavItems = ["Helpline No: +91 767-007-6006", "Book Appointment"];

const mainNavItems = [
  "Home",
  "About Us",
  { 
    title: "Treatments",
    dropdownItems: ["Treatment 1", "Treatment 2", "Treatment 3", "Treatment 4"]
  },
  "Blogs",
  { 
    title: "Branches",
    states: [
      {
        name: "Delhi",
        branches: ["Rohini", "Dwarka", "Pitampura"]
      },
      {
        name: "Maharashtra",
        branches: ["Mumbai Central", "Pune", "Nashik"]
      },
      {
        name: "Karnataka",
        branches: ["Bangalore", "Mysore", "Hubli"]
      }
    ]
  },
  "Gallery",
  "International Patients",
  "Contact Us",
];

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeState, setActiveState] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0); // Scroll position state
  const [navbarColor, setNavbarColor] = useState(false); // Navbar color state

  // Handle scroll event to update the navbar color
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 200) { // Change color after the banner (assuming banner is above 100px)
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

  return (
    <header className={`w-full text-white font-outfit z-30 hidden lg:block sticky top-0  ${navbarColor ? 'bg-[#173366]' : 'bg-transparent'}`}>
      {/* Top Navigation Bar */}
      <div className="py-5">
        <div className="mx-auto px-7">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-40 2xl:relative">
              <Image
                src={Logo}
                alt="Sudha Logo"
                className="w-full h-auto 2xl:absolute top-2"
              />
            </div>

            {/* Top Nav Container */}
            <div className="flex-1 flex justify-between items-center pl-7">
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
      <div className="flex justify-end">
        <hr className="2xl:w-[87%] w-full mb-2" />
      </div>

      {/* Main Navigation Bar */}
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
                    ${activeDropdown === index ? 'text-[#FFC65C]' : ''}`}
                >
                  {typeof item === 'string' ? item : item.title}
                  {typeof item === 'object' && (
                    <IoIosArrowDown className={`transition-transform duration-300 
                      ${activeDropdown === index ? 'rotate-180 text-[#FFC65C]' : ''}`}/>
                  )}
                </div>

                {/* Dropdown for Treatments */}
                {typeof item === 'object' && item.title === 'Treatments' && activeDropdown === index && (
                  <div className="absolute top-full left-0 bg-white text-gray-800 py-2 min-w-[200px] shadow-lg rounded-b-md">
                    {item.dropdownItems.map((dropdownItem, dropIndex) => (
                      <div
                        key={dropIndex}
                        className="px-4 py-2 hover:bg-blue-50 hover:text-[#1a237e] cursor-pointer"
                      >
                        {dropdownItem}
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropdown for States and Branches */}
                {typeof item === 'object' && item.states && activeDropdown === index && (
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
                                {branch}
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
    </header>
  );
}

export default Navbar;

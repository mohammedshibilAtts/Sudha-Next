import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
const handleClick = (e, id) => {
    e.preventDefault();
  
    const isMobile = window.innerWidth < 768;
    const headerOffset = isMobile ? 400 : 200; 
  
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

function BookingButton({ title, link = "",icon }) {
  return (
      
    <button onClick={(e) => handleClick(e, "contact-now")} className="bg-[#173366] text-white px-6 py-3 rounded-full transition-all duration-300 mb-3 flex items-center font-outfit hover:bg-[#FFC65C]">
        {title}
        <span className={`ml-2 transform transition-all duration-500 ${icon ? '' : 'rotate-45'}`}>
  {icon || <MdArrowOutward />}
</span>

    </button>
 
  );
}

export default BookingButton;

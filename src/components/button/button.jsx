import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function Button({ title, link = "",icon }) {
  return (
      <Link href={link} className="flex items-center">
    <button className="bg-[#173366] text-white px-6 py-3 rounded-full transition-all duration-300 mb-3 flex items-center font-outfit hover:bg-[#FFC65C]">
        {title}
        <span className={`ml-2 transform transition-all duration-500 ${icon ? '' : 'rotate-45'}`}>
  {icon || <MdArrowOutward />}
</span>

    </button>
      </Link>
  );
}

export default Button;

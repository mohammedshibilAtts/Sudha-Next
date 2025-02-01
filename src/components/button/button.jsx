import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function Button({ title, link = "" }) {
  return (
    <button className="bg-[#173366] text-white px-6 py-3 rounded-full transition-all duration-300 mb-3 flex items-center font-outfit">
      <Link href={link} className="flex items-center">
        {title}
        <span className="ml-2 transform transition-all duration-500  rotate-45">
          <MdArrowOutward />
        </span>
      </Link>
    </button>
  );
}

export default Button;

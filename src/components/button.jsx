import React from 'react';

const Button = ({ text, onClick, icon, type = 'button', styleClass = '' }) => {
  return (
    <button
      className={`btn ${styleClass} px-6 py-3 flex gap-3 items-center text-lg bg-[#173366] text-white rounded-[30px] transition duration-300`}
      type={type}
      onClick={onClick}
    >
      {text} {icon}
    </button>
  );
};

export default Button;

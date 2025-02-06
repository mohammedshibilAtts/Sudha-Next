import React from "react";

function Card({ title, content }) {
  return (
    <div className="p-4 bg-white rounded-lg transform border-2 border-gray-200 transition-transform duration-300 hover:scale-105">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-md">{content}</p>
    </div>
  );
}

export default Card;

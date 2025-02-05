import React, { useState } from "react";
import Chairman from "@/assets/About/Chairman.webp";
import Image from "next/image";
const managementData = [
  {
    id: 1,
    name: "Dr. Kandhasamy",
    role: "Chairman",
    description:
      "Dr. Kandhasamy brings over two decades of experience in reproductive medicine. His pioneering work in fertility treatments has helped thousands of couples realize their dreams of parenthood.",
    image: Chairman,
  },
  {
    id: 2,
    name: "Dr. S. Dhanabagyam",
    role: "President",
    description:
      "As President, Dr. Dhanabagyam has been instrumental in developing innovative fertility protocols and ensuring the highest standards of patient care across all our centers.",
    image: Chairman,
  },
  {
    id: 3,
    name: "Dr. Sudhakar",
    role: "Managing Director",
    description:
      "Dr. Sudhakar oversees the operational excellence of our facilities. His focus on combining cutting-edge technology with compassionate care has set new standards in fertility treatment.",
    image: Chairman,
  },
  {
    id: 4,
    name: "Dr. S. Pradeepa",
    role: "Vice President",
    description:
      "Dr. Pradeepa specializes in advanced reproductive techniques. Her research contributions have significantly improved success rates in complex fertility cases.",
    image: Chairman,
  },
];

const ManagementCards = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {managementData.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-2">
              <div className="relative w-full e mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg bg-[#173366] p-2"
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
              <div className="">
                <button
                  onClick={() => handleReadMore(member)}
                  className="inline-flex items-center py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Read More
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={closeModal}
            ></div>

            {/* Modal panel */}
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-500 bg-opacity-50">
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                {selectedMember && (
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="flex flex-col items-center">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left">
                        <div className="flex flex-col items-center space-y-4">
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-title"
                          >
                            {selectedMember.name}
                          </h3>
                          <p className="font-medium text-gray-600">
                            {selectedMember.role}
                          </p>
                          <p className="text-center text-gray-500">
                            {selectedMember.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManagementCards;

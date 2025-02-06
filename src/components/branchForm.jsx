import { motion } from 'framer-motion';
import React from 'react'
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from 'next/image';
function BranchForm() {
  return (
    <div>
      <motion.div
                  className="w-full lg:w-[450px] bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8 lg:mt-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      Book your
                      <span className="text-[#FDCB58] block mt-1">
                        Appointment Today!
                      </span>
                    </h2>
                    <Image
                      src={Calendar}
                      alt="Calendar"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-4 bg-[#8894af]/80 rounded-md outline-none border-none 
                             placeholder-white text-white transition-all hover:bg-[#8894af]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full p-4 bg-[#8894af]/80 rounded-md outline-none border-none 
                             placeholder-white text-white transition-all hover:bg-[#8894af]"
                    />
                    <input
                      type="text"
                      placeholder="Select Location"
                      className="w-full p-4 bg-[#8894af]/80 rounded-md outline-none border-none 
                             placeholder-white text-white transition-all hover:bg-[#8894af]"
                    />
                    <button
                      className="w-full p-4 border-2 border-white rounded-lg text-lg 
                                   text-white hover:bg-white/10 transition-all"
                    >
                      Book a Free Appointment
                    </button>
                  </form>
                </motion.div>
    </div>
  )
}

export default BranchForm;

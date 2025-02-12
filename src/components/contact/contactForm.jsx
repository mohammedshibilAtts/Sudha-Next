import React from 'react';
import { useForm } from "react-hook-form";
import { MdArrowOutward } from 'react-icons/md';
import { Toaster, toast } from 'react-hot-toast';
import Link from 'next/link';
import Insta from "@/assets/Home/insta.svg";
import youtube from "@/assets/Home/youtube.svg";
import fb from "@/assets/Home/fb.svg";
import Image from 'next/image';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success('Form submitted successfully!');
    console.log(data);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div id='contact-now'
        className="py-16 bg-cover bg-center"
        style={{
          background: "linear-gradient(170deg, #F0F5FF, #F0F5FF 60%, white 60%, white)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-[32px] font-bold text-black mb-2">
                  Book your Free Appointment
                </h2>
                <p className="text-black text-lg">
                  Take the first step towards your parenthood journey.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                      <path
                        d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-black uppercase tracking-wider">CALL</p>
                    <p className="text-black">7670076006</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                      <path
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-black uppercase tracking-wider">EMAIL US</p>
                    <p className="text-black">care@sudhahospitals.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-black">Connect with us:</p>
                <div className="flex gap-3">
                  <Link
                    href="https://www.facebook.com/sudhafertilitycentre"
                    className="w-12 h-12 rounded-full flex cursor-pointer items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={fb} alt="Facebook" className="w-full h-full object-contain" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@sudhafertilitycentre"
                    className="w-12 h-12 rounded-full flex cursor-pointer items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={youtube} alt="YouTube" className="w-full h-full object-contain" />
                  </Link>
                  <Link
                    href="https://instagram.com/sudhafertilitycentre/"
                    className="w-12 h-12 rounded-full flex cursor-pointer items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={Insta} alt="Instagram" className="w-full h-full object-contain" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-3xl shadow-xl p-8 bg-white z-30 relative">
              <h3 className="text-xl font-semibold text-black mb-8">Quick Enquiry</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <div className='flex justify-between'>
                  <label htmlFor="name" className="block text-sm text-black mb-1">
                    Name (Required)
                  </label>
                   <p>{errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}</p>
                  </div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none"
                  />
                  
                </div>

                <div>
                  <div className='flex justify-between'>
                  <label htmlFor="email" className="block text-sm text-black mb-1">
                    Email (Optional)
                  </label>
                  <p>{errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}</p>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    {...register('email', { 
                      pattern: { 
                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 
                        message: 'Invalid email address' 
                      } 
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none"
                  />
                  
                </div>

                <div>
                 <div className='flex justify-between'>
                 <label htmlFor="mobile" className="block text-sm text-black mb-1">
                    Mobile (Required)
                  </label>
                  <p> {errors.mobile && <span className="text-red-500 text-xs">{errors.mobile.message}</span>}
                  </p>
                 </div>
                  <input
                    type="tel"
                    id="mobile"
                    placeholder="Enter your Mobile"
                    maxLength={10}
                    onKeyPress={(e) => {
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    {...register('mobile', { 
                      required: 'Mobile number is required',
                      pattern: { 
                        value: /^[0-9]{10}$/, 
                        message: 'Please enter a valid 10-digit mobile number' 
                      } 
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e3a8a] text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  Enquire Now
                  <MdArrowOutward className="rotate-45" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
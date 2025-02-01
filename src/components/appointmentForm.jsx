import React from 'react';

function AppointmentForm({ onSubmit }) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4">
        Ready to Start Your Journey to Meet Your Little One?
      </h2>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Location</label>
          <select
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Select Location</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-[#173366] text-white py-2 px-4 rounded-lg hover:bg-[#173366] transition-all flex justify-center items-center"
        >
          Book A Free Appointment →
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
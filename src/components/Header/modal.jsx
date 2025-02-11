import { useState } from "react";
import { X } from "lucide-react";
import Button from "../button/button";

const RequestCallModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", state: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black text-center">Request a Call</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-red-500">
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            required
          />

          <input
            type="text"
            name="state"
            placeholder="Your State"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            required
          />

         <div className="flex justify-center ">
         <Button title={"Submit"}/>
         </div>
        </form>
      </div>
    </div>
  );
};

export default RequestCallModal;

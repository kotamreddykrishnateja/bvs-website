import React, { useState } from "react";
import Swal from "sweetalert2";

const ConsultationPopupForm = ({ isOpen, onClose }) => {
  const [disable, setDisable] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);

    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    try {
      const response = await fetch(import.meta.env.VITE_API_KEY, {
        method: "POST",
        body: formData,
      });
      const result = await response.text();
      if (result) {
        Swal.fire({
          title: "Thank You For Booking Free Consulting",
          text: "Our Team Contact You As Soon",
          icon: "success",
          confirmButtonColor: "#00FF00",
        });
        console.log(result);
        onClose();
        setDisable(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4 hidden">
            <label className="block text-gray-700 mb-2">FormType</label>
            <input
              type="text"
              name="formType"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="consultation"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="Name"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="Phone"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="Email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">write your Query</label>
            <input
              type="text"
              name="Query"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder=""
              required
            />
          </div>

          <button
            disabled={disable}
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded-md"
          >
            {" "}
            {disable ? "submitting..." : "submit"}
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ConsultationPopupForm;

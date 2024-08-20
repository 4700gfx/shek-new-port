import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="relative bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <button
          className="absolute top-2 right-2 text-gray-800"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <form
          action="https://formspree.io/f/mldrwalo"  // Replace with your Form ID
          method="POST"
          target="_blank"
        >
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
            <input
              className="w-full px-4 py-2 bg-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              placeholder="Enter your name"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
            <input
              className="w-full px-4 py-2 bg-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              placeholder="Enter your email"
              name="email"
              id="email"
              type="email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="phone">Your Phone Number</label>
            <input
              className="w-full px-4 py-2 bg-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              placeholder="Enter your phone number"
              name="phone"
              id="phone"
              type="tel"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
            <textarea
              className="w-full px-4 py-2 bg-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              rows="4"
              placeholder="Enter your message"
              name="message"
              id="message"
              required
            ></textarea>
          </div>
          <button
            className="w-full bg-deepRed text-white py-2 px-4 rounded-lg hover:bg-black transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

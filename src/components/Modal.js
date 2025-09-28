import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-3xl shadow-2xl max-w-md w-full mx-4 border border-gray-700">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition duration-300 p-1"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="font-roboto font-medium text-3xl md:text-4xl bg-white bg-clip-text text-transparent mb-2">
            Contact Us
          </h2>
          <p className="font-hankenGrotesk font-normal text-gray-300 text-sm">
            Ready to bring your vision to life? Let's connect!
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/mldrwalo"
          method="POST"
          target="_blank"
          className="space-y-4"
        >
          <div>
            <label className="block text-white font-hankenGrotesk font-medium mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-70 transition duration-300 border border-gray-600"
              placeholder="Enter your name"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>

          <div>
            <label className="block text-white font-hankenGrotesk font-medium mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-70 transition duration-300 border border-gray-600"
              placeholder="Enter your email"
              name="email"
              id="email"
              type="email"
              required
            />
          </div>

          <div>
            <label className="block text-white font-hankenGrotesk font-medium mb-2" htmlFor="phone">
              Your Phone Number
            </label>
            <input
              className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-70 transition duration-300 border border-gray-600"
              placeholder="Enter your phone number"
              name="phone"
              id="phone"
              type="tel"
              required
            />
          </div>

          <div>
            <label className="block text-white font-hankenGrotesk font-medium mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-70 transition duration-300 border border-gray-600 resize-none"
              rows="4"
              placeholder="Tell us about your project..."
              name="message"
              id="message"
              required
            ></textarea>
          </div>

          <button
            className="w-full bg-gray-600 text-white py-3 px-6 rounded-full font-hankenGrotesk font-medium hover:bg-white hover:text-black transition duration-300 mt-6"
            type="submit"
          >
            Send Message 📧
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
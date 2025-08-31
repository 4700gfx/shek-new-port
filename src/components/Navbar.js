import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/images/4700gfxwhite.png';
import Modal from './Modal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLeadMagnetDropdown, setShowLeadMagnetDropdown] = useState(false);
  const location = useLocation();

  const tabs = {
    home: "Home",
    techSection: "Tech Section",
    aboutMe: "About Me",
    experience: "Experience",
    projects: "Projects",
  };

  const leadMagnets = [
    { path: "/website-audit", title: "Free Website Audit", icon: "🌐" },
    { path: "/checklist", title: "Success Checklist", icon: "✅" },
    { path: "/transformation-guide", title: "4-Week Transformation", icon: "📖" }
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
  ];

  const isOnLandingPage = location.pathname !== '/';

  return (
    <header className={`sticky top-4 z-50 transition-all`}>
      <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-wrap items-center justify-between w-11/12 mx-auto p-3 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="h-16 w-auto" src={logo} alt="4700 GFX Logo" />
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-white hover:text-gray-300 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Menu Items */}
        <ul className={`md:flex md:items-center md:space-x-6 w-full md:w-auto absolute md:relative top-20 md:top-auto left-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl md:rounded-none p-4 md:p-0 transition-all duration-500 ${isOpen ? 'block' : 'hidden'}`}>
          
          {/* Page Links */}
          {!isOnLandingPage && Object.keys(tabs).map((tab) => (
            <li key={tab} className="mb-3 md:mb-0">
              <a
                href={`#${tab}`}
                className="block px-4 py-2 rounded-full font-bold relative overflow-hidden group transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full"></span>
                <span className="relative text-white group-hover:text-white transition-colors duration-300">{tabs[tab]}</span>
              </a>
            </li>
          ))}

          {/* Lead Magnets Dropdown */}
          <li
            className="relative mb-3 md:mb-0"
            onMouseEnter={() => setShowLeadMagnetDropdown(true)}
            onMouseLeave={() => setShowLeadMagnetDropdown(false)}
          >
            <span className="block px-4 py-2 rounded-full font-bold relative overflow-hidden group cursor-pointer transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full"></span>
              <span className="relative text-white group-hover:text-white transition-colors duration-300">Free Resources</span>
            </span>
            {showLeadMagnetDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl shadow-lg min-w-[200px]">
                {leadMagnets.map((magnet, index) => (
                  <Link
                    key={index}
                    to={magnet.path}
                    className="flex items-center gap-2 px-4 py-3 text-white hover:text-gray-200 hover:bg-gray-600 rounded-t-lg transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => {
                      setIsOpen(false);
                      setShowLeadMagnetDropdown(false);
                    }}
                  >
                    <span className="text-lg">{magnet.icon}</span>
                    <span className="text-sm">{magnet.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Landing Page Link */}
          {isOnLandingPage && (
            <li>
              <Link
                to="/"
                className="block px-4 py-2 rounded-full font-bold relative overflow-hidden group transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full"></span>
                <span className="relative text-white group-hover:text-white transition-colors duration-300">← Back to Home</span>
              </Link>
            </li>
          )}
        </ul>

        {/* Social Icons & Contact */}
        <div className="flex items-center space-x-4 mt-3 md:mt-0">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transition-transform duration-300"
            >
              {social.icon}
            </a>
          ))}

          <button
            className="relative flex items-center px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-800 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => setIsModalOpen(true)}
          >
            Contact Me
          </button>
        </div>
      </nav>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Navbar;

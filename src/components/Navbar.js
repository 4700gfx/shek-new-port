import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/images/4700gfxwhite.png';
import Modal from './Modal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLeadMagnetDropdown, setShowLeadMagnetDropdown] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  const tabs = {
    home: "Home",
    techSection: "Tech Section",
    aboutMe: "About Me",
    custom: "Custom",
    projects: "Projects",
  };

  const leadMagnets = [
    { path: "/website-audit", title: "Free Website Audit", icon: "🌐" },
    { path: "/checklist", title: "Success Checklist", icon: "✅" },
    { path: "/transformation-guide", title: "4-Week Transformation", icon: "📖" }
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://x.com/4700gfx" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/4700gfx/" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/shekelton-jean-b7805a18a/" },
  ];

  const isOnLandingPage = location.pathname !== '/';

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setShowLeadMagnetDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowLeadMagnetDropdown(false);
    }, 200); // 200ms delay before hiding
  };

  return (
    <header className={`sticky top-4 z-50 transition-all duration-300`}>
      <nav className="bg-gradient-to-r from-gray-800/95 to-gray-900/95 backdrop-blur-md text-white flex flex-wrap items-center justify-between w-11/12 mx-auto p-3 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border border-gray-700/50">
        
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" 
            src={logo} 
            alt="4700 GFX Logo" 
          />
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-white hover:text-purple-300 transition-all duration-300 rounded-lg hover:bg-gray-700/50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Menu Items */}
        <ul className={`md:flex md:items-center md:space-x-6 w-full md:w-auto absolute md:relative top-20 md:top-auto left-0 bg-gradient-to-r from-gray-800/95 to-gray-900/95 backdrop-blur-md rounded-2xl md:rounded-none p-4 md:p-0 transition-all duration-500 transform ${
          isOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-4 opacity-0 invisible md:translate-y-0 md:opacity-100 md:visible'
        } border border-gray-700/50 md:border-none shadow-xl md:shadow-none`}>
          
          {/* Page Links */}
          {!isOnLandingPage && Object.keys(tabs).map((tab, index) => (
            <li key={tab} className="mb-3 md:mb-0">
              <a
                href={`#${tab}`}
                className="block px-5 py-2.5 rounded-full font-semibold relative overflow-hidden group transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full opacity-0 group-hover:opacity-100"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"></span>
                <span className="relative text-white group-hover:text-white transition-all duration-300 group-hover:drop-shadow-lg">
                  {tabs[tab]}
                </span>
              </a>
            </li>
          ))}

          {/* Lead Magnets Dropdown */}
          <li
            className="relative mb-3 md:mb-0"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <span className="block px-5 py-2.5 rounded-full font-semibold relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full opacity-0 group-hover:opacity-100"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"></span>
              <span className="relative text-white group-hover:text-white transition-all duration-300 group-hover:drop-shadow-lg flex items-center gap-1">
                Free Resources
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${showLeadMagnetDropdown ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </span>
            
            {/* Dropdown Menu with improved positioning */}
            <div className={`absolute top-full left-0 w-64 transition-all duration-300 transform ${
              showLeadMagnetDropdown 
                ? 'translate-y-0 opacity-100 visible' 
                : '-translate-y-2 opacity-0 invisible'
            }`}>
              {/* Invisible bridge to prevent gaps */}
              <div className="h-2 w-full"></div>
              
              <div className="bg-gradient-to-r from-gray-700/95 to-gray-800/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-600/50 overflow-hidden">
                {leadMagnets.map((magnet, index) => (
                  <Link
                    key={index}
                    to={magnet.path}
                    className="flex items-center gap-3 px-5 py-4 text-white hover:text-white hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 group border-b border-gray-600/30 last:border-b-0 relative overflow-hidden"
                    onClick={() => {
                      setIsOpen(false);
                      setShowLeadMagnetDropdown(false);
                    }}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {magnet.icon}
                    </span>
                    <span className="text-sm font-medium relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                      {magnet.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Landing Page Link */}
          {isOnLandingPage && (
            <li>
              <Link
                to="/"
                className="block px-5 py-2.5 rounded-full font-semibold relative overflow-hidden group transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full opacity-0 group-hover:opacity-100"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"></span>
                <span className="relative text-white group-hover:text-white transition-all duration-300 group-hover:drop-shadow-lg">
                  ← Back to Home
                </span>
              </Link>
            </li>
          )}
        </ul>

        {/* Social Icons & Contact */}
        <div className={`flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 md:mt-0 w-full sm:w-auto ${isOpen ? 'block' : 'hidden md:flex'}`}>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full hover:scale-110 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="group-hover:drop-shadow-lg transition-all duration-300">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <button
            className="relative flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-gray-600/80 to-gray-700/80 hover:from-purple-600 hover:to-pink-600 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 backdrop-blur-sm border border-gray-600/50 hover:border-purple-500/50 group overflow-hidden"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative group-hover:drop-shadow-lg transition-all duration-300">
              Contact Me
            </span>
          </button>
        </div>
      </nav>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Navbar;
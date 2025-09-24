import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/images/4700gfxwhite.png';
import Modal from './Modal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLeadMagnetDropdown, setShowLeadMagnetDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  // Enhanced scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = {
    home: "Home",
    techSection: "Tech Section",
    aboutMe: "About Me",
    custom: "Custom",
    projects: "Projects",
  };

  const leadMagnets = [
    { path: "/website-audit", title: "Free Website Audit", icon: "🌐", desc: "Comprehensive site analysis" },
    { path: "/checklist", title: "Success Checklist", icon: "✅", desc: "Step-by-step guide" },
    { path: "/transformation-guide", title: "4-Week Transformation", icon: "📖", desc: "Complete makeover plan" }
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter />, link: "https://x.com/4700gfx", label: "Twitter" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/4700gfx/", label: "Instagram" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/shekelton-jean-b7805a18a/", label: "LinkedIn" },
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
    }, 200);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 ${
      isScrolled ? 'pt-2' : 'pt-6'
    }`}>
      <nav className={`bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl text-white flex flex-wrap items-center justify-between max-w-7xl mx-auto px-4 py-3 transition-all duration-500 border border-gray-700/30 ${
        isScrolled 
          ? 'rounded-2xl shadow-2xl shadow-purple-500/5' 
          : 'rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/10'
      } hover:border-purple-500/20`}>
        
        {/* Logo with enhanced animation */}
        <Link to="/" className="flex items-center group relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-500 blur-sm"></div>
          <img 
            className={`transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-lg relative ${
              isScrolled ? 'h-12' : 'h-16'
            }`} 
            src={logo} 
            alt="4700 GFX Logo" 
          />
        </Link>

        {/* Enhanced Hamburger Menu */}
        <button
          className="md:hidden p-3 text-white hover:text-purple-300 transition-all duration-300 rounded-xl hover:bg-gray-700/50 backdrop-blur-sm border border-transparent hover:border-purple-500/30 group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
              isOpen ? 'rotate-45 top-3' : 'top-1'
            }`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 top-3 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
              isOpen ? '-rotate-45 top-3' : 'top-5'
            }`}></span>
          </div>
        </button>

        {/* Enhanced Menu Items */}
        <ul className={`md:flex md:items-center md:space-x-2 w-full md:w-auto absolute md:relative top-full md:top-auto left-0 right-0 md:right-auto bg-gradient-to-b md:bg-none from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl rounded-2xl md:rounded-none p-6 md:p-0 mt-4 md:mt-0 mx-4 md:mx-0 transition-all duration-500 transform border border-gray-700/50 md:border-none shadow-2xl md:shadow-none ${
          isOpen 
            ? 'translate-y-0 opacity-100 visible scale-100' 
            : '-translate-y-8 opacity-0 invisible scale-95 md:translate-y-0 md:opacity-100 md:visible md:scale-100'
        }`}>
          
          {/* Page Navigation Links */}
          {!isOnLandingPage && Object.keys(tabs).map((tab, index) => (
            <li key={tab} className="mb-2 md:mb-0" style={{ animationDelay: `${index * 75}ms` }}>
              <a
                href={`#${tab}`}
                className="block px-4 py-3 md:py-2 rounded-xl font-medium relative overflow-hidden group transition-all duration-300 hover:scale-105 text-gray-200 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {/* Enhanced hover effects */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-pink-500/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:via-pink-500/30 group-hover:to-purple-600/20 transition-all duration-500 rounded-xl"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 rounded-xl"></span>
                <span className="relative transition-all duration-300 group-hover:drop-shadow-lg">
                  {tabs[tab]}
                </span>
              </a>
            </li>
          ))}

          {/* Enhanced Lead Magnets Dropdown */}
          <li
            className="relative mb-2 md:mb-0"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <span className="block px-4 py-3 md:py-2 rounded-xl font-medium relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 text-gray-200 hover:text-white">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-pink-500/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:via-pink-500/30 group-hover:to-purple-600/20 transition-all duration-500 rounded-xl"></span>
              <span className="relative flex items-center gap-2 transition-all duration-300 group-hover:drop-shadow-lg">
                <span className="text-lg">🎁</span>
                Free Resources
                <svg 
                  className={`w-4 h-4 transition-all duration-300 ${showLeadMagnetDropdown ? 'rotate-180 text-purple-300' : 'text-gray-400'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </span>
            
            {/* Enhanced Dropdown Menu */}
            <div className={`absolute top-full left-0 w-80 md:w-72 transition-all duration-300 transform z-20 ${
              showLeadMagnetDropdown 
                ? 'translate-y-2 opacity-100 visible scale-100' 
                : 'translate-y-0 opacity-0 invisible scale-95'
            }`}>
              <div className="bg-gradient-to-br from-gray-800/98 via-gray-700/98 to-gray-800/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-600/50 overflow-hidden mt-2">
                <div className="p-2">
                  {leadMagnets.map((magnet, index) => (
                    <Link
                      key={index}
                      to={magnet.path}
                      className="flex items-start gap-4 px-4 py-4 text-white hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 group rounded-xl mb-1 last:mb-0 relative overflow-hidden border border-transparent hover:border-purple-500/30"
                      onClick={() => {
                        setIsOpen(false);
                        setShowLeadMagnetDropdown(false);
                      }}
                      style={{ animationDelay: `${index * 75}ms` }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-300"></span>
                      <span className="text-2xl group-hover:scale-110 transition-all duration-300 relative z-10 mt-1">
                        {magnet.icon}
                      </span>
                      <div className="flex-1 relative z-10">
                        <span className="block text-sm font-semibold group-hover:translate-x-1 transition-all duration-300 text-white">
                          {magnet.title}
                        </span>
                        <span className="block text-xs text-gray-400 group-hover:text-gray-300 transition-all duration-300 mt-1">
                          {magnet.desc}
                        </span>
                      </div>
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-purple-400 text-sm relative z-10">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </li>

          {/* Back to Home Link */}
          {isOnLandingPage && (
            <li className="mb-2 md:mb-0">
              <Link
                to="/"
                className="block px-4 py-3 md:py-2 rounded-xl font-medium relative overflow-hidden group transition-all duration-300 hover:scale-105 text-gray-200 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-pink-500/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:via-pink-500/30 group-hover:to-purple-600/20 transition-all duration-500 rounded-xl"></span>
                <span className="relative flex items-center gap-2 transition-all duration-300 group-hover:drop-shadow-lg">
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                  Back to Home
                </span>
              </Link>
            </li>
          )}
        </ul>

        {/* Enhanced Social Icons & Contact Section */}
        <div className={`flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 md:mt-0 w-full sm:w-auto ${isOpen ? 'block' : 'hidden md:flex'}`}>
          
          {/* Enhanced Social Icons */}
          <div className="flex items-center space-x-2">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-xl hover:scale-110 bg-gray-700/50 hover:bg-gradient-to-r hover:from-purple-600/50 hover:to-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group border border-gray-600/50 hover:border-purple-500/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="group-hover:drop-shadow-lg transition-all duration-300 text-gray-300 group-hover:text-white">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>

          {/* Enhanced Contact Button */}
          <button
            className="relative flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-gray-700/80 via-gray-600/80 to-gray-700/80 hover:from-purple-600 hover:via-pink-500 hover:to-purple-600 rounded-xl text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm border border-gray-600/50 hover:border-purple-400/50 group overflow-hidden"
            onClick={() => setIsModalOpen(true)}
          >
            {/* Animated background */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative group-hover:drop-shadow-lg transition-all duration-300 flex items-center gap-2">
              <span className="text-lg group-hover:animate-pulse">💬</span>
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
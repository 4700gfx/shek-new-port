import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const quickLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#aboutMe', icon: '👋' },
    { name: 'Services', href: '#techSection', icon: '⚡' },
    { name: 'Projects', href: '#projects', icon: '🎨' },
    { name: 'Contact', href: '#contact', icon: '📧' }
  ];

  const services = [
    { name: 'Web Design', icon: '🎨' },
    { name: 'Development', icon: '💻' },
    { name: 'SEO Optimization', icon: '🚀' },
    { name: 'Brand Identity', icon: '✨' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/4700gfx/', color: 'from-pink-500 to-purple-600' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/shekelton-jean-b7805a18a/', color: 'from-blue-500 to-blue-600' },
    { name: 'Twitter', icon: <FaTwitter />, href: 'https://x.com/4700gfx', color: 'from-blue-400 to-blue-500' },
    { name: 'Facebook', icon: <FaFacebookF />, href: 'https://facebook.com', color: 'from-blue-600 to-blue-700' }
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: '4700gfx@gmail.com', type: 'email' },
    { icon: <FaPhone />, text: '+1 (786) 309-8642', type: 'phone' },
    { icon: <FaMapMarkerAlt />, text: 'Florida, USA', type: 'location' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white w-full max-w-7xl mx-auto mb-6 rounded-3xl shadow-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-blue-500 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-10">
            
            {/* Company Info - Enhanced */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <div className="group">
                <h3 className="font-bold text-2xl mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-500">
                  4700 GFX Studios
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto lg:mx-0 mb-4 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6 hover:text-gray-200 transition-colors duration-300">
                Transforming businesses through exceptional web design and development. 
                We craft digital experiences that captivate and convert.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 hover:text-purple-300 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-purple-600/20 group-hover:scale-110 transition-all duration-300">
                      {contact.icon}
                    </span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                      {contact.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links - Enhanced */}
            <div className="text-center lg:text-left">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-purple-400">🔗</span>
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-white transition-all duration-300 group p-2 rounded-lg hover:bg-gray-700/30"
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className={`text-lg transition-all duration-300 ${hoveredLink === index ? 'scale-125 rotate-12' : ''}`}>
                      {link.icon}
                    </span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services - New Section */}
            <div className="text-center lg:text-left">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-pink-400">⚡</span>
                Our Services
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-white transition-all duration-300 group p-2 rounded-lg hover:bg-gray-700/30"
                  >
                    <span className="text-lg group-hover:scale-125 transition-all duration-300">
                      {service.icon}
                    </span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media & CTA - Enhanced */}
            <div className="text-center lg:text-left">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-blue-400">🌟</span>
                Connect With Us
              </h4>
              
              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-gray-700/50 hover:bg-gradient-to-r hover:${social.color} rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-6 hover:shadow-lg group border border-gray-600/50 hover:border-transparent`}
                    title={social.name}
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 group-hover:scale-110">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>

              {/* Newsletter/CTA */}
              <div className="bg-gradient-to-r from-gray-700/30 to-gray-600/30 p-6 rounded-2xl border border-gray-600/30 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group">
                <h5 className="font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                  Ready to Transform Your Business? 🚀
                </h5>
                <p className="text-xs text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Let's create something amazing together
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25 text-sm">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section - Enhanced */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">©</span>
                  <span>{new Date().getFullYear()} 4700 GFX Studios. All rights reserved.</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span>Made with</span>
                  <span className="text-red-400 animate-pulse">❤️</span>
                  <span>in Florida</span>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, index) => (
                  <a 
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-purple-300 transition-all duration-300 hover:underline hover:underline-offset-4 decoration-purple-400"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 bg-gradient-to-r from-gray-700/50 to-gray-600/50 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25 text-sm border border-gray-600/50 hover:border-purple-500/50 group"
              >
                <span className="group-hover:animate-bounce">
                  <FaArrowUp className="w-3 h-3" />
                </span>
                <span>Back to Top</span>
              </button>
            </div>
          </div>

          {/* Subtle branding */}
          <div className="text-center mt-8 pt-4 border-t border-gray-800/50">
            <p className="text-xs text-gray-500 hover:text-gray-400 transition-colors duration-300">
              Crafting digital experiences since 2020 • Trusted by businesses worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

// Import your existing images (replace with actual imports)
import twitter from '../assets/images/twitter.png';
import facebook from '../assets/images/meta.png';
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#aboutMe' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Facebook', icon: '📘', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white w-full max-w-7xl mx-auto mb-6 rounded-2xl shadow-lg border border-gray-700">
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Company Info */}
            <div className="text-center lg:text-left">
              <h3 className="font-roboto font-bold text-xl mb-2 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
                4700 GFX Studios
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Transforming businesses through exceptional web design and development.
              </p>
              <div className="mt-3 text-gray-400 text-xs">
                📧 4700gfx@gmail.com • 📱 +1 (786) 309-8642
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
              <div className="flex justify-center gap-6 text-sm">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center lg:text-right">
              <h4 className="text-white font-semibold mb-3 text-sm">Connect With Us</h4>
              <div className="flex justify-center lg:justify-end gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
                    title={social.name}
                  >
                    <span className="text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-6 pt-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
              <div>
                © {new Date().getFullYear()} 4700 GFX Studios. All rights reserved.
              </div>
              <div className="flex gap-4">
                <a href="#privacy" className="hover:text-gray-200 transition-colors duration-300">
                  Privacy
                </a>
                <a href="#terms" className="hover:text-gray-200 transition-colors duration-300">
                  Terms
                </a>
                <a href="#contact" className="hover:text-gray-200 transition-colors duration-300">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
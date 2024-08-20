import React from 'react';
import twitter from '../assets/images/twitter.png';
import facebook from '../assets/images/meta.png';
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';

const Footer = () => {
  return (
    <footer className="bg-deepRed text-white py-8 w-11/12 mx-auto mb-4 rounded-3xl">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="footer-column flex-1">
            <h4 className="text-xl md:text-2xl font-semibold mb-4 text-black hover:text-gray-400">Main Website</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Featured Nails</a></li>
            </ul>
          </div>

          <div className="footer-column flex-1">
            <h4 className="text-xl md:text-2xl font-semibold mb-4 text-black hover:text-gray-400">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Hand Scrub</a></li>
              <li><a href="#" className="hover:text-gray-400">Lioness's Cuticle Oil</a></li>
              <li><a href="#" className="hover:text-gray-400">Lioness's Mini Cuticle</a></li>
            </ul>
          </div>

          <div className="footer-column flex-1">
            <h4 className="text-xl md:text-2xl font-semibold mb-4 text-black hover:text-gray-400">About Me</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-400">More Information</a></li>
            </ul>
          </div>

          <div className="footer-column flex-1">
            <h4 className="text-xl md:text-2xl font-semibold mb-4 text-black hover:text-gray-400">Follow Me</h4>
            <div className="flex flex-row space-x-4 justify-center md:justify-start">
              <a href="#"><img src={instagram} alt="Instagram" className="w-8 h-8 md:w-10 md:h-10" /></a>
              <a href="#"><img src={twitter} alt="Twitter" className="w-8 h-8 md:w-10 md:h-10" /></a>
              <a href="#"><img src={linkedin} alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10" /></a>
              <a href="#"><img src={facebook} alt="Facebook" className="w-8 h-8 md:w-10 md:h-10" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

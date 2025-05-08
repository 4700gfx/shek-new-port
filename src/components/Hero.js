import React, { useEffect, useState } from 'react';
import logo from '../assets/images/4700gfxwhite.png';

const Hero = () => {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    const heroSection = document.querySelector('.hero-container');
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (!isInView) {
        setIsLeaving(true);
      } else {
        setIsLeaving(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Check screen size on mount
    setIsMobile(window.innerWidth <= 768); // 768px is a typical breakpoint for mobile
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='hero'>
      <div
        className={`hero-container bg-darkRed h-auto w-11/12 md:w-4/5 p-4 md:p-8 lg:p-10 my-10 mx-auto flex flex-col lg:flex-row justify-center items-center rounded-3xl ${
          !isLeaving && !isMobile ? 'fade-in-up' : isMobile ? '' : 'fade-out'
        }`}
      >
        <img
          className='w-3/4 mt-10 lg:w-auto lg:mr-10 mb-6 lg:mb-0'
          src={logo}
          alt="hero-content"
        />
        <div className='hero-text flex flex-col w-full lg:w-1/2 text-center lg:text-left'>
          <h1 className='font-roboto font-medium text-4xl md:text-5xl lg:text-7xl my-2 bg-gradient-to-r from-white to-gray-900 bg-clip-text text-transparent'>
            Welcome To 4700 GFX Studios!
          </h1>
          <h2 className='font-roboto font-semibold text-xl md:text-2xl lg:text-3xl my-1'>
            Brand & Web Design Agency 💻
          </h2>
          <p className='font-hankenGrotesk font-normal mb-4 text-sm md:text-base'>
          At 4700 GFX Studios, we specialize in building dynamic, user-centric web applications using modern technologies like React, Node.js, and Tailwind CSS. Our team is passionate about transforming ideas into powerful digital solutions through clean, efficient code and visually striking designs for a reasonable budget. From front-end interfaces to back-end architecture and intuitive UI/UX experiences, we’re dedicated to crafting seamless, impactful digital products. Let’s create something extraordinary together.
          </p>
          <p className='font-hankenGrotesk font-normal mb-4 text-sm md:text-base'>
          With a keen eye for detail and a commitment to quality, 4700 GFX Studio leverages tools like Figma, React, and Tailwind CSS to design and develop custom landing pages and digital solutions for Small and Medium Businesses. Ready to bring your vision to life? Click the button below to get started.
          </p>
          <div className='hero-buttons flex flex-col lg:flex-row mt-4'>
            <button
              className='bg-gray-500 text-white mb-3 lg:mb-0 lg:mr-3 w-full lg:w-1/6 p-2 md:p-3 text-sm md:text-base rounded-full hover:bg-grey-900 transition duration-300'
            >
              Download
            </button>
            <button
              className='bg-gray-500 text-white mb-3 lg:mb-0 lg:mr-3 w-full lg:w-1/6 p-2 md:p-3 text-sm md:text-base rounded-full hover:bg-grey-900 transition duration-300'
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

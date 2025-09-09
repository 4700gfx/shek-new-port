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
        className={`hero-container bg-gradient-to-br from-gray-800 to-gray-900 h-auto w-11/12 md:w-4/5 p-4 md:p-8 lg:p-2 my-10 mx-auto flex flex-col lg:flex-row justify-center items-center rounded-3xl ${
          !isLeaving && !isMobile ? 'fade-in-up' : isMobile ? '' : 'fade-out'
        }`}
      >
        <img
          className='w-3/4 mt-10 lg:w-auto lg:mr-10 mb-6 lg:mb-0'
          src={logo}
          alt="hero-content"
        />
        <div className='hero-text flex flex-col w-full lg:w-1/2 text-center lg:text-left'>
          <h1 className='font-roboto font-medium text-4xl md:text-5xl lg:text-7xl my-2 bg-white bg-clip-text text-transparent'>
            Welcome To 4700 GFX Studios!
          </h1>
          <h2 className='font-roboto font-semibold text-xl md:text-2xl lg:text-3xl my-1'>
            Brand & Web Design Agency 💻
          </h2>
          <p className='font-hankenGrotesk font-normal mb-4 text-sm md:text-md'>
            At 4700 GFX Studios, we design and develop modern, user-friendly websites and web applications that help businesses of all sizes—whether you’re just starting out or scaling to the next level. Our team blends clean, efficient code with sleek, responsive design and technologies to deliver digital solutions that don’t just look good—they work even better. From intuitive front-end experiences to reliable back-end systems, we make sure your online presence drives results without breaking your budget.
          </p>
          <h2 className='font-bold text-md'>Ready to bring your vision to life? Let’s get started today ⬇️.</h2>
            <button
              className='bg-gray-600 text-white my-3 lg:mb-0 lg:mr-3 w-full lg:w-1/3 p-2 md:p-3 text-sm md:text-base rounded-full hover:bg-white hover:text-black hover:bg-grey-900 transition duration-300'
            >
            <a href='https://calendly.com/4700gfx/website-review-and-consultation' target='_blank'>
              Schedule A Call 📞
            </a>
            </button>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;

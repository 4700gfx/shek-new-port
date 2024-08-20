import React, { useEffect, useState } from 'react';
import emoji from '../assets/images/emoji1.png';

const Hero = () => {
  const [isLeaving, setIsLeaving] = useState(false);

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='hero'>
      <div
        className={`hero-container bg-darkRed h-auto w-11/12 md:w-4/5 p-4 md:p-8 lg:p-10 my-10 mx-auto flex flex-col lg:flex-row justify-center items-center rounded-3xl ${!isLeaving ? 'fade-in-up' : 'fade-out'}`}
      >
        <img
          className='w-3/4 mt-10 lg:w-auto lg:mr-10 mb-6 lg:mb-0'
          src={emoji}
          alt="hero-content"
        />
        <div className='hero-text flex flex-col w-full lg:w-1/2 text-center lg:text-left'>
          <h1 className='font-roboto font-medium text-4xl md:text-5xl lg:text-7xl my-2 bg-gradient-to-r from-deepRed to-gray-400 bg-clip-text text-transparent'>
            Hi! My Name is Shekelton!
          </h1>
          <h2 className='font-roboto font-semibold text-xl md:text-2xl lg:text-3xl my-1'>
            React & Python Developer 💻
          </h2>
          <p className='font-hankenGrotesk font-normal mb-4 text-sm md:text-base'>
            I specialize in building dynamic, user-centric applications using technologies like React, Node.js, and Tailwind CSS. I love turning ideas into reality with clean, efficient code and visually appealing designs. Whether it's front-end development, back-end logic, or UI/UX design, I'm passionate about crafting seamless digital experiences that leave a lasting impact. Let's build something amazing together!
          </p>
          <p className='font-hankenGrotesk font-normal mb-4 text-sm md:text-base'>
            With a keen eye for detail and a commitment to excellence, I leverage tools like Figma to create intuitive interfaces and Tailwind CSS to ensure responsive, modern designs. My experience with React and Node.js allows me to build robust, scalable applications that perform seamlessly across devices. I thrive in collaborative environments where I can contribute my skills and learn from others. Let's connect and explore how we can bring your vision to life!
          </p>
          <div className='hero-buttons flex flex-col lg:flex-row mt-4'>
            <button
              className='bg-richRed mb-3 lg:mb-0 lg:mr-3 w-full lg:w-1/6 p-2 md:p-3 text-sm md:text-base rounded-full hover:bg-deepRed transition duration-300'
            >
              Download
            </button>
            <button
              className='bg-richRed w-full lg:w-1/6 p-2 md:p-3 text-sm md:text-base rounded-full hover:bg-deepRed transition duration-300'
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

import React from 'react';
import emoji from '../assets/images/emoji1.png';

const Hero = () => {
  return (
    <section>
      <div className='hero-container bg-darkRed h-auto w-4/5 p-2 my-10 mx-auto flex flex-col lg:flex-row justify-center items-center rounded-2xl'>
        <img className='w-3/4 mt-10 lg:w-auto lg:mr-10 mb-6 lg:mb-0' src={emoji} alt="hero-content" />
        <div className='hero-text flex flex-col w-full lg:w-1/2 text-center lg:text-left'>
          <h1 className='font-roboto font-medium text-7xl my-2 text-deepRed'>
            Hi! My Name is Shekelton!
          </h1>
          <h2 className='font-roboto font-semibold text-3xl my-1'>
            React & Python Developer 💻
          </h2>
          <p className='font-hankenGrotesk font-normal mb-4'>
            I specialize in building dynamic, user-centric applications using technologies like React, Node.js, and Tailwind CSS. I love turning ideas into reality with clean, efficient code and visually appealing designs. Whether it's front-end development, back-end logic, or UI/UX design, I'm passionate about crafting seamless digital experiences that leave a lasting impact. Let's build something amazing together!
          </p>

          <p className='font-hankenGrotesk font-normal'>
          With a keen eye for detail and a commitment to excellence, I leverage tools like Figma to create intuitive interfaces and Tailwind CSS to ensure responsive, modern designs. My experience with React and Node.js allows me to build robust, scalable applications that perform seamlessly across devices. I thrive in collaborative environments where I can contribute my skills and learn from others. Let's connect and explore how we can bring your vision to life!
          </p>

          <div className='hero-buttons flex flex-col lg:flex-row mt-4'>
            <button className='bg-richRed mb-3 lg:mb-0 lg:mr-3 w-full lg:w-1/6 p-2 rounded-full hover:bg-deepRed transition duration-300'>
              Download
            </button>
            <button className='bg-richRed w-1/8 lg:w-1/6 p-2 rounded-full hover:bg-deepRed transition duration-300'>
              Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

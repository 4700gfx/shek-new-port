import React, { useState } from 'react';
import logo from '../assets/images/4700GFX.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = {
    home: "Home",
    aboutMe: "About Me",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
  };

  return (
    <header>
      <nav className='bg-darkRed text-white flex items-center justify-between w-4/5 mx-auto my-5 rounded-3xl p-3'>
        <img className='h-16 w-auto mb-2' src={logo} alt="logo" />
        {/* Hamburger Menu Button */}
        <button 
          className='block md:hidden p-2' 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
        {/* Menu */}
        <ul className={`mr-10 md:flex md:flex-row md:space-x-8 absolute md:relative bg-darkRed ${isOpen ? 'w-4/5' : 'hidden'} md:w-auto md:space-x-8 top-16 md:top-auto left-0 ${isOpen ? 'block' : 'hidden'} md:block ml-24`}>
          {Object.keys(tabs).map((nav) => (
            <li className='m-4 p-4 transition-transform duration-300 ease-in-out transform hover:bg-deepRed hover:rounded-full hover:text-white hover:scale-105'>
              {tabs[nav]}
            </li>
          ))}
        </ul>

        <button
          class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-deepRed rounded-md group"
        >
          <span
            class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-deepRed rounded group-hover:-mr-4 group-hover:-mt-4"
          >
            <span
              class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
            ></span>
          </span>
          <span
            class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-deepRed rounded group-hover:-ml-4 group-hover:-mb-4"
          >
            <span
              class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
            ></span>
          </span>
          <span
            class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-deepRed rounded-md group-hover:translate-x-0"
          ></span>
          <span
            class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
            >Contact Me</span>
        </button>

      </nav>
    </header>
  );
};

export default Navbar;

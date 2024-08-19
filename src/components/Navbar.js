import React from 'react';
import logo from '../assets/images/4700GFX.png';

const Navbar = () => {
  const tabs = {
    home: "Home",
    aboutMe: "About Me",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
  };

  return (
    <header>
      <nav className='bg-darkRed text-white flex items-center justify-between w-4/5 mx-auto my-5 rounded-2xl p-3'>
        <img className='h-16 w-auto mb-2' src={logo} alt="logo" />
        <ul className='flex space-x-8'>
          {Object.keys(tabs).map((nav) => (
            <li className='m-6' key={nav}>{tabs[nav]}</li>
          ))}
        </ul>
        <button className='bg-deepRed rounded-2xl h-12 px-6 mr-2'>Contact Me</button>
      </nav>
    </header>
  );
};

export default Navbar;

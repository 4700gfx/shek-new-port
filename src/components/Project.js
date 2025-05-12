import React, { useState, useEffect } from 'react';
import reelmate1 from '../assets/images/reelmate1.png';
import reelmate2 from '../assets/images/reelmate2.png';
import braveguidance1 from '../assets/images/braveguidance1.png'
import braveguidance2 from '../assets/images/braveguidance2.png'
import labelpic1 from '../assets/images/label1.png'
import labelpic2 from '../assets/images/label2.png'
import budgetify1 from '../assets/images/budgetify1.png';
import budgetify2 from '../assets/images/budgetify2.png';
import chefsous1 from '../assets/images/chefsous1.png';
import chefsous2 from '../assets/images/chefsous2.png';


const Project = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('projects-section');
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      name: 'Brave Guidance Landing Page',
      images: [braveguidance1, braveguidance2], 
      description: 'This was a landing page I created for a client. She is a therapist that needed a landing site for interested clients to sign up and review her information. This was a fairly quick landing page that was created using React, Tailwind and Motion for some of the animations',
      tags: ['⚛️ React', '💻 Tailwind CSS', '🧑🏿‍💻 Figma'],
      links: [
        { label: 'View Site', url: 'https://lioness-nails-new-page.vercel.app/' },
        { label: 'GitHub Repo', url: 'https://github.com/4700gfx/Lioness-Nails-New-Page' }
      ]
    },
    {
      name: 'Reelmates: Movie Database & Bucket List App 🍿',
      images: [reelmate1, reelmate2],
      description: 'This was a Project Application I created for personal use. I wanted to create an application that keeps track of all the different shows and movies that I would like to watch. This is a full stack application that includes React for the front end, and Firebase for the backend along with the TMBD API for all of the different API queries.',
      tags: ['⚛️ React', '💻 HTML', '🖥️ CSS', '📶 API'],
      links: [
        { label: 'View Site', url: 'https://reelmate-movie-app.vercel.app/' },
        { label: 'GitHub Repo', url: 'https://github.com/4700gfx/reelmate-movie-app' }
      ]
    },
    {
      name: '4700 Enterprises: Label Website Landing Page',
      images: [labelpic1, labelpic2],
      description: 'This was an application that I designed for an independent record label called 4700 Enteprises. This was a multi-page layout that will include a Blog section, as well as other features as the label continues to grow. This was made with React and Tailwind CSS',
      tags: ['⚛️ React', '💻 Tailwind CSS', '🧑🏿‍💻 Figma'],
      links: [
        { label: 'View Site', url: 'https://budgetify-expense-tracker-project.vercel.app/' },
        { label: 'GitHub Repo', url: 'https://github.com/4700gfx/Budgetify-Expense-Tracker-Project' }
      ]
    },
    {
      name: 'Chef Sous: Recipe Creator Application 🧑🏿‍🍳',
      images: [chefsous1, chefsous2],
      description: 'This project is one of my favorite projects. This was an introduction to APIs as I used the Edamam API to render different types of recipes based on different query that the user called. I also created the UI from a Figma file which allowed me to practice my CSS skills. This code was created in Vanilla JavaScript and was created with over 300 lines of code',
      tags: ['🍦 Vanilla JavaScript', '💻 HTML', '🖥️ CSS', '📶 API'],
      links: [
        { label: 'View Site', url: 'https://chef-sous-app.vercel.app/' },
        { label: 'GitHub Repo', url: 'https://github.com/4700gfx/Chef-Sous-App' }
      ]
    },
  ];

  return (
    <section id="projects-section" className='project-container w-11/12 md:w-4/5 mx-auto mt-18 mb-24'>
      <h1 className={`text-center font-roboto font-bold text-3xl mt-20 sm:text-4xl md:text-5xl mb-10 ${inView ? 'animate-fade-in' : ''}`}>
        Projects
      </h1>
      <div className='projects-section grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} inView={inView} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, inView }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div 
      className={`project bg-warmGray shadow-lg rounded-xl overflow-hidden flex flex-col lg:flex-row p-4 ${inView ? 'animate-fade-in' : ''}`}
    >
      <div className='carousel relative w-full lg:w-2/3'>
        <img 
          src={project.images[currentImageIndex]} 
          alt={`${project.name} screenshot`} 
          className='w-full h-96 mt-10 lg:h-76 object-cover rounded-lg'
        />
        <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2'>
          {project.images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-darkRed' : 'bg-gray-300'}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className='p-5 flex flex-col justify-between w-full lg:w-1/3'>
        <div>
          <h2 className={`text-xl lg:text-2xl font-bold text-black mb-3 ${inView ? 'animate-fade-in-left' : ''}`}>
            {project.name}
          </h2>
          <p className={`text-sm text-white mb-3 ${inView ? 'animate-fade-in-left' : ''}`}>
            {project.description}
          </p>
          <div className='tags flex flex-wrap mb-4'>
            {project.tags.map((tag, index) => (
              <span key={index} className={`bg-darkRed text-white text-s font-semibold mr-2 mb-2 px-2 py-1 rounded ${inView ? 'animate-fade-in-left' : ''}`}>
                {tag}
              </span>
            ))}
          </div>
          <div className='buttons flex flex-wrap'>
            {project.links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className={`bg-darkRed text-white text-sm font-semibold mr-2 mb-2 px-4 py-2 rounded-full hover:bg-opacity-80 transition duration-200 ${inView ? 'animate-fade-in-right' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

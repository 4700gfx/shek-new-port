import React, { useState, useEffect } from 'react';
import reelmate1 from '../assets/images/reelmate1.png';
import reelmate2 from '../assets/images/reelmate2.png';
import lionessnails1 from '../assets/images/lionessnails1.png';
import lionessnails2 from '../assets/images/lionessnails2.png';
import budgetify1 from '../assets/images/budgetify1.png';
import budgetify2 from '../assets/images/budgetify2.png';
import chefsous1 from '../assets/images/chefsous1.png';
import chefsous2 from '../assets/images/chefsous2.png';

const Project = () => {
  const projects = [
    {
      name: 'Lioness Nails Landing Page',
      images: [lionessnails1, lionessnails2], 
      description: 'This was a landing page I created for a client. She had her Shopify store via Shopify and she wanted to rebrand her website into a custom site. I used Vanilla JavaScript along with the Shopify API to connect her store to the website. This took about 250 lines of code.',
      tags: ['🍦 Vanilla JavaScript', '💻 HTML', '🖥️ CSS'],
      links: [
        { label: 'View Site', url: 'https://example.com/lionessnails' },
        { label: 'GitHub Repo', url: 'https://github.com/username/lionessnails' }
      ]
    },


    {
      name: 'Reelmates: Movie Database & Bucket List App',
      images: [reelmate1, reelmate2],
      description: 'This was a Project Application I created for personal use. I wanted to create an application that keeps track of all the different shows and movies that I would like to watch. This is a full stack application that includes React for the front end, and Firebase for the backend along with the TMBD API for all of the different API queries.',
      tags: ['🍦 Vanilla JavaScript', '💻 HTML', '🖥️ CSS'],
      links: [
        { label: 'View Site', url: 'https://example.com/reelmates' },
        { label: 'GitHub Repo', url: 'https://github.com/username/reelmates' }
      ]
    },
    // Add more projects here...
    {
      name: 'Budgetify: Budget Planning Application',
      images: [budgetify1, budgetify2],
      description: 'This was a Project Application I created for personal use. I wanted to create an application that keeps track of all the different shows and movies that I would like to watch. This is a full stack application that includes React for the front end, and Firebase for the backend along with the TMBD API for all of the different API queries.',
      tags: ['🍦 Vanilla JavaScript', '💻 HTML', '🖥️ CSS'],
      links: [
        { label: 'View Site', url: 'https://example.com/reelmates' },
        { label: 'GitHub Repo', url: 'https://github.com/username/reelmates' }
      ]
    },

    {
      name: 'Chef Sous: Recipe Creator Application',
      images: [chefsous1, chefsous2],
      description: 'This was a Project Application I created for personal use. I wanted to create an application that keeps track of all the different shows and movies that I would like to watch. This is a full stack application that includes React for the front end, and Firebase for the backend along with the TMBD API for all of the different API queries.',
      tags: ['🍦 Vanilla JavaScript', '💻 HTML', '🖥️ CSS'],
      links: [
        { label: 'View Site', url: 'https://example.com/reelmates' },
        { label: 'GitHub Repo', url: 'https://github.com/username/reelmates' }
      ]
    },
  ];

  return (
    <section className='project-container w-11/12 md:w-4/5 mx-auto mt-18 mb-24'>
      <h1 className="text-center font-roboto font-bold text-3xl mt-20 sm:text-4xl md:text-5xl mb-10">Projects</h1>
      <div className='projects-section grid grid-cols-1 md:grid-cols-2 gap-10'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className='project bg-warmGray shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row p-4'>
      <div className='carousel relative w-full md:w-2/3'>
        <img 
          src={project.images[currentImageIndex]} 
          alt={`${project.name} screenshot`} 
          className='w-full h-84 my-20 md:h-76 object-cover rounded-lg'
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
      <div className='p-5 flex flex-col justify-between w-full md:w-1/3'>
        <div>
          <h2 className='text-xl md:text-2xl font-bold text-black mb-3'>{project.name}</h2>
          <p className='text-white mb-3'>{project.description}</p>
          <div className='tags flex flex-wrap mb-4'>
            {project.tags.map((tag, index) => (
              <span key={index} className='bg-darkRed text-white text-xs font-semibold mr-2 mb-2 px-2 py-1 rounded'>{tag}</span>
            ))}
          </div>
          <div className='buttons flex flex-wrap'>
            {project.links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className='bg-darkRed text-white text-sm font-semibold mr-2 mb-2 px-4 py-2 rounded hover:bg-opacity-80 transition duration-200'
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

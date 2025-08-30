import React, { useState, useEffect, useCallback } from 'react';

// Import your existing images
import reelmate1 from '../assets/images/reelmate1.png';
import reelmate2 from '../assets/images/reelmate2.png';
import braveguidance1 from '../assets/images/braveguidance1.png';
import braveguidance2 from '../assets/images/braveguidance2.png';
import labelpic1 from '../assets/images/label1.png';
import labelpic2 from '../assets/images/label2.png';
import chefsous1 from '../assets/images/chefsous1.png';
import chefsous2 from '../assets/images/chefsous2.png';

const Project = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = useCallback(() => {
    const element = document.getElementById('projects-section');
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const threshold = windowHeight * 0.1;

    setInView(rect.top <= windowHeight - threshold && rect.bottom >= threshold);
  }, []);

  useEffect(() => {
    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 16);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const projects = [
    {
      id: 'brave-guidance',
      name: 'Brave Guidance',
      subtitle: 'Therapy Practice Landing Page',
      images: [braveguidance1, braveguidance2], 
      description: 'This project was for a Licensed Mental Health Therapist that needed a landing page for people that are interested in beginning with her practice. This was a fairly quick and smooth project using Figma for the design, React for the development and third party services such as FormSpree for any interested leads.',
      tags: ['⚛️ React', '💻 Tailwind CSS', '🎨 Figma Design', '📱 Responsive', 'Contact Form 📋'],
      category: 'Healthcare & Mental Health',
      links: [
        { label: 'View Live Site', url: 'https://https://www.braveguidance.com/', icon: '🌐' },
        { label: 'GitHub Repository', url: 'https://github.com/4700gfx/brave-guidance-page', icon: '💻' }
      ],
      animation: 'animate-fade-in-left'
    },
    {
      id: 'zubar',
      name: 'Zu Bar Lounge',
      subtitle: 'Landing Page for New Lounge & Workspace',
      images: [reelmate1, reelmate2],
      description: 'This project was a website requested by the client for a lounge that she is opening up. Due to her already running the business for a while, we did a redesign of her previous website in Wix while providing more functionality than she had before. We add new features such as a pop up window for a notifications and more.',
      tags: ['⚛️ React', '🔥 Firebase', '📡 TMDB API', '🔐 Auth'],
      category: 'Restaurants & Lounges',
      links: [
        { label: 'View Live Site', url: 'https://zubarfl.com/', icon: '🌐' },
        { label: 'GitHub Repository', url: 'https://github.com/4700gfx/zu-bar-landing', icon: '💻' }
      ],
      animation: 'animate-fade-in-up'
    },
    {
      id: 'label-website',
      name: '4700 Enterprises',
      subtitle: 'Record Label Website',
      images: [labelpic1, labelpic2],
      description: 'Multi-page website for an independent record label featuring artist showcases, blog integration, and scalable architecture. Designed for growth with modern aesthetics and seamless navigation. Created to scale with things such as e-Commerce, Blogs and Electronic Press Kits for interested parties',
      tags: ['⚛️ React', '💻 Tailwind CSS', '📝 Blog Ready', '🎵 Music Industry'],
      category: 'Music & Entertainment',
      links: [
        { label: 'View Live Site', url: 'https://budgetify-expense-tracker-project.vercel.app/', icon: '🌐' },
        { label: 'GitHub Repository', url: 'https://github.com/4700gfx/Budgetify-Expense-Tracker-Project', icon: '💻' }
      ],
      animation: 'animate-fade-in-right'
    },
    {
      id: 'manifests-of-hope',
      name: 'Manifest of Hope',
      subtitle: 'Full Custom Website with Shopify Intergration',
      images: [chefsous1, chefsous2],
      description: 'This website was commissioned as a redesign of a e-Commerce store that was previously on Wix. We provided a new design layout along with additional branding while intergrating her new store through Shopify instead of Wix.',
      tags: ['🍦 Vanilla JS', '📡 Edamam API', '🎨 Custom CSS', '🔍 Advanced Search'],
      category: 'e-Commerce',
      links: [
        { label: 'View Live Site', url: 'https://chef-sous-app.vercel.app/', icon: '🌐' },
        { label: 'GitHub Repository', url: 'https://github.com/4700gfx/Chef-Sous-App', icon: '💻' }
      ],
      animation: 'animate-fade-in-left'
    },
  ];

  return (
    <section 
      id="projects-section" 
      className="min-h-screen w-full max-w-7xl mx-auto mb-6 mt-10 px-4 lg:px-8"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 
          className={`font-roboto font-bold text-4xl md:text-5xl lg:text-6xl mt-16 sm:mt-24 mb-4 bg-gradient-to-r from-gray-500 to-black bg-clip-text text-transparent transition-all duration-1000 ${
            inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Our Featured Projects
        </h1>
        <p className={`text-black text-md md:text-lg max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
          inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Discover how we transform ideas into powerful digital experiences. Each project showcases our commitment to quality, innovation, and results-driven design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 mb-16">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            inView={inView}
            index={index}
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-600 transition-all duration-1000 mb-16 ${
        inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ animationDelay: '600ms' }}>
        <div className="text-center mb-8">
          <h2 className="font-roboto font-bold text-2xl sm:text-3xl text-white mb-4">
            Project Success Metrics
          </h2>
          <p className="text-gray-100 text-base sm:text-md">
            Real results from real projects, delivering measurable impact for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">50+</div>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">100%</div>
            <p className="text-gray-300">Client Satisfaction Rate</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">24hrs</div>
            <p className="text-gray-300">Average Response Time</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">95%</div>
            <p className="text-gray-300">On-Time Delivery</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className={`text-center transition-all duration-1000 ${
        inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ animationDelay: '800ms' }}>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how we can bring your vision to life with the same attention to detail and quality you see in our featured work.
        </p>
        <button className="bg-gradient-to-r from-gray-500 to-black text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto">
          <span>🚀</span>
          Start Your Project Today
        </button>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, inView, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const handleImageNavigation = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group ${
        inView ? `${project.animation} opacity-100` : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="relative h-48 w-full">
          <img 
            src={project.images[currentImageIndex]} 
            alt={`${project.name} screenshot`} 
            className="w-full h-full object-contain bg-gray-50 transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-gray-500 to-black text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-lg">
              {project.category}
            </span>
          </div>

          {/* Image Navigation Dots */}
          {project.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
              {project.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    imgIndex === currentImageIndex 
                      ? 'bg-gray-800 shadow-lg scale-110' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  onClick={() => handleImageNavigation(imgIndex)}
                />
              ))}
            </div>
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="font-roboto font-bold text-base text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-300 line-clamp-1">
            {project.name}
          </h3>
          <p className="text-gray-500 text-sm font-medium mb-2 line-clamp-1">
            {project.subtitle}
          </p>
        </div>

        <p className="text-gray-600 text-xs leading-tight mb-4 line-clamp-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-md border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-3 border-t border-gray-100">
          {project.links.map((link, linkIndex) => (
            <a 
              key={linkIndex}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-md font-medium text-sm transition-all duration-300 flex-1 ${
                linkIndex === 0 
                  ? 'bg-gradient-to-r from-gray-500 to-black text-white hover:shadow-md transform hover:-translate-y-0.5' 
                  : 'border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900'
              }`}
            >
              <span className="text-xs">{link.icon}</span>
              <span className="text-sm">{linkIndex === 0 ? 'View' : 'Code'}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
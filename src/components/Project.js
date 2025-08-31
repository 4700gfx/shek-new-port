import React, { useState, useEffect, useCallback } from 'react';

// Import your existing images
import reelmate1 from '../assets/images/reelmate1.png';
import reelmate2 from '../assets/images/reelmate2.png';
import braveguidance1 from '../assets/images/braveguidance1.png';
import braveguidance2 from '../assets/images/braveguidance2.png';
import labelpic1 from '../assets/images/label1.png';
import labelpic2 from '../assets/images/label2.png';
import zubar1 from '../assets/images/zubar-hero.png'
import zubar2 from '../assets/images/zubar-hero.png'
import mohsite from '../assets/images/moh hero-about.png'
import mohsite2 from '../assets/images/moh hero-about.png'


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
      description: 'We created a clean, welcoming landing page for a licensed mental health therapist looking to connect with new clients. Designed in Figma and developed in React, the site provides an easy way for visitors to learn about her practice and take the first step toward booking services. We also integrated FormSpree to seamlessly capture leads and ensure a smooth client intake process.',
      tags: ['⚛️ React', '💻 Tailwind CSS', '🎨 Figma Design', '📱 Responsive', 'Contact Form 📋'],
      category: 'Healthcare & Mental Health',
      links: [
        { label: 'View Live Site', url: 'https://www.braveguidance.com/', icon: '🌐' },
        { label: 'GitHub Repository', url: 'https://github.com/4700gfx/brave-guidance-page', icon: '💻' }
      ],
      animation: 'animate-fade-in-left'
    },
    {
      id: 'zubar',
      name: 'Zu Bar Lounge',
      subtitle: 'Landing Page for New Lounge & Workspace',
      images: [zubar1, zubar2],
      description: 'For this project, we partnered with a client opening a new lounge who wanted to refresh and upgrade her existing online presence. Since she had already been running the business, we redesigned her previous Wix website with a modern look and improved functionality. New features included a notification pop-up window and additional tools to enhance user experience and engagement.',
      tags: ['⚛️ React', '🧑🏿‍💻 Figma', '📋 FormSpree', '🛜 SEO Anayltics', '🫙 Domain Hosting', '📈 Email Marketing'],
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
      description: 'We developed a multi-page website for an independent record label, designed to highlight their artists while laying the foundation for future growth. The site features artist showcases, blog integration, and a scalable architecture built for expansion. With a modern aesthetic and seamless navigation, the platform is ready to scale into e-commerce, blogs, and electronic press kits (EPKs) for industry professionals and fans alike.',
      tags: ['⚛️ React', '💻 Tailwind CSS', '📝 Blog Ready', '🎵 Music Industry', '🧑🏿‍💻 Figma', '📋 FormSpree'],
      category: 'Music & Entertainment',
      links: [
        { label: 'View Live Site', url: 'https://www.4700enterprises.com/', icon: '🌐' },
        { label: 'GitHub Repository', url: 'https://github.com/4700gfx/label-website-', icon: '💻' }
      ],
      animation: 'animate-fade-in-right'
    },
    {
      id: 'manifests-of-hope',
      name: 'Manifest of Hope',
      subtitle: 'Full Custom Website with Shopify Intergration',
      images: [mohsite, mohsite2],
      description: 'This project involved redesigning an existing e-commerce store originally built on Wix. We delivered a fresh, modern layout and updated branding while migrating the store to Shopify for enhanced functionality, scalability, and a better shopping experience for customers.',
      tags: ['⚛️ React', '🏪 Shopify Intergration', '🎨 Custom CSS', '🔍 Advanced Search', '🧑🏿‍💻 Figma', '📋 FormSpree'],
      category: 'E-Commerce',
      links: [
        { label: 'View Live Site', url: 'https://www.moh.life/', icon: '🌐' },
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
          Our Work
        </h1>
        <p className={`text-black text-md md:text-base max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
          inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Discover how we transform ideas into powerful digital experiences. Each project showcases our commitment to quality, innovation, and results-driven design. Through our experiences, we are able to translate our skils through different industries and niches. Check out our projects below:
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
          <p className="text-gray-100 text-base sm:text-md px-10">
            We deliver tangible results with every project, helping our clients achieve measurable growth. These numbers continue to grow—one project at a time. We take pride in these metrics because, as the saying goes, numbers don’t lie.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">50+</div>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">98%</div>
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
        <p className="text-gray-600 text-md mb-8 max-w-2xl mx-auto">
          We’d love to help you create a website with the same attention to detail, quality, and care that you see in our featured projects.
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
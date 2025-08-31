import React, { useEffect, useState, useCallback } from 'react';

const AboutMe = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = useCallback(() => {
    const element = document.getElementById('about-me');
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const threshold = windowHeight * 0.1; // Trigger earlier for smoother experience

    setInView(rect.top <= windowHeight - threshold && rect.bottom >= threshold);
  }, []);

  useEffect(() => {
    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const services = [
    {
      icon: "🌐",
      title: "Modern Web Design That Builds Brands & Drives Growth",
      description: "At 4700 GFX Studios, we create sleek, modern websites designed to boost traffic and strengthen your brand identity. Using today's best tools and design practices, we craft intuitive user interfaces that engage visitors and deliver an unforgettable experience for your audience. Whether you're a small business or a growing company, we're here to bring your vision online with impact.",
      animation: "animate-fade-in-left"
    },
    {
      icon: "💡",
      title: "Flexible Web Solutions for Every Stage of Your Business",
      description: "We believe great design should be accessible at every step of your entrepreneurial journey. Whether you need your very first landing page or a fully scalable website, our team builds solutions that grow with you. With flexible pricing to fit any budget, we make it easy to create a professional online presence that evolves as your business does.",
      animation: "animate-fade-in-up"
    },
    {
      icon: "📈",
      title: "Grow Your Brand. Reach More Customers.",
      description: "At 4700 GFX Studios, we focus on building a strong digital footprint that makes your brand more accessible to a wider audience. With smart SEO strategies and monthly analytics, we ensure your website runs at peak performance while climbing higher in Google search results. The result? A faster, more visible, and more effective online presence that drives real growth for your business.",
      animation: "animate-fade-in-right"
    }
  ];

  const skills = [
    { name: "JavaScript", icon: "🖥️" },
    { name: "React", icon: "⚛️" },
    { name: "Project Management", icon: "📊" },
    { name: "Node.js", icon: "⌨️" },
    { name: "Python", icon: "🐍" },
    { name: "Customer Service", icon: "☎️" },
    { name: "Branding Consultation", icon: "©️" },
    { name: "SEO & Analytics", icon: "📈" },
    { name: "Social Media Management", icon: "📱" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Shopify Intergrations", icon: "🛒" },
    { name: "Acuity/SquareSpace Intergrations", icon: "📕" },
    { name: "Mobile Applications", icon: "📲" },
    { name: "Landing Pages", icon: "🛬" },
    { name: "Data Management", icon: "🔢" },
  ];

  return (
    <section 
      id="about-me" 
      className="min-h-screen w-full max-w-7xl mx-auto mb-6 mt-10 px-4 lg:px-8"
    >
      <div className="text-center mb-16">
        <h1 
          className={`font-roboto font-bold text-4xl md:text-5xl lg:text-6xl mt-16 sm:mt-24 mb-4 bg-gradient-to-r from-gray-500 to-black bg-clip-text text-transparent transition-all duration-1000 ${
            inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          What We Offer
        </h1>
        <p className={`text-black text-md md:text-md max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
          inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Comprehensive web solutions designed to elevate your business and drive measurable results. at 4700 GFX Studios, we working to ensure that we are provided the highest quality of services and solutions at a reasonable price point.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black p-6 sm:p-8 rounded-2xl flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${
              inView ? `${service.animation} opacity-100` : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="text-center mb-6">
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </span>
              <h2 className="font-roboto font-bold text-xl sm:text-2xl text-white leading-tight">
                {service.title}
              </h2>
            </div>
            <p className="text-gray-100 text-sm sm:text-md leading-relaxed flex-grow">
              {service.description}
            </p>
            <div className="mt-6 pt-4 border-t border-gray-600/30">
              <button className="text-white font-medium hover:text-gray-300 transition-colors duration-300 flex items-center group">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-1000 ${
        inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ animationDelay: '600ms' }}>
        <div className="text-center mb-8">
          <h2 className="font-roboto font-bold text-2xl sm:text-3xl text-gray-800 mb-4">
            Our Technical Expertise
          </h2>
          <p className="text-gray-600 text-base sm:text-md px-10">
            We leverage cutting-edge technologies and proven methodologies to deliver exceptional results. Through our wide skill set, we offer brands different solutions for business at different levels of growth. From Web Design, Software Development and Branding + Marketing we offer everything you need at 4700 GFX Studios.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className={`bg-gradient-to-r from-gray-100 to-gray-200 hover:from-red-50 hover:to-red-100 text-gray-800 hover:text-red-700 px-4 py-2 rounded-full text-sm sm:text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${700 + index * 50}ms` }}
            >
              <span className="mr-2">{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className={`text-center mt-16 transition-all duration-1000 ${
        inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ animationDelay: '1200ms' }}>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Ready to Transform Your Digital Presence?
        </h3>
        <p className="text-gray-600 text-md mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help your business grow with a modern, results-driven website. Our consultation will review your needs and how 4700 GFX Studio can fit your needs. Click the button below to get started:
        </p>
        <button className="bg-gradient-to-r from-gray-500 to-black text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          📆 Get Your Free Consultation 📆
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
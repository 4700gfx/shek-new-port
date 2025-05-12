import React, { useEffect, useState } from 'react';


const AboutMe = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('about-me');
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

  return (
    <section id="about-me" className='h-auto w-full sm:w-4/5 mx-auto mb-6 mt-10 px-4'>
      <h1 
        className={`flex justify-center font-roboto font-bold text-3xl sm:text-5xl mt-16 sm:mt-24 mb-8 sm:mb-10 ${
          inView ? 'animate-fade-in-up' : ''
        }`}
      >
        What We Offer:
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
        <div 
          className={`bg-darkRed p-6 sm:p-8 rounded-3xl flex flex-col ${
            inView ? 'animate-fade-in-left' : ''
          }`}
        >
          <h2 className='font-roboto font-bold text-xl sm:text-2xl text-center mb-2'>
            👨🏿‍🎨 Responsive and Modern Web Design
          </h2>
          <p className="text-sm sm:text-md">
            We focus on providing the most modern and up to date web designs to influence traffic and establish brand indentity. We use of the best tools to create various levels of UIs to provide the best experience for your audiences. 
          </p>
        </div>

        <div 
          className={`bg-darkRed p-6 sm:p-8 rounded-3xl flex flex-col ${
            inView ? 'animate-fade-in-right' : ''
          }`}
        >
          <h2 className='font-roboto font-bold text-xl sm:text-2xl text-center mb-2'>
            💸 Affordable Digital Solutions for Small and Medium Businesses
          </h2>
          <p className="text-sm sm:text-md">
            We offer different price points for every point of your entrepreunal career. Our team can help set up your first landing page and continually scale your website to fit any of your business needs. This allows for flexability in various budgets.
          </p>
        </div>

        <div 
          className={`bg-darkRed p-6 sm:p-8 rounded-3xl flex flex-col ${
            inView ? 'animate-fade-in-up' : ''
          }`}
        >
          <h2 className='font-roboto font-bold text-xl sm:text-2xl text-center mb-2'>
            🌱 Organic Growth through SEO and Anayltics 
          </h2>
          <p className="text-sm sm:text-md">
            Our focus is create a great digital footprint for business to make your brand more accessible a wider audience. This include SEO and monthly Anayltics to ensure that your website is runniing at the best speeds possible while reaching the top of google searches. 
          </p>
        </div>

        <div 
          className={`bg-darkRed p-6 sm:p-8 rounded-3xl flex flex-col ${
            inView ? 'animate-fade-in-down' : ''
          }`}
        >
          <h2 className='font-roboto font-bold text-xl sm:text-2xl text-center mb-2'>
            Additional Skills
          </h2>
          <div className='flex flex-wrap justify-center'>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-md'>🖥️ JavaScript</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-md'>🧫 React</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-md'>📊 Project Management</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-md'>⌨️ Node.js</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-md'>💻 Python</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-md'>☎️ Customer Service</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-md'>©️ Branding Consultation</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-md'>📈 SEO & Analytics</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-md'>📌 Social Media Management</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

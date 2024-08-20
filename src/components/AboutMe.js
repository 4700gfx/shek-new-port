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
        About Me:
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
        <div 
          className={`bg-darkRed p-6 sm:p-8 rounded-3xl flex flex-col ${
            inView ? 'animate-fade-in-left' : ''
          }`}
        >
          <h2 className='font-roboto font-bold text-xl sm:text-2xl text-center mb-2'>
            2.5 Years of Experience
          </h2>
          <p className="text-sm sm:text-base">
            In 2021, I was inspired to create a website for my Record Label "4700 Enterprises". My initial approach was to create it using a no-code platform like Wix and SquareSpace. However, my curiosity enabled me to learn more to create a website using HTML, CSS, and JavaScript.
          </p>
        </div>

        <div 
          className={`bg-darkRed p-6 sm:p-8 rounded-3xl flex flex-col ${
            inView ? 'animate-fade-in-right' : ''
          }`}
        >
          <h2 className='font-roboto font-bold text-xl sm:text-2xl text-center mb-2'>
            8 Years of Experience in CS, Data Entry & Social Media Management
          </h2>
          <p className="text-sm sm:text-base">
            Before my introduction to Software Engineering, I worked as a Customer Service Specialist for companies of different sizes. This helped me attain skills such as Data Entry and gaining proficiency in Excel and Outlook. My work in B2B Customer Services has allowed me to have a tenure as a Social Media Manager.
          </p>
        </div>

        <div 
          className={`bg-darkRed p-6 sm:p-8 rounded-3xl flex flex-col ${
            inView ? 'animate-fade-in-up' : ''
          }`}
        >
          <h2 className='font-roboto font-bold text-xl sm:text-2xl text-center mb-2'>
            Learning More Frameworks
          </h2>
          <p className="text-sm sm:text-base">
            After working with Vanilla JavaScript, as well as React, my interest in other frameworks has peaked. This includes Next.js, React Native, and more. I am always looking to add to my toolset of technologies as it increases my ability to create more web applications.
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
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-base'>🖥️ JavaScript</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-base'>🧫 React</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-base'>📊 Microsoft Suite</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-base'>⌨️ Node.js</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-base'>💻 Python</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-base'>☎️ Customer Service</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-base'>📧 Email Correspondence</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-base'>📈 Data Entry</span>
            <span className='bg-white text-black w-auto px-3 py-1 mt-2 mr-2 rounded-full text-sm sm:text-base'>📌 Social Media Management</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

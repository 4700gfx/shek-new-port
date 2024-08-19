import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'JavaScript Developer',
      company: 'FOH',
      period: '2021 - Present',
      descriptions: [
        'Managed west coast territory businesses.',
        'Communicated with other hospitality companies on order status, returns, and other issues.',
        'Provided support to Sales Managers and created reports.',
      ],
    },
    {
      role: 'Sales and Website Manager',
      company: 'The Magic Scent',
      period: '2019 - 2021',
      descriptions: [
        'Handled customer inquiries, order entries, and returns.',
        'Managed the CMS using WordPress and Elementor.',
        'Updated item catalogs and made website changes using HTML and CSS.',
      ],
    },
  ];

  return (
    <section className='w-4/5 max-w-4/5 mx-auto py-10 px-4'>
      <h1 className="text-center font-roboto font-bold text-3xl sm:text-4xl md:text-5xl mb-10">Experiences + Certificates</h1>
      <div className='flex flex-row gap-6'>
        {experiences.map((exp, index) => (
          <div key={index} className='bg-white text-black w-4/5 sm:w-4/5 lg:w-4/5 xl:w-2/3 p-6 sm:p-8 rounded-lg flex flex-col mx-auto'>
            <h2 className='font-roboto font-bold text-center text-xl sm:text-2xl'>{exp.role}</h2>
            <h3 className='font-roboto font-semibold text-center text-lg sm:text-xl'>{exp.company}</h3>
            <span className='italic mb-4 text-center text-sm sm:text-base'>{exp.period}</span>
            <ul className='list-disc pl-5 text-left'>
              {exp.descriptions.map((desc, i) => (
                <li key={i} className='mb-2 text-sm sm:text-base'>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-6 mt-10 w-auto'>
        {[
          {
            title: 'LinkedIn Learning',
            description: 'This course allowed me to learn the fundamentals of Programming as a whole. This established my knowledge in HTML, CSS and JavaScript.',
            tags: ['🖥️ HTML', '🖥️ CSS', '🖥️ JavaScript']
          },
          {
            title: "Udemy's JS Course",
            description: 'This course allowed me to learn all of the aspects of JavaScript as a language. This included syntax, features and other aspects of the language.',
            tags: ['🖥️ JavaScript', '🖥️ OOP', '🖥️ React Basics']
          },

        ].map((cert, index) => (
          <div key={index} className='bg-white text-black sm:w-4/5 lg:w-3/4 xl:w-2/3 p-6 sm:p-8 rounded-lg flex flex-col mx-auto'>
            <h2 className='font-roboto font-bold text-center text-xl sm:text-2xl mb-2'>{cert.title}</h2>
            <p className='text-sm sm:text-base'>{cert.description}</p>
            <div className='flex flex-wrap justify-center mt-4'>
              {cert.tags.map((tag, i) => (
                <span key={i} className='bg-deepRed text-white px-3 py-1 mt-2 mx-1 rounded-full text-sm sm:text-base'>{tag}</span>
              ))}
            </div>
            <button className='bg-black text-white w-1/4 mx-auto my-3 p-3 rounded-full'>Download Certificate ⬇️</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import react from '../assets/images/react.png';
import javascript from '../assets/images/javascript.png';
import python from '../assets/images/python.png';
import chatgpt from '../assets/images/chatgpt.png';
import figma from '../assets/images/figma.png';
import node from '../assets/images/node.png';
import tailwind from '../assets/images/tailwind.png';

// Icons array with duplicated images for seamless looping
const icons = [
  react,
  javascript,
  python,
  chatgpt,
  figma,
  node,
  tailwind,
  react, // Duplicate to ensure seamless loop
  javascript,
  python,
  chatgpt,
  figma,
  node,
  tailwind, 
];

const TechSection = () => {
  return (
    <section className="overflow-hidden w-4/5 mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="font-roboto font-bold text-5xl mt-4 mb-4">Technologies Used:</h1>
        <div className="scrolling-wrapper">
          <div className="scrolling-content">
            <div className="scrolling-content-inner">
              {icons.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt={`icon-${index}`}
                  className="h-32 w-32 mx-4 mt-16 mb-2"
                />
              ))}
            </div>
            <div className="scrolling-content-inner">
              {icons.map((icon, index) => (
                <img
                  key={index + icons.length}
                  src={icon}
                  alt={`icon-${index + icons.length}`}
                  className="h-32 w-32 mx-4 mt-16 mb-2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;

import React, { useEffect } from 'react';
import './App.css'; // Import your CSS file
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechSection from './components/TechSection';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Project from './components/Project';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton'; // Import the ScrollToTopButton component

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,    // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <section id="techSection">
        <TechSection />
      </section>
      <section id="aboutMe">
        <AboutMe />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Project />
      </section>
      <Footer />
      <ScrollToTopButton /> {/* Add the ScrollToTopButton here */}
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import PricingComponent from './components/PricingComponent';
import LeadMagnetsAndForms from './components/LeadMagnetsAndForms';
import WebsiteAuditLanding from './components/WebsiteAuditLanding';
import ChecklistLanding from './components/ChecklistLanding';
import EbookLanding from './components/EbookLanding';

// Main Home Page Component
const HomePage = () => (
  <div>
    <section id='home'>
      <Hero />
    </section>
    <section id="techSection">
      <TechSection />
    </section>
    <section id="aboutMe">
      <AboutMe />
    </section>
    <section id="projects">
      <Project />
    </section>
    <section id="techSection">
      <TechSection />
    </section>
    <section id="pricing">
      <PricingComponent />
    </section>
    <section id='leadSection'>
      <LeadMagnetsAndForms />
    </section>
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Main home page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Lead magnet landing pages */}
          <Route path="/website-audit" element={<WebsiteAuditLanding />} />
          <Route path="/checklist" element={<ChecklistLanding />} />
          <Route path="/transformation-guide" element={<EbookLanding />} />
        </Routes>
        <Footer />
        <ScrollToTopButton /> {/* Add the ScrollToTopButton here */}
      </div>
    </Router>
  );
}

export default App;
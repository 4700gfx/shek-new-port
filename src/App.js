import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechSection from './components/TechSection';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Project from './components/Project';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <TechSection></TechSection>
    <AboutMe></AboutMe>
    <Experience></Experience>
    <Project></Project>
    </div>
  );
}

export default App;

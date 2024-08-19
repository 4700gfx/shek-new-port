import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechSection from './components/TechSection';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <TechSection></TechSection>
    <AboutMe></AboutMe>
    <Experience></Experience>
    </div>
  );
}

export default App;

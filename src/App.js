import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechSection from './components/TechSection';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <TechSection></TechSection>
    <AboutMe></AboutMe>
    </div>
  );
}

export default App;

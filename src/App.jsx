import './App.scss'
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TechnologyChips from './components/TechnologyChips';
import Services from './components/Services'
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = React.useState("");
  


  return (
    <>
      <Navbar onThemeChange={setTheme}/>
      <main>
        <Home theme={theme}/>
        <TechnologyChips /> 
        <Services />
        <ProjectsSection theme={theme}/>
        <AboutSection />
        <Footer />
      </main>
    </>
  )
}

export default App

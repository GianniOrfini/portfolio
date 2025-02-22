import './App.scss'
import Navbar from './components/Navbar';
import Home from './components/Home';
import TechnologyChips from './components/TechnologyChips';
import Services from './components/Services'
import ProjectsSection from './components/ProjectsSection';


function App() {

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <TechnologyChips /> 
        <Services />
        <ProjectsSection />
      </main>
    </>
  )
}

export default App

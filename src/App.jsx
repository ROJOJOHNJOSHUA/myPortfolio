import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import DesignShowcase from './components/DesignShowcase.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <DesignShowcase />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

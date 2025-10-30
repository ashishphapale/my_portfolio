import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash?.replace('#','')
    return hash || 'home'
  })

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 50 })
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash?.replace('#','')
      if(hash) setActiveSection(hash)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    try { window.scrollTo({ top: 0, behavior: 'instant' }) } catch { window.scrollTo(0,0) }
  }, [activeSection])

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} active={activeSection} onNavigate={setActiveSection} />
      <main>
        {activeSection === 'home' && (
          <motion.section id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Home />
          </motion.section>
        )}
        {activeSection === 'about' && (
          <section id="about" data-aos="fade-up">
            <About />
          </section>
        )}
        {activeSection === 'skills' && (
          <section id="skills" data-aos="fade-up">
            <Skills />
          </section>
        )}
        {activeSection === 'achievements' && (
          <section id="achievements" data-aos="fade-up">
            <Projects achievementsMode />
          </section>
        )}
        {activeSection === 'projects' && (
          <section id="projects" data-aos="fade-up">
            <Projects />
          </section>
        )}
        {activeSection === 'contact' && (
          <section id="contact" data-aos="fade-up">
            <Contact />
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App


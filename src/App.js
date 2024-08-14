// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust offset to change active section based on scroll position
      const homeOffset = document.getElementById('home').offsetTop;
      const aboutOffset = document.getElementById('about').offsetTop;
      const projectsOffset = document.getElementById('projects').offsetTop;
      const skillsOffset = document.getElementById('skills').offsetTop;
      const contactOffset = document.getElementById('contact').offsetTop;

      if (
        scrollPosition >= homeOffset &&
        scrollPosition < aboutOffset
      ) {
        setActiveSection('home');
      } else if (
        scrollPosition >= aboutOffset &&
        scrollPosition < projectsOffset
      ) {
        setActiveSection('about');
      } else if (
        scrollPosition >= projectsOffset &&
        scrollPosition < skillsOffset
      ) {
        setActiveSection('projects');
      } else if (
        scrollPosition >= skillsOffset &&
        scrollPosition < contactOffset
      ) {
        setActiveSection('skills');
      } else if (scrollPosition >= contactOffset) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <nav>
        <ul>
          <li
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => scrollToSection('home')}
          >
            Home
          </li>
          <li
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => scrollToSection('about')}
          >
            About Me
          </li>
          <li
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </li>
          <li
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </li>
          <li
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </li>
        </ul>
      </nav>

      <div id="home" className="container">
        <Home />
      </div>

      <div id="about" className="container">
        <About />
      </div>

      <div id="projects" className="container">
        <Projects />
      </div>

      <div id="skills" className="container">
        <Skills />
      </div>

      <div id="contact" className="container">
        <Contact />
      </div>
    </div>
  );
}

export default App;

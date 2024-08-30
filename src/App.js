import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faBrain, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';


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

            const homeOffset = document.getElementById('home').offsetHeight;
            const aboutOffset = homeOffset + document.getElementById('about').offsetHeight;
            const projectsOffset = aboutOffset + document.getElementById('projects').offsetHeight;
            const skillsOffset = projectsOffset + document.getElementById('skills').offsetHeight;
            const contactOffset = skillsOffset + document.getElementById('contact').offsetHeight;

            if (
                scrollPosition < homeOffset
            ) {
                setActiveSection('home');
            } else if (
                scrollPosition >= homeOffset &&
                scrollPosition < aboutOffset
            ) {
                setActiveSection('about');
            } else if (
                scrollPosition >= aboutOffset &&
                scrollPosition < projectsOffset
            ) {
                setActiveSection('projects');
            } else if (
                scrollPosition >= projectsOffset &&
                scrollPosition < skillsOffset
            ) {
                setActiveSection('skills');
            } else if (
                scrollPosition >= skillsOffset &&
                scrollPosition < contactOffset
            ) {
                setActiveSection('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (
        <div className="App">
            <div className='nav-bar container'>
                <nav>
                    <ul>
                        <li
                            className={activeSection === 'home' ? 'active' : ''}
                            onClick={() => scrollToSection('home')}
                        >
                            <FontAwesomeIcon icon={faHome} size="lg" className='icon'/>
                        </li>
                        <li
                            className={activeSection === 'about' ? 'active' : ''}
                            onClick={() => scrollToSection('about')}
                        >
                            <FontAwesomeIcon icon={faGraduationCap} size="lg" />
                        </li>
                        <li
                            className={activeSection === 'projects' ? 'active' : ''}
                            onClick={() => scrollToSection('projects')}
                        >
                            <FontAwesomeIcon icon={faBriefcase} size="lg" />
                        </li>
                        <li
                            className={activeSection === 'skills' ? 'active' : ''}
                            onClick={() => scrollToSection('skills')}
                        >
                            <FontAwesomeIcon icon={faBrain} size="lg" />
                        </li>
                        <li
                            className={activeSection === 'contact' ? 'active' : ''}
                            onClick={() => scrollToSection('contact')}
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </li>
                    </ul>
                </nav>
            </div>

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

            <footer id="footer" className="container">
                <Footer />
            </footer>
        </div>
    );
}

export default App;

// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div className="section">
      <div className="content">
        <h2>Projects</h2>
        <div className="project">
          <h3>Portfolio Website</h3>
          <p>A responsive portfolio website built using React.js and deployed on GitHub Pages.</p>
          <p>GitHub: <a href="https://github.com/your-username/your-portfolio">https://github.com/your-username/your-portfolio</a></p>
        </div>
        <div className="project">
          <h3>E-commerce App</h3>
          <p>An e-commerce web application developed with React and Redux, featuring product listing, shopping cart, and checkout functionality.</p>
          <p>GitHub: <a href="https://github.com/your-username/ecommerce-app">https://github.com/your-username/ecommerce-app</a></p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

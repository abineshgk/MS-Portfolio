import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <div className="project-image">
            <img src="/project1.png" alt="E-commerce Project" />
            <img src="/project2.png" alt="Project Screenshot 2" />
            <div className="overlay">
              <a href="https://ecommerrcee.netlify.app/" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href="https://github.com/abineshgk/E-Commerce" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="project-content">
            <h3>E-commerce Web Application</h3>

            <p>
              Developed a scalable full-stack E-commerce web application featuring authentication, 
              cart management, order processing, responsive UI, and an integrated AI-powered chatbot for real-time customer support, 
              built using React, Node.js, and MySQL with a focus on performance and clean architecture.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src="/project3.png" alt="E-commerce Project" />
            <img src="/project4.png" alt="Project Screenshot 2" />
            <div className="overlay">
              <a href="https://notewebb.netlify.app" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href="https://github.com/abineshgk/Thinkboard" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="project-content">
            <h3>ThinkBoard Web Application</h3>

            <p>
              ThinkBoard is a full-stack productivity web application that enables users to manage ideas and tasks efficiently. Built with React and Node.js, it includes authentication, CRUD functionality, and responsive design, demonstrating my ability to develop scalable and user-focused applications.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;


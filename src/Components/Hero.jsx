import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I'm Abinesh G K</h1>

        <h2>
          <ReactTyped
            strings={[
              "Aspiring Full Stack MERN Developer",
              "React & Node.js Enthusiast",
              "Passionate Web Application Builder",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        <p>
           A motivated BCA graduate passionate about building responsive and 
          scalable web applications. I enjoy turning ideas into functional 
          digital products using modern technologies like React, Node.js, 
          and MySQL. Currently seeking opportunities to grow and contribute 
          as a Full Stack Developer.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="/Abi MS Resume.pdf" className="btn secondary">Download Resume</a>
            <a 
            href="https://www.linkedin.com/in/abineshgk/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn"
        >
            LinkedIn
        </a>

        <a 
            href="https://github.com/abineshgk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn"
        >
            GitHub
        </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/profile.png" alt="Abinesh" />
      </div>
    </section>
  );
}

export default Hero;

import { useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";

function Navbar() {

  return (
    <nav className="navbar">
      <h2 className="logo">ABINESH G K</h2>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

    <div className="nav-social">
        <a href="https://linkedin.com/in/abineshgk" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
        <a href="https://github.com/abineshgk" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
        <a href="mailto:abineshgk2005@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope />
        </a>
    </div>
    </nav>
  );
}

export default Navbar;

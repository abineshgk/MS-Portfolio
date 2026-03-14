import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import React from 'react'

function Footer() {
  return (
   <footer className="footer">
  <h3>Abinesh G K</h3>
  <p>Full Stack MERN Developer</p>

  <div className="footer-social">
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

  <p>© {new Date().getFullYear()} Abinesh G K</p>
</footer>
  )
}

export default Footer



import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
         FaGitAlt, FaGithub,FaDatabase,FaServer,FaCode} from "react-icons/fa";

import {SiExpress, SiMysql, SiMongodb, SiPostman, SiJsonwebtokens} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2>Technical Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3><FaCode /> Frontend</h3>
          <ul>
            <li><FaHtml5 /> HTML5</li>
            <li><FaCss3Alt /> CSS3</li>
            <li><FaJs /> JavaScript (ES6+)</li>
            <li><FaReact /> React.js</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3><FaServer /> Backend</h3>
          <ul>
            <li><FaNodeJs /> Node.js</li>
            <li><SiExpress /> Express.js</li>
            <li><SiJsonwebtokens /> JWT Authentication</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3><FaDatabase /> Database</h3>
          <ul>
            <li><SiMysql /> MySQL</li>
            <li><SiMongodb /> MongoDB</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3><FaGitAlt /> Tools</h3>
          <ul>
            <li><FaGitAlt /> Git</li>
            <li><FaGithub /> GitHub</li>
            <li><SiPostman /> Postman</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Skills;

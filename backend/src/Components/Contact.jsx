import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-left">
        <h2>Contact Me</h2>
        <p>
          I'm open to new opportunities, collaborations, or freelance projects.
          Feel free to reach out and let's build something amazing together.
        </p>

        <div className="contact-info">
          <p><FaEnvelope /> abineshgk2005@gmail.com</p>

          <div className="contact-social">
            <a href="https://linkedin.com/in/abineshgk" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://github.com/abineshgk" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

    </section>
  );
}

export default Contact;


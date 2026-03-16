import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

function Contact() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const res = await fetch("https://ms-portfolio-pruu.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        toast.success("Message sent successfully 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message ❌");
      }

    } catch (error) {
      console.log(error);
      toast.error("Server error ⚠️");
    }
    setLoading(false)
  };

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
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>{loading ? "Sending...." : "Send Message"}</button>

        </form>
      </div>

    </section>
  );
}

export default Contact;
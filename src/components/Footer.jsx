import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social-links">
        <a href="www.linkedin.com/in/aishwarya-a-narwadkar-11199a192" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
        <a href="aishnarw@gmail.com" className="social-icon"><MdEmail /></a>
        <a href="https://github.com/aishwaryaan" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
        <a href="https://www.instagram.com/bas.kar.aish?igsh=eDZibnU4b2N0OTZk&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Aishwarya's Portfolio.</p>
    </div>
  );
}
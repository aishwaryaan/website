import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social-links">
        <a href="https://linkedin.com" className="social-icon"><FaLinkedin /></a>
        <a href="mailto:you@email.com" className="social-icon"><MdEmail /></a>
        <a href="https://github.com" className="social-icon"><FaGithub /></a>
        <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Aishwarya's Portfolio.</p>
    </div>
  );
}
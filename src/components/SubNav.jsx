import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SubNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sub-nav">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
      </div>

      <ul className={`sub-nav-list ${isMenuOpen ? "open" : ""}`}>

        {/* TECH PAGE */}
        {currentPage === "/tech" && (
          <>
            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#experience" onClick={() => setIsMenuOpen(false)}>
                Experience
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#leadership" onClick={() => setIsMenuOpen(false)}>
                Leadership
              </a>
            </li>

            <li>
              <Link to="/design" onClick={() => setIsMenuOpen(false)}>
                UX Design
              </Link>
            </li>

            <li>
              <Link to="/beyond" onClick={() => setIsMenuOpen(false)}>
                Beyond Career
              </Link>
            </li>

            <li>
              <a
                href="/AishwaryaResume.pdf"
                download
                className="btn-download"
                onClick={() => setIsMenuOpen(false)}
              >
                Download Resume
              </a>
            </li>
          </>
        )}

        {/* DESIGN PAGE */}
        {currentPage === "/design" && (
          <>
            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#passion" onClick={() => setIsMenuOpen(false)}>
                Passion Projects
              </a>
            </li>

            <li>
              <a href="#vision" onClick={() => setIsMenuOpen(false)}>
                Vision Projects
              </a>
            </li>

            <li>
              <Link to="/tech" onClick={() => setIsMenuOpen(false)}>
                Tech
              </Link>
            </li>

            <li>
              <Link to="/beyond" onClick={() => setIsMenuOpen(false)}>
                Beyond Career
              </Link>
            </li>
          </>
        )}

        {/* BEYOND PAGE */}
        {currentPage === "/beyond" && (
          <>
            <li>
              <Link to="/tech" onClick={() => setIsMenuOpen(false)}>
                Tech
              </Link>
            </li>

            <li>
              <Link to="/design" onClick={() => setIsMenuOpen(false)}>
                UX Design
              </Link>
            </li>
          </>
        )}

      </ul>
    </div>
  );
}
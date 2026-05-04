import { useState } from 'react';

export default function SubNav({ page, setPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sub-nav">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </div>
      <ul className={`sub-nav-list ${isMenuOpen ? 'open' : ''}`}>
        {page === "tech" && (
          <>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#leadership" onClick={() => setIsMenuOpen(false)}>Leadership Roles</a></li>

            <li><a onClick={() => { setPage("design"); setIsMenuOpen(false); }}>Design</a></li>
            <li><a onClick={() => { setPage("beyond"); setIsMenuOpen(false); }}>Beyond Career</a></li>
            <li>
              <a href="/AishwaryaResume.pdf" download className="btn-download" onClick={() => setIsMenuOpen(false)}>
                Download Resume
              </a>
            </li>
          </>
        )}

        {page === "design" && (
          <>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#passion" onClick={() => setIsMenuOpen(false)}>Passion Projects</a></li>
            <li><a href="#vision" onClick={() => setIsMenuOpen(false)}>Vision Projects</a></li>
            <li><a onClick={() => { setPage("tech"); setIsMenuOpen(false); }}>Tech</a></li>
            <li><a onClick={() => { setPage("beyond"); setIsMenuOpen(false); }}>Beyond Career</a></li>
          </>
        )}

        {page === "beyond" && (
          <>
            <li><a onClick={() => { setPage("tech"); setIsMenuOpen(false); }}>Tech</a></li>
            <li><a onClick={() => { setPage("design"); setIsMenuOpen(false); }}>Design</a></li>
          </>
        )}
      </ul>
    </div>
  );
}
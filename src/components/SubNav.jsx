export default function SubNav({ page, setPage }) {
  return (
    <div className="sub-nav">
      <ul className="sub-nav-list">
        {page === "tech" && (
          <>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#leadership">Leadership Roles</a></li>
            
            <li><a onClick={() => setPage("design")}>Design</a></li>
            <li><a onClick={() => setPage("beyond")}>Beyond Career</a></li>
            <li>
              <a href="/AishNarw3 copy.pdf" download className="btn-download">
                Download Resume
              </a>
            </li>
          </>
        )}

        {page === "design" && (
          <>
            <li><a href="#about">About</a></li>
            <li><a href="#passion">Passion Projects</a></li>
            <li><a href="#vision">Vision Projects</a></li>
            <li><a onClick={() => setPage("tech")}>Tech</a></li>
            <li><a onClick={() => setPage("beyond")}>Beyond Career</a></li>
          </>
        )}

        {page === "beyond" && (
          <>
            <li><a onClick={() => setPage("tech")}>Tech</a></li>
            <li><a onClick={() => setPage("design")}>Design</a></li>
          </>
        )}
      </ul>
    </div>
  );
}
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  let title = "Tech";

  if (location.pathname === "/design") {
    title = "Design";
  } else if (location.pathname === "/beyond") {
    title = "Beyond Career";
  }

  return (
    <div className="main-nav">
      <div className="nav-logo">
        <img src="/logo for website.png" alt="Logo" />
      </div>

      <div className="main-title">{title}</div>

      <div className="nav-spacer"></div>
    </div>
  );
}
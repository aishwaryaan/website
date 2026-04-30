export default function Navbar({ page }) {
  const title =
    page === "tech"
      ? "Tech"
      : page === "design"
      ? "Design"
      : "Beyond Career";

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
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function DesignPage() {
  const [selected, setSelected] = useState(null);

  // 🔥 Passion Projects (things you've built)
  const passionProjects = [
    {
      title: "Design System",
      desc: "Building a consistent UI language",
      details: "A scalable design system with reusable components and tokens.",
      img: "/design1.jpg",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      url: "https://example.com"
    },
    {
      title: "Mobile App UI",
      desc: "Clean and modern interface",
      details: "Focused on usability and accessibility with a minimal design.",
      img: "/design2.jpg"
    }
  ];

  // 🔮 Vision Projects (ideas / concepts)
  const visionProjects = [
    {
      title: "Future Dashboard",
      desc: "Speculative UI for AI-driven workflows",
      details: "Exploring how AI could reshape user interfaces.",
      img: "/vision1.jpg",
      pdf: "/sample.pdf"
    },
    {
      title: "XR Interface",
      desc: "AR/VR interaction concept",
      details: "Designing immersive interaction models for extended reality.",
      img: "/vision2.jpg"
    }
  ];

  return (
    <div className="content">

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About</h2>
        <div className="section-content">
          A designer focused on blending functionality with aesthetics.
        </div>
      </section>

      {/* PASSION PROJECTS */}
      <section id="passion" className="section">
        <h2>Passion Projects</h2>

        <div className="projects-grid">
          {passionProjects.map((p, i) => (
            <ProjectCard key={i} project={p} onClick={setSelected} />
          ))}
        </div>
      </section>

      {/* VISION PROJECTS */}
      <section id="vision" className="section">
        <h2>Vision Projects</h2>

        <div className="projects-grid">
          {visionProjects.map((p, i) => (
            <ProjectCard key={i} project={p} onClick={setSelected} />
          ))}
        </div>
      </section>

      {/* MODAL (shared) */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function DesignPage() {
  const [selected, setSelected] = useState(null);

  // 🔥 Passion Projects (things you've built)
  const passionProjects = [
    {
      title: "VR Immersive systems for Fire Disaster Preparedness",
      desc: "Exploration of design process for a VR simulation project in Tech page.",
      details: "I have explroed this project from a design standpoint -  the same one project in Tech. But here I focus more on the design process and decisions that went into creating the user experience. Here is a walkthrough of the design process.",
      img: "/design project img1.png",
      url: "https://youtu.be/kITby5Tniqc",
      pdf: "design project 1.pdf"
    },
    {
      title: "Seeing concepts",
      desc: "An exploration of visual stroytelling as a tool for understanding abstract concepts.",
      details: "This project explores complex ideas through visual simplification, translating abstract concepts into intuitive and easy-to-recall representations. It focuses on clarity, interpretation, and making information more accessible through design thinking.",
      img: "/design project 2 img.png",
      pdf: "design project 2 concepts.pdf"
    },
    {
      title: "Branding for a cultural event",
      desc: "Branding and visual identity project for a cultural event at my college 'Gandhaar' with the theme as 'Enchanted Carnival'.",
      details: "The branding for my college fest Gandhaar merges multiple themes into a cohesive identity, combining mystery, vibrance, and imagination. Visual elements and color systems were designed to create a unified, immersive festival experience.",
      img: "/design project 3 img.png",
      pdf: "design project 3.pdf"
    },
    {
      title: "Birds of Freedom - Experience Design",
      desc: "Experience design project for 'Birds of Freedom' fashion show theme as a celebration of vibrance, diversity and freedom of expression.",
      details: "This project expresses themes of freedom and identity through fashion, using birds as a metaphor. It explores emotional storytelling, movement, and visual symbolism to represent individuality and self-expression.",
      img: "/design fashion img.png",
      pdf: "design fashion project.pdf"
    },
    {
      title: "Speech information retrieval poster",
      desc: "Design of a poster on speech information retrieval model, aspects, applications, challenges and its future scope.",
      details: "This project is a poster design that visually communicates the key aspects of speech information retrieval, including its model, applications, challenges, and future scope. The design focuses on clarity, visual hierarchy, and engaging graphics to make complex information easily digestible.",
      img: "/design img 4.png",
      pdf: "design project 4.pdf"
    },
  ];

  // 🔮 Vision Projects (ideas / concepts)
  const visionProjects = [
    {
      title: "DTM - A design thinking AI agent for designers",
      desc: "A conversational AI experience designed to guide structured design thinking through contextual questioning and interactive user journeys.",
      details: "Coming soon...",
      img: "/design project 1 vision img.png"
    },
    {
      title: "A stealth suit for women's safety",
      desc: "Coming soon...",
      details: "Coming soon...",
      // img: "/design project 2 vision img.png"
    },
    {
      title: "Generative AI System for Creative World Design",
      desc: "A future generative AI platform for designing cohesive visual identities, characters, environments, and cinematic worlds across fashion, gaming, and interactive media.",
      details: "I aim to deisgn this as a human-AI collaborative creative engine which explores the intersection of generative AI, visual storytelling, and system-driven design thinking for interactive media.",
      // img: "/design project 2 vision img.png"
    }
  ];

  return (
    <div className="content">

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About</h2>
        <div className="section-content">
          I explore design as a way to shape how people experience the world. With a foundation in engineering, I focus on creating intuitive and scalable user experiences. I approach design as a problem-solving process grounded in structure, clarity, and impact. I'm interested in creating interactions that feel natural, meaningful, and memorable.        </div>
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
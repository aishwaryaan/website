export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <img src={project.img} className="card-img" />
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
    </div>
  );
}
export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal active">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-body">
          <h2>{project.title}</h2>

          {/* Image */}
          {project.img && (
            <img src={project.img} className="modal-img" />
          )}

          {/* Text Details */}
          <div className="modal-text">
            <p>{project.details}</p>
          </div>

          <br></br>
          

          {/* External Link */}
          {project.url && (
            <p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                🔗 View Project
              </a>
            </p>
          )}

          {/* YouTube Video */}
          {project.video && (
            <iframe
              className="modal-video"
              src={project.video}
              title="Project Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}

          {/* PDF Viewer */}
          {project.pdf && (
            <iframe
              src={project.pdf}
              className="modal-pdf"
              title="Project PDF"
            ></iframe>
          )}

        </div>
      </div>
    </div>
  );
}
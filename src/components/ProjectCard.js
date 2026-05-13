import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const viewUrl = project.viewUrl || project.url || "#contacto";
  const githubUrl = project.githubUrl || "https://github.com/DanielSQN";

  return (
    <article className="project-card glass-card">
      <div className={`project-shot ${project.accent}`}>
        {project.img ? (
          <Image
            src={project.img}
            alt={`Vista previa de ${project.name}`}
            fill
            sizes="(max-width: 980px) 78vw, 260px"
          />
        ) : (
          <>
            <span />
            <span />
            <span />
          </>
        )}
      </div>
      <div className="card-heading">
        <h3>{project.name}</h3>
      </div>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p>{project.description}</p>
      <div className="project-actions">
        <a href={viewUrl} aria-label={`Ver demo de ${project.name}`}>
          <ExternalLink size={16} /> Ver
        </a>
        <a href={githubUrl} aria-label={`Ver GitHub de ${project.name}`}>
          <Github size={16} /> GitHub
        </a>
      </div>
    </article>
  );
}

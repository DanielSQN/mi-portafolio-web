import { ExternalLink, Github, Youtube } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const viewUrl = project.viewUrl || project.url || "";
  const githubUrl = project.githubUrl || "";
  const youtubeUrl = project.youtubeUrl || "";
  const hasActions = Boolean(viewUrl || githubUrl || youtubeUrl);

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
      {hasActions ? (
        <div className="project-actions">
          {viewUrl ? (
            <a
              href={viewUrl}
              aria-label={`Ver demo de ${project.name}`}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={17} />
            </a>
          ) : null}
          {githubUrl ? (
            <a
              href={githubUrl}
              aria-label={`Ver GitHub de ${project.name}`}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
            </a>
          ) : null}
          {youtubeUrl ? (
            <a
              className="youtube-action"
              href={youtubeUrl}
              aria-label={`Ver video de YouTube de ${project.name}`}
              target="_blank"
              rel="noreferrer"
            >
              <Youtube size={18} />
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

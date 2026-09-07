import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaYoutube } from "react-icons/fa";

export default function ProjectCard({ project, featured = false }) {
  const viewUrl = project.viewUrl || project.url || "";
  const githubUrl = project.githubUrl || "";
  const youtubeUrl = project.youtubeUrl || "";
  const hasActions = Boolean(viewUrl || githubUrl || youtubeUrl);

  return (
    <article
      className={`project-card glass-card ${featured ? "project-card-featured" : ""}`}
    >
      <div className={`project-shot ${project.accent}`}>
        {project.img ? (
          <Image
            src={project.img}
            alt={`Vista previa de ${project.name}`}
            fill
            sizes={
              featured
                ? "(max-width: 980px) 92vw, 720px"
                : "(max-width: 980px) 92vw, 380px"
            }
          />
        ) : (
          // sin captura todavía: una placa deliberada, no un esqueleto de
          // carga, que es como se leían las tres barras grises anteriores
          <span className="project-noshot">
            <svg
              aria-hidden="true"
              height="34"
              shapeRendering="crispEdges"
              viewBox="0 0 12 10"
              width="41"
            >
              <path
                d="M0 0h12v8H0zM1 1h10v6H1zM4 9h4v1H4z"
                fill="currentColor"
                opacity="0.55"
              />
              <path d="M3 3h2v1H3zM7 3h2v1H7zM4 5h4v1H4z" fill="currentColor" />
            </svg>
            Sin captura
          </span>
        )}
      </div>
      {project.categoryLabel ? (
        <span className={`project-category ${project.category || ""}`}>
          {project.categoryLabel}
        </span>
      ) : null}
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
          {githubUrl ? (
            <a
              href={githubUrl}
              aria-label={`Ver GitHub de ${project.name}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub aria-hidden="true" size={18} />
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
              <FaYoutube aria-hidden="true" size={19} />
            </a>
          ) : null}
          {viewUrl ? (
            <a
              className="demo-action"
              href={viewUrl}
              aria-label={`Ver demo de ${project.name}`}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={17} />
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

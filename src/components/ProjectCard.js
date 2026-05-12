import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project }) {
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
        <a href={project.url || "#contacto"} aria-label={`Consultar sobre ${project.name}`}>
          <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p>{project.description}</p>
    </article>
  );
}

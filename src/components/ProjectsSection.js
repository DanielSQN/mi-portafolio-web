import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import projects from "@/data/projects.json";
import Reveal from "./Reveal";

export default function ProjectsSection() {
  return (
    <section className="section-shell" id="proyectos">
      <div className="projects-showcase glass-card">
        <Reveal className="projects-intro">
          <p className="section-kicker">
            <span>03</span> Proyectos destacados
          </p>
          <h2>
            Soluciones que conectan ideas con <span>impacto.</span>
          </h2>
          <p>
            Algunos proyectos personales y profesionales que reflejan mi enfoque
            en innovacion, escalabilidad y experiencia de usuario.
          </p>
          <a className="ghost-button projects-cta" href="#contacto">
            Ver todos los proyectos <ArrowRight size={16} />
          </a>
        </Reveal>

        <div className="project-carousel" aria-label="Proyectos destacados">
          <div className="project-track">
            {projects.map((project, index) => (
              <Reveal
                className="project-card glass-card"
                delay={index * 100}
                key={`${project.name}-${index}`}
              >
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
              </Reveal>
            ))}
          </div>
          <div className="project-dots" aria-hidden="true">
            {projects.slice(0, 4).map((project, index) => (
              <span className={index === 0 ? "is-active" : ""} key={`${project.name}-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

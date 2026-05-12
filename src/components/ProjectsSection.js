import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection() {
  return (
    <section className="section-shell content-grid" id="proyectos">
      <SectionHeader
        index="03"
        label="Proyectos"
        title={"Soluciones que conectan ideas con <span>impacto.</span>"}
        copy="Proyectos personales y profesionales con enfoque en innovacion, escalabilidad y experiencia de usuario."
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal className="project-card glass-card" delay={index * 100} key={project.name}>
            <div className={`project-shot ${project.accent}`}>
              <span />
              <span />
              <span />
            </div>
            <div className="card-heading">
              <h3>{project.name}</h3>
              <a href="#contacto" aria-label={`Consultar sobre ${project.name}`}>
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
    </section>
  );
}

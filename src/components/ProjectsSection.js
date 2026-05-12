import { ArrowRight } from "lucide-react";
import projects from "@/data/projects.json";
import ProjectsCarousel from "./ProjectsCarousel";
import Reveal from "./Reveal";

export default function ProjectsSection() {
  const sortedProjects = [...projects].sort(
    (a, b) => (a.priority || 999) - (b.priority || 999)
  );
  const hasMoreProjects = sortedProjects.length > 5;

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
          <a className="ghost-button projects-cta" href="/proyectos">
            Ver todos los proyectos <ArrowRight size={16} />
          </a>
          {hasMoreProjects ? <span className="projects-count">+{sortedProjects.length - 5} mas</span> : null}
        </Reveal>

        <ProjectsCarousel projects={sortedProjects} />
      </div>
    </section>
  );
}

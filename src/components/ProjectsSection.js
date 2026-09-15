import { ArrowRight } from "lucide-react";
import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import StaggerGrid from "./StaggerGrid";
import TiltCard from "./TiltCard";

export default function ProjectsSection() {
  const sortedProjects = [...projects].sort(
    (a, b) => (a.priority || 999) - (b.priority || 999)
  );
  const featured = sortedProjects.slice(0, 5);
  const remaining = sortedProjects.length - featured.length;

  // El hueco grande del mosaico es puramente visual: si el proyecto más
  // reciente aún no tiene captura, lo ocupa el primero que sí la tenga y
  // el orden de la lista no se toca.
  const heroIndex = Math.max(
    featured.findIndex((project) => project.img),
    0
  );

  return (
    <section className="section-shell" id="proyectos">
      <div className="projects-showcase glass-card">
        <Reveal className="section-head" variant="left">
          <span className="section-head-rule" aria-hidden="true" />
          <p className="section-head-count">
            04 <span>/ 07</span>
          </p>
          <p className="section-head-label">Proyectos destacados</p>
          <h2>
            Ideas que salieron de localhost <span>y llegaron al mundo.</span>
          </h2>
          <p className="section-head-copy">
            Una colección de encargos, experimentos y obsesiones personales:
            desde PWAs de finanzas hasta relojes con Arduino que predican
            versículos. Cada una me enseñó algo distinto.
          </p>
          <span className="section-head-ghost" aria-hidden="true">
            4
          </span>
        </Reveal>

        <StaggerGrid className="projects-bento">
          {featured.map((project, index) => (
            <TiltCard
              className={index === heroIndex ? "bento-featured" : ""}
              key={project.name}
            >
              <ProjectCard featured={index === heroIndex} project={project} />
            </TiltCard>
          ))}
          <a className="bento-cta glass-card" href="/proyectos">
            <span className="bento-cta-text">
              <span className="bento-cta-count">
                +{remaining} casos más esperan en el archivo
              </span>
              <strong>Conocer a profundidad todos los proyectos</strong>
            </span>
            <span className="bento-cta-arrow" aria-hidden="true">
              <ArrowRight size={22} />
            </span>
          </a>
        </StaggerGrid>
      </div>
    </section>
  );
}

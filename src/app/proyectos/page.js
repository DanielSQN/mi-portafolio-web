import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";

export const metadata = {
  title: "Proyectos",
  description:
    "Proyectos destacados de Daniel Quintero en desarrollo web, automatizacion, integraciones y analitica."
};

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort(
    (a, b) => (a.priority || 999) - (b.priority || 999)
  );

  return (
    <main className="projects-page section-shell">
      <Link className="ghost-button back-link" href="/">
        <ArrowLeft size={16} /> Volver
      </Link>
      <header className="projects-page-header">
        <p className="section-kicker">
          <span>03</span> Todos los proyectos
        </p>
        <h1>
          Soluciones construidas para generar <span>impacto.</span>
        </h1>
        <p>
          Una vista completa de proyectos personales y profesionales. Edita esta
          lista desde <code>src/data/projects.json</code>.
        </p>
      </header>
      <section className="all-projects-grid" aria-label="Todos los proyectos">
        {sortedProjects.map((project, index) => (
          <ProjectCard project={project} key={`${project.name}-${index}`} />
        ))}
      </section>
    </main>
  );
}

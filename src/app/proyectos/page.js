import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import StaggerGrid from "@/components/StaggerGrid";
import TiltCard from "@/components/TiltCard";
import WipBanner from "@/components/WipBanner";
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
    <>
      <main className="projects-page section-shell">
        <Link className="back-link" href="/">
          <span className="back-link-icon" aria-hidden="true">
            <ArrowLeft size={15} />
          </span>
          <span className="back-link-path">cd ~/inicio</span>
        </Link>
        <header className="projects-page-header">
          <p className="section-kicker">
            <span>~/</span> El archivo completo
          </p>
          <h1>
            Doce historias de código: <span>del experimento al deploy.</span>
          </h1>
          <p>
            Trabajo enterprise, freelance hecho con cariño, locuras con Arduino
            y experimentos con IA. Cada tarjeta de este mosaico es un problema
            real que terminó resuelto en producción — o aprendido a la mala.
          </p>
          <WipBanner />
        </header>
        <StaggerGrid
          as="section"
          className="all-projects-grid"
          aria-label="Todos los proyectos"
        >
          {sortedProjects.map((project, index) => (
            <TiltCard key={`${project.name}-${index}`}>
              <ProjectCard project={project} />
            </TiltCard>
          ))}
        </StaggerGrid>
      </main>
      <Footer />
    </>
  );
}

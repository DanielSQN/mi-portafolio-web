"use client";

import { useMemo } from "react";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectsCarousel({ projects }) {
  const visibleProjects = useMemo(() => projects.slice(0, 6), [projects]);

  return (
    <div className="project-carousel" aria-label="Proyectos destacados">
      <div className="project-track">
        {visibleProjects.map((project, index) => (
          <Reveal delay={index * 100} key={`${project.name}-${index}`}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

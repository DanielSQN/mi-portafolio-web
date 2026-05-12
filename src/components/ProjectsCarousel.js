"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectsCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const visibleProjects = useMemo(() => projects.slice(0, 5), [projects]);

  function scrollToProject(index) {
    const nextIndex = (index + visibleProjects.length) % visibleProjects.length;
    const track = trackRef.current;
    const card = track?.children[nextIndex];

    if (!track || !card) return;

    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: "smooth"
    });
    setActiveIndex(nextIndex);
  }

  useEffect(() => {
    if (visibleProjects.length <= 1) return undefined;

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % visibleProjects.length;
        const track = trackRef.current;
        const card = track?.children[next];

        if (track && card) {
          track.scrollTo({
            left: card.offsetLeft - track.offsetLeft,
            behavior: "smooth"
          });
        }

        return next;
      });
    }, 4200);

    return () => window.clearInterval(intervalRef.current);
  }, [visibleProjects.length]);

  return (
    <div className="project-carousel" aria-label="Proyectos destacados">
      <div className="project-track" ref={trackRef}>
        {visibleProjects.map((project, index) => (
          <Reveal delay={index * 100} key={`${project.name}-${index}`}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <div className="project-dots" aria-label="Navegacion de proyectos">
        {visibleProjects.map((project, index) => (
          <button
            className={activeIndex === index ? "is-active" : ""}
            key={`${project.name}-${index}`}
            type="button"
            aria-label={`Ver proyecto ${index + 1}: ${project.name}`}
            onClick={() => scrollToProject(index)}
          />
        ))}
      </div>
    </div>
  );
}

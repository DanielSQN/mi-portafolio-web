"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectsCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  const visibleProjects = useMemo(() => projects.slice(0, 6), [projects]);
  const dotCount = Math.min(2, visibleProjects.length);
  const groupSize = Math.ceil(visibleProjects.length / dotCount);

  function scrollToProject(index) {
    const targetIndex = index * groupSize;
    const nextIndex = (targetIndex + visibleProjects.length) % visibleProjects.length;
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
    const track = trackRef.current;
    if (!track) return undefined;

    const syncActiveDot = () => {
      const cards = Array.from(track.children);
      const nearestIndex = cards.reduce((nearest, card, index) => {
        const distance = Math.abs(card.offsetLeft - track.scrollLeft - track.offsetLeft);
        const nearestDistance = Math.abs(
          cards[nearest].offsetLeft - track.scrollLeft - track.offsetLeft
        );

        return distance < nearestDistance ? index : nearest;
      }, 0);

      setActiveIndex(nearestIndex);
    };

    track.addEventListener("scroll", syncActiveDot, { passive: true });
    return () => track.removeEventListener("scroll", syncActiveDot);
  }, []);

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
        {Array.from({ length: dotCount }).map((_, index) => {
          const isActive = Math.floor(activeIndex / groupSize) === index;

          return (
            <button
              className={isActive ? "is-active" : ""}
              key={`dot-${index}`}
              type="button"
              aria-label={`Ver grupo de proyectos ${index + 1}`}
              onClick={() => scrollToProject(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

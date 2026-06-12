"use client";

import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  heroJson,
  heroTitle,
  profile,
  stats,
  typewriterSpecialties
} from "@/data/portfolio";
import HeroJsonCard from "./HeroJsonCard";
import TypewriterLine from "./TypewriterLine";

gsap.registerPlugin(ScrollTrigger);

const orbitItems = [
  { label: "Next.js", icon: "/skills/nextjs.svg" },
  { label: "React", icon: "/skills/react.svg" },
  { label: "Node.js", icon: "/skills/nodejs.svg" },
  { label: "Oracle", icon: "/skills/oracle.svg" },
  { label: "Python", icon: "/skills/python.svg" },
  { label: "PostgreSQL", icon: "/skills/postgresql.svg" }
];

function TitleWords({ text, accent = false }) {
  return text.split(" ").map((word, index) => (
    <Fragment key={`${word}-${index}`}>
      <span className="hero-word-mask">
        <span className={`hero-word ${accent ? "hero-word-accent" : ""}`}>
          {word}
        </span>
      </span>{" "}
    </Fragment>
  ));
}

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-terminal", { autoAlpha: 0, y: 26, duration: 0.7 })
        .from(
          ".hero-word",
          {
            yPercent: 115,
            autoAlpha: 0,
            duration: 0.95,
            stagger: 0.065,
            ease: "power4.out"
          },
          "-=0.35"
        )
        .from(".hero-summary", { autoAlpha: 0, y: 30, duration: 0.85 }, "-=0.55")
        .from(".typewriter-line", { autoAlpha: 0, y: 22, duration: 0.7 }, "-=0.6")
        .from(
          ".hero-actions > *",
          { autoAlpha: 0, y: 24, duration: 0.6, stagger: 0.09 },
          "-=0.5"
        )
        .from(".scroll-cue", { autoAlpha: 0, duration: 0.7 }, "-=0.3")
        .from(
          ".orbit-ring",
          {
            scale: 0.55,
            autoAlpha: 0,
            duration: 1.4,
            stagger: 0.12,
            ease: "expo.out",
            clearProps: "transform"
          },
          0.35
        )
        .from(
          ".orbit-chip",
          {
            scale: 0,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.07,
            ease: "back.out(2.2)",
            clearProps: "transform"
          },
          0.6
        )
        .from(
          ".laptop",
          {
            y: 90,
            autoAlpha: 0,
            rotationX: 22,
            transformPerspective: 900,
            duration: 1.35,
            ease: "expo.out",
            clearProps: "transform"
          },
          0.55
        )
        .from(
          ".stats-grid article",
          { autoAlpha: 0, y: 34, duration: 0.7, stagger: 0.08 },
          "-=0.7"
        );

      gsap.to(".orbit-scene", {
        y: -70,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6
        }
      });

      gsap.to(".hero-copy", {
        y: -34,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero section-shell" id="inicio" ref={sectionRef}>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-terminal">
            <span className="hero-terminal-prompt">~$</span> whoami
            <span className="hero-terminal-output">
              {" "}
              → Daniel Santiago Quintero · «{profile.preferredName}»
            </span>
          </p>
          <h1 className="hero-title" aria-label={`${heroTitle.lead} ${heroTitle.accent}`}>
            <TitleWords text={heroTitle.lead} />
            <TitleWords text={heroTitle.accent} accent />
          </h1>
          <p className="hero-summary">{profile.summary}</p>
          <TypewriterLine prefix="Construyo" words={typewriterSpecialties} />
          <div className="hero-actions">
            <a className="primary-button" href="#proyectos">
              Explorar mi trabajo <ArrowRight size={18} />
            </a>
            <a className="ghost-button" href="#contacto">
              Hablemos de tu idea <MessageCircle size={17} />
            </a>
          </div>
          <a className="scroll-cue" href="#sobre-mi">
            <span>Sigue bajando, hay más</span>
            <ChevronDown size={18} />
          </a>
        </div>

        <div className="hero-visual">
          <div className="orbit-scene" aria-label="Escena visual de tecnologia">
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            {orbitItems.map(({ label, icon }, index) => (
              <span
                className={`orbit-chip orbit-chip-${index + 1}`}
                data-label={label}
                key={label}
              >
                <Image alt={label} height={28} src={icon} width={28} />
              </span>
            ))}
            <HeroJsonCard data={heroJson} />
          </div>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <article key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

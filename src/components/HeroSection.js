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
  { label: "Node.js", icon: "/skills/nodejs.svg" },
  { label: "JavaScript", icon: "/skills/javascript.svg" },
  { label: "Python", icon: "/skills/python.svg" },
  { label: "Codex", icon: "/skills/codex.svg" },
  { label: "Claude", icon: "/skills/claude.svg" },
  { label: "Next.js", icon: "/skills/nextjs.svg" }
];

function MagneticLink({ children, className = "", href }) {
  const ref = useRef(null);

  function handleMove(event) {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.32;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.42;
    gsap.to(element, { x, y, duration: 0.3, ease: "power2.out" });
  }

  function handleLeave() {
    const element = ref.current;
    if (!element) return;
    gsap.to(element, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  }

  return (
    <a
      className={className}
      href={href}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      ref={ref}
    >
      {children}
    </a>
  );
}

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
          ".laptop",
          {
            autoAlpha: 0,
            y: 40,
            scale: 0.97,
            duration: 1.1,
            ease: "power3.out",
            clearProps: "transform"
          },
          0.5
        )
        .from(
          ".tool-rail",
          { autoAlpha: 0, y: 16, duration: 0.8, stagger: 0.12 },
          0.7
        )
        .from(
          ".stats-grid article",
          { autoAlpha: 0, y: 34, duration: 0.7, stagger: 0.08 },
          "-=0.7"
        );

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
            <MagneticLink className="primary-button hero-cta" href="/proyectos">
              Explorar mi trabajo
              <span className="cta-arrow" aria-hidden="true">
                <ArrowRight size={18} />
                <ArrowRight size={18} />
              </span>
            </MagneticLink>
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
          <div className="code-stage">
            <div className="tool-rail tool-rail-top" aria-hidden="true">
              <div className="tool-track">
                {[...orbitItems, ...orbitItems].map(({ label, icon }, index) => (
                  <span className="tool-chip" key={`top-${label}-${index}`}>
                    <Image alt="" height={20} src={icon} width={20} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <HeroJsonCard data={heroJson} />

            <div className="tool-rail tool-rail-bottom" aria-hidden="true">
              <div className="tool-track">
                {[...orbitItems, ...orbitItems].map(({ label, icon }, index) => (
                  <span className="tool-chip" key={`bottom-${label}-${index}`}>
                    <Image alt="" height={20} src={icon} width={20} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
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

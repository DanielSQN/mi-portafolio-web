import {
  ArrowRight,
  MessageCircle
} from "lucide-react";
import Image from "next/image";
import { heroJson, profile, stats, typewriterSpecialties } from "@/data/portfolio";
import HeroJsonCard from "./HeroJsonCard";
import Reveal from "./Reveal";
import TypewriterLine from "./TypewriterLine";

const orbitItems = [
  { label: "Next.js", icon: "/skills/nextjs.svg" },
  { label: "React", icon: "/skills/react.svg" },
  { label: "Node.js", icon: "/skills/nodejs.svg" },
  { label: "Oracle", icon: "/skills/oracle.svg" },
  { label: "Python", icon: "/skills/python.svg" },
  { label: "PostgreSQL", icon: "/skills/postgresql.svg" }
];

export default function HeroSection() {
  return (
    <section className="hero section-shell" id="inicio">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">+ {profile.eyebrow}</p>
          <h1>{profile.headline.replace("generan impacto.", "")}<span>generan impacto.</span></h1>
          <p>{profile.summary}</p>
          <TypewriterLine words={typewriterSpecialties} />
          <div className="hero-actions">
            <a className="primary-button" href="#proyectos">
              Ver proyectos <ArrowRight size={18} />
            </a>
            <a className="ghost-button" href="#contacto">
              Hablemos <MessageCircle size={17} />
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={120}>
          <div className="orbit-scene" aria-label="Escena visual de tecnologia">
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            {orbitItems.map(({ label, icon }, index) => (
              <span className={`orbit-chip orbit-chip-${index + 1}`} key={label} title={label}>
                <Image alt={label} height={28} src={icon} width={28} />
              </span>
            ))}
            <HeroJsonCard data={heroJson} />
          </div>
        </Reveal>
      </div>

      <Reveal className="stats-grid" delay={220}>
        {stats.map((stat) => (
          <article key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

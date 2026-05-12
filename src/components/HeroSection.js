import { ArrowRight, Bot, Cloud, Code2, Database, MessageCircle } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import Reveal from "./Reveal";

const orbitItems = [
  { label: "Next.js", icon: Code2 },
  { label: "React", icon: Bot },
  { label: "Node.js", icon: Database },
  { label: "OIC", icon: Cloud },
  { label: "AI", icon: Bot }
];

export default function HeroSection() {
  return (
    <section className="hero section-shell" id="inicio">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">+ {profile.eyebrow}</p>
          <h1>
            Ingenieria que conecta negocio, <span>automatizacion</span> y
            experiencias digitales.
          </h1>
          <p>{profile.summary}</p>
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
            {orbitItems.map(({ label, icon: Icon }, index) => (
              <span className={`orbit-chip orbit-chip-${index + 1}`} key={label}>
                <Icon size={20} />
                {label}
              </span>
            ))}
            <div className="laptop">
              <div className="laptop-screen">
                <div className="window-dot-row">
                  <span />
                  <span />
                  <span />
                </div>
                <code>
                  <span>const portfolio = {"{"}</span>
                  <span>  engineer: &quot;Daniel&quot;,</span>
                  <span>  focus: &quot;Integrations&quot;,</span>
                  <span>  impact: &quot;Automation&quot;</span>
                  <span>{"}"}</span>
                </code>
              </div>
              <div className="laptop-base" />
            </div>
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

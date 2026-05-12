import {
  ArrowRight,
  Bot,
  Braces,
  Cloud,
  Code2,
  Database,
  MessageCircle,
  Network,
  Workflow
} from "lucide-react";
import { heroJson, profile, stats, typewriterSpecialties } from "@/data/portfolio";
import Reveal from "./Reveal";
import TypewriterLine from "./TypewriterLine";

function JsonKey({ children }) {
  return <span className="json-key">&quot;{children}&quot;</span>;
}

function JsonValue({ children }) {
  return <span className="json-value">&quot;{children}&quot;</span>;
}

const orbitItems = [
  { label: "Next.js", icon: Code2 },
  { label: "React", icon: Workflow },
  { label: "Node.js", icon: Network },
  { label: "OIC", icon: Cloud },
  { label: "Python", icon: Bot },
  { label: "PostgreSQL", icon: Database }
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
                <code className="json-code">
                  <span className="json-bracket">{"{"}</span>
                  <span>
                    <JsonKey>ingeniero</JsonKey>: <JsonValue>{heroJson.ingeniero}</JsonValue>,
                  </span>
                  <span>
                    <JsonKey>sobre_mi</JsonKey>: <span className="json-bracket">[</span>
                  </span>
                  <span className="json-indent">
                    <JsonValue>{heroJson.sobre_mi[0]}</JsonValue>,{" "}
                    <JsonValue>{heroJson.sobre_mi[1]}</JsonValue>,
                  </span>
                  <span className="json-indent">
                    <JsonValue>{heroJson.sobre_mi[2]}</JsonValue>,{" "}
                    <JsonValue>{heroJson.sobre_mi[3]}</JsonValue>
                  </span>
                  <span>
                    <span className="json-bracket">]</span>,
                  </span>
                  <span>
                    <JsonKey>habilidades</JsonKey>: <span className="json-bracket">[</span>
                  </span>
                  {heroJson.habilidades.map((skill, index) => (
                    <span className="json-indent" key={skill}>
                      <JsonValue>{skill}</JsonValue>
                      {index < heroJson.habilidades.length - 1 ? "," : ""}
                    </span>
                  ))}
                  <span>
                    <span className="json-bracket">]</span>,
                  </span>
                  <span>
                    <JsonKey>objetivo</JsonKey>: <JsonValue>{heroJson.objetivo}</JsonValue>
                  </span>
                  <span className="json-bracket">{"}"}</span>
                </code>
                <Braces className="screen-braces" size={24} />
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

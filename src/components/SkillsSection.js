import { Code2, Cloud, DatabaseZap, GitBranch, Sparkles } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const icons = [Code2, DatabaseZap, Cloud, GitBranch, Sparkles];

export default function SkillsSection() {
  return (
    <section className="section-shell content-grid" id="stack">
      <SectionHeader
        index="04"
        label="Stack / Skills"
        title={"Tecnologias que convierten ideas en <span>soluciones.</span>"}
        copy="Stack moderno, herramientas confiables y tecnologias que uso para construir soluciones escalables y de calidad."
      />

      <div className="skills-board">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] || Code2;
          return (
            <Reveal className="skill-row glass-card" delay={index * 80} key={group.name}>
              <div className="skill-title">
                <Icon size={20} />
                <strong>{group.name}</strong>
              </div>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

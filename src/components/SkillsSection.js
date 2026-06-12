import { Code2, Cloud, DatabaseZap, GitBranch, Sparkles } from "lucide-react";
import Image from "next/image";
import {
  SiAnthropic,
  SiClaude,
  SiCss,
  SiDocker,
  SiFlask,
  SiGithub,
  SiGithubcopilot,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostman,
  SiPython,
  SiReact,
  SiTypescript
} from "react-icons/si";
import { skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const icons = [Code2, DatabaseZap, Cloud, GitBranch, Sparkles];

function OracleIcon() {
  return <Image alt="" height={14} src="/skills/oracle.svg" width={14} />;
}

/* tecnologias sin marca registrada en simple-icons quedan solo con texto */
const skillIcons = {
  "Next.js": { Icon: SiNextdotjs, color: "#ffffff" },
  React: { Icon: SiReact, color: "#61dafb" },
  TypeScript: { Icon: SiTypescript, color: "#3178c6" },
  JavaScript: { Icon: SiJavascript, color: "#f7df1e" },
  HTML5: { Icon: SiHtml5, color: "#e34f26" },
  CSS3: { Icon: SiCss, color: "#663399" },
  Python: { Icon: SiPython, color: "#ffd43b" },
  "Node.js": { Icon: SiNodedotjs, color: "#5fa04e" },
  Flask: { Icon: SiFlask, color: "#ffffff" },
  "Oracle Cloud": { Icon: OracleIcon },
  "Oracle OIC": { Icon: OracleIcon },
  "Oracle Fusion": { Icon: OracleIcon },
  "Oracle SQL": { Icon: OracleIcon },
  GCP: { Icon: SiGooglecloud, color: "#4285f4" },
  OpenAI: { Icon: SiOpenai, color: "#ffffff" },
  Codex: { Icon: SiOpenai, color: "#10a37f" },
  "GitHub Copilot": { Icon: SiGithubcopilot, color: "#ffffff" },
  "Claude Code": { Icon: SiClaude, color: "#d97757" },
  "AI APIs": { Icon: SiAnthropic, color: "#ffffff" },
  GitHub: { Icon: SiGithub, color: "#ffffff" },
  Docker: { Icon: SiDocker, color: "#2496ed" },
  Postman: { Icon: SiPostman, color: "#ff6c37" },
  Linux: { Icon: SiLinux, color: "#fcc624" }
};

export default function SkillsSection() {
  return (
    <section className="section-shell content-grid" id="stack">
      <SectionHeader
        index="05"
        label="Stack / Skills"
        title={"Las herramientas cambian, <span>el criterio se queda.</span>"}
        copy="Este es mi arsenal actual, elegido a punta de deploys, errores y aprendizajes. Mañana puede ser otro — y esa es la mejor parte de este oficio."
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
                {group.skills.map((skill) => {
                  const brand = skillIcons[skill];
                  return (
                    <span key={skill}>
                      {brand ? (
                        <i
                          aria-hidden="true"
                          className="skill-brand"
                          style={brand.color ? { color: brand.color } : undefined}
                        >
                          <brand.Icon size={14} />
                        </i>
                      ) : null}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

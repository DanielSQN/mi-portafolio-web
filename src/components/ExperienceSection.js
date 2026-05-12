import { MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection() {
  return (
    <section className="section-shell content-grid" id="experiencia">
      <SectionHeader
        index="02"
        label="Experiencia"
        title={"Experiencia que genera <span>resultados.</span>"}
        copy="He trabajado en proyectos desafiantes para empresas lideres del sector financiero, desarrollando soluciones escalables, seguras y de alto impacto."
      />

      <div className="timeline">
        {experience.map((item, index) => (
          <Reveal className="timeline-item" delay={index * 90} key={item.company}>
            <div className="timeline-period">{item.period}</div>
            <article className="glass-card">
              <div>
                <h3>{item.company}</h3>
                <p className="role">{item.role}</p>
              </div>
              <p>{item.description}</p>
              <span className="pill">
                <MapPin size={13} /> {item.location}
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

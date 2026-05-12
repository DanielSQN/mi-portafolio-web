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
                {item.role ? <p className="role">{item.role}</p> : null}
              </div>
              {item.description ? <p>{item.description}</p> : null}
              {item.roles ? (
                <div className="timeline-roles">
                  {item.roles.map((role) => (
                    <div className="timeline-role" key={`${item.company}-${role.title}`}>
                      <div className="timeline-role-heading">
                        <strong>{role.title}</strong>
                        <span>{role.period}</span>
                      </div>
                      <ul>
                        {role.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
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

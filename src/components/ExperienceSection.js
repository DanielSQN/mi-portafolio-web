import { MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection() {
  return (
    <section className="section-shell content-grid" id="experiencia">
      <SectionHeader
        index="03"
        label="Experiencia"
        title={"Batallas libradas <span>en producción.</span>"}
        copy="Siete años construyendo para el sector financiero, donde un bug no es un detalle: integraciones regulatorias, sistemas core y plataformas que miles de personas usan sin saberlo."
      />

      <div className="timeline">
        {experience.map((item, index) => (
          <Reveal className="timeline-item" delay={index * 90} key={item.company}>
            <div className="timeline-period">
              <span>{item.period}</span>
              {item.duration ? <strong>{item.duration}</strong> : null}
            </div>
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

import { Award, ArrowRight } from "lucide-react";
import { certifications } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function CertificationsSection() {
  return (
    <section className="section-shell content-grid" id="certificaciones">
      <SectionHeader
        index="06"
        label="Certificaciones"
        title={"Aprendizaje validado para construir con <span>criterio.</span>"}
        copy="Certificaciones enfocadas en cloud, integraciones, datos, IA y metodologias de entrega."
      />

      <div className="cert-grid">
        {certifications.map((certification, index) => (
          <Reveal className="cert-card glass-card" delay={index * 70} key={certification}>
            <span className="cert-icon">
              <Award size={20} />
            </span>
            <strong>{certification}</strong>
          </Reveal>
        ))}
        <Reveal className="cert-action" delay={certifications.length * 70}>
          <a className="ghost-button" href="#contacto">
            Ver todas las certificaciones <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

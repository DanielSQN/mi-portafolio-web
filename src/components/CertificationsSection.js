import { Award, ArrowRight } from "lucide-react";
import { certifications } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function CertificationsSection() {
  const visibleCertifications = certifications.slice(0, 7);
  const hasMoreCertifications = certifications.length > visibleCertifications.length;

  return (
    <section className="section-shell content-grid" id="certificaciones">
      <SectionHeader
        index="06"
        label="Certificaciones"
        title={"Aprendizaje validado para construir con <span>criterio.</span>"}
        copy="Certificaciones enfocadas en cloud, integraciones, datos, IA y metodologias de entrega."
      />

      <div className="cert-grid">
        {visibleCertifications.map((certification, index) => (
          <Reveal className="cert-card glass-card" delay={index * 70} key={certification}>
            <span className="cert-icon">
              <Award size={20} />
            </span>
            <strong>{certification}</strong>
          </Reveal>
        ))}
        {hasMoreCertifications ? (
          <Reveal className="cert-action" delay={visibleCertifications.length * 70}>
            <a className="ghost-button" href="/certificaciones">
              Ver todas las certificaciones <ArrowRight size={16} />
            </a>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

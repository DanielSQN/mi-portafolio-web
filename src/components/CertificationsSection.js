import { Award, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import certifications from "@/data/certifications.json";
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
        title={"Curiosidad <span>con certificado.</span>"}
        copy="Credenciales que respaldan lo que la práctica ya me enseñó: cloud, integraciones, datos, IA y mejores formas de entregar software."
      />

      <div className="cert-grid">
        {visibleCertifications.map((certification, index) => (
          <Reveal className="cert-card glass-card" delay={index * 70} key={certification.name}>
            <span className="cert-icon">
              {certification.img ? (
                <Image
                  alt=""
                  height={28}
                  src={certification.img}
                  width={28}
                />
              ) : (
                <Award size={20} />
              )}
            </span>
            <span className="cert-content">
              <strong>{certification.name}</strong>
              <small>{certification.date}</small>
            </span>
            {certification.url ? (
              <a className="cert-link" href={certification.url} aria-label={`Ver certificado ${certification.name}`}>
                <ExternalLink size={16} />
              </a>
            ) : null}
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

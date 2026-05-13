import { ArrowLeft, Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import certifications from "@/data/certifications.json";

export const metadata = {
  title: "Certificaciones",
  description:
    "Certificaciones de Daniel Quintero en cloud, integraciones, datos, IA y metodologias de entrega."
};

export default function CertificationsPage() {
  return (
    <main className="projects-page section-shell">
      <Link className="ghost-button back-link" href="/#certificaciones">
        <ArrowLeft size={16} /> Volver
      </Link>
      <header className="projects-page-header">
        <p className="section-kicker">
          <span>06</span> Todas las certificaciones
        </p>
        <h1>
          Aprendizaje validado para construir con <span>criterio.</span>
        </h1>
        <p>
          Una vista completa de certificaciones. Edita esta lista desde{" "}
          <code>src/data/portfolio.js</code>.
        </p>
      </header>
      <section className="all-certifications-grid" aria-label="Todas las certificaciones">
        {certifications.map((certification) => (
          <article className="cert-card glass-card" key={certification.name}>
            <span className="cert-icon">
              {certification.img ? (
                <Image alt="" height={28} src={certification.img} width={28} />
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
          </article>
        ))}
      </section>
    </main>
  );
}

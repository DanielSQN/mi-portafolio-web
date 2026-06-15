import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import certifications from "@/data/certifications.json";

export const metadata = {
  title: "Certificaciones",
  description:
    "Certificaciones de Daniel Quintero en cloud, integraciones, datos, IA y metodologias de entrega."
};

export default function CertificationsPage() {
  return (
    <>
      <Navbar subpage />
      <main className="projects-page section-shell">
        <header className="projects-page-header">
          <p className="section-kicker">
            <span>~/</span> Todas las certificaciones
          </p>
          <h1>
            Curiosidad <span>con certificado.</span>
          </h1>
          <p>
            Credenciales que respaldan lo que la práctica ya me enseñó: cloud,
            integraciones, datos, IA y mejores formas de entregar software.
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
      <Footer />
    </>
  );
}

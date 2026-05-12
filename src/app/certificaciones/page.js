import { ArrowLeft, Award } from "lucide-react";
import Link from "next/link";
import { certifications } from "@/data/portfolio";

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
          <article className="cert-card glass-card" key={certification}>
            <span className="cert-icon">
              <Award size={20} />
            </span>
            <strong>{certification}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}

import { stats } from "@/data/portfolio";
import StaggerGrid from "./StaggerGrid";

export default function StatsSection() {
  return (
    <section className="stats-section section-shell" aria-label="Cifras clave">
      <StaggerGrid className="stats-grid">
        {stats.map((stat) => (
          <article key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </StaggerGrid>
    </section>
  );
}

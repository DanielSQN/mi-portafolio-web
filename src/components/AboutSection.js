import { Bike, Dumbbell, Gamepad2, Home, Laptop } from "lucide-react";
import { interests } from "@/data/portfolio";
import Reveal from "./Reveal";

const interestIcons = [Bike, Gamepad2, Home, Dumbbell, Laptop];

export default function AboutSection() {
  return (
    <section className="section-shell about-shell" id="sobre-mi">
      <p className="section-kicker">
        <span>05</span> Sobre mi
      </p>
      <Reveal className="about-section glass-card">
        <div className="portrait-card">
          <div className="portrait-glow" />
          <div className="portrait-photo" aria-label="Foto de Daniel Quintero" />
        </div>

        <div className="about-copy">
          <p className="eyebrow">Sobre mi</p>
          <h2>
            Mas que codigo, pasion por <span>resolver problemas reales.</span>
          </h2>
          <p>
            Me motiva la innovacion, el aprendizaje constante y crear soluciones
            que mejoren la vida de las personas.
          </p>
          <div className="interest-grid">
            {interests.map((interest, index) => {
              const Icon = interestIcons[index] || Laptop;
              return (
                <span key={interest}>
                  <Icon size={20} />
                  {interest}
                </span>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import { Bike, BookOpen, Dumbbell, Gamepad2, Laptop } from "lucide-react";
import { interests } from "@/data/portfolio";
import Reveal from "./Reveal";

const interestIcons = [Bike, Gamepad2, BookOpen, Dumbbell, Laptop];

export default function AboutSection() {
  return (
    <section className="section-shell about-shell" id="sobre-mi">
      <div className="section-head">
        <span className="section-head-rule" aria-hidden="true" />
        <p className="section-head-count">
          02 <span>/ 07</span>
        </p>
        <p className="section-head-label">Sobre mí</p>
        <h2>
          Ingeniero de día, <span>explorador a tiempo completo.</span>
        </h2>
        <span className="section-head-ghost" aria-hidden="true">
          2
        </span>
      </div>
      <Reveal className="about-section glass-card" variant="clip">
        <div className="portrait-card">
          <div className="portrait-glow" />
          <div className="portrait-photo" role="img"
            aria-label="Retrato de Santiago Quintero, Software Engineer" />
        </div>

        <div className="about-copy">
          <p className="eyebrow">Detrás del código</p>
          <p>
            Cuando no estoy desplegando a producción, estoy rodando en moto,
            entrenando o desarmando alguna idea nueva. Creo que la mejor
            tecnología nace de entender a las personas — y de nunca perder las
            ganas de aprender.
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

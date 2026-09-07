import { Bike, BookOpen, Dumbbell, Gamepad2, Laptop } from "lucide-react";
import { interests } from "@/data/portfolio";
import Reveal from "./Reveal";

const interestIcons = [Bike, Gamepad2, BookOpen, Dumbbell, Laptop];

export default function AboutSection() {
  return (
    <section className="section-shell about-shell" id="sobre-mi">
      <div className="section-banner">
        <span className="section-banner-index" aria-hidden="true">
          02
        </span>
        <div className="section-banner-main">
          <p className="section-banner-label">Sobre mí</p>
          <h2>
            Ingeniero de día, <span>explorador a tiempo completo.</span>
          </h2>
        </div>
      </div>
      <Reveal className="about-section glass-card" variant="clip">
        <div className="portrait-card">
          <div className="portrait-glow" />
          <div className="portrait-photo" aria-label="Foto de Daniel Quintero" />
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

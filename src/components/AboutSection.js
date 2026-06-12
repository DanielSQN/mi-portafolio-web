import { Bike, Dumbbell, Gamepad2, Home, Laptop } from "lucide-react";
import { interests } from "@/data/portfolio";
import Reveal from "./Reveal";

const interestIcons = [Bike, Gamepad2, Home, Dumbbell, Laptop];

export default function AboutSection() {
  return (
    <section className="section-shell about-shell" id="sobre-mi">
      <p className="section-kicker">
        <span>02</span> Sobre mi
      </p>
      <Reveal className="about-section glass-card" variant="clip">
        <div className="portrait-card">
          <div className="portrait-glow" />
          <div className="portrait-photo" aria-label="Foto de Daniel Quintero" />
        </div>

        <div className="about-copy">
          <p className="eyebrow">Detrás del código</p>
          <h2>
            Ingeniero de día, <span>explorador a tiempo completo.</span>
          </h2>
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

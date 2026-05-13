"use client";

import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function ContactSection() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formData.get("subject") || "Contacto desde portafolio");
    const body = encodeURIComponent(
      `Nombre: ${formData.get("name")}\nCorreo: ${formData.get("email")}\n\n${formData.get("message")}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section-shell contact-section" id="contacto">
      <Reveal className="contact-copy">
        <p className="section-kicker">
          <span>07</span> Contacto
        </p>
        <h2>
          Hablemos de tu proximo <span>proyecto.</span>
        </h2>
        <p>Estoy abierto a nuevas oportunidades y colaboraciones.</p>
        <div className="contact-list">
          <a href={`mailto:${profile.email}`}>
            <Mail size={17} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
            <Phone size={17} /> {profile.phone}
          </a>
          <span>
            <MapPin size={17} /> {profile.location}
          </span>
          <a href={`https://${profile.github}`} target="_blank" rel="noreferrer">
            <Github size={17} /> {profile.github}
          </a>
        </div>
      </Reveal>

      <Reveal className="contact-panel glass-card" delay={120}>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>Nombre</span>
              <input name="name" placeholder="Nombre" required />
            </label>
            <label>
              <span>Correo electronico</span>
              <input name="email" type="email" placeholder="Correo electronico" required />
            </label>
          </div>
          <label>
            <span>Asunto</span>
            <input name="subject" placeholder="Asunto" required />
          </label>
          <label>
            <span>Mensaje</span>
            <textarea name="message" placeholder="Mensaje" rows="6" required />
          </label>
          <button className="primary-button" type="submit">
            Enviar mensaje <Send size={17} />
          </button>
        </form>
        <div className="social-row">
          {socialLinks.map((link) => {
            const Icon = link.label === "LinkedIn" ? Linkedin : link.label === "GitHub" ? Github : Mail;
            const isExternal = link.href.startsWith("http");
            return (
              <a
                href={link.href}
                key={link.label}
                aria-label={link.label}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                <Icon size={17} />
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

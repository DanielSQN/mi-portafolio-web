"use client";

import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { profile, socialLinks } from "@/data/portfolio";
import Reveal from "./Reveal";

function GitHubBrandIcon() {
  return (
    <svg aria-hidden="true" className="brand-icon github-brand" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.98c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

function LinkedInBrandIcon() {
  return (
    <svg aria-hidden="true" className="brand-icon linkedin-brand" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.42v1.56h.05c.48-.91 1.64-1.87 3.37-1.87 3.6 0 4.27 2.37 4.27 5.46v6.3ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
      />
    </svg>
  );
}

function SocialIcon({ label }) {
  if (label === "LinkedIn") return <LinkedInBrandIcon />;
  if (label === "GitHub") return <GitHubBrandIcon />;
  return <Mail size={17} />;
}

export default function ContactSection() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          _subject: `Portafolio · ${formData.get("subject")}`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || String(data.success) !== "true") {
        throw new Error("send failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      // plan B: abrir el cliente de correo con el mensaje ya armado
      setStatus("error");
      const subject = encodeURIComponent(
        formData.get("subject") || "Contacto desde portafolio"
      );
      const body = encodeURIComponent(
        `Nombre: ${formData.get("name")}\nCorreo: ${formData.get("email")}\n\n${formData.get("message")}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    }
  }

  return (
    <section className="section-shell contact-section" id="contacto">
      <Reveal className="contact-copy" variant="left">
        <p className="section-kicker">
          <span>07</span> Contacto
        </p>
        <h2>
          Tu idea merece <span>un gran código.</span>
        </h2>
        <p>
          ¿Un proyecto, una vacante o solo ganas de hablar de tecnología? Mi
          bandeja de entrada está abierta — respondo más rápido que un webhook.
        </p>
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
            <GitHubBrandIcon /> {profile.github}
          </a>
        </div>
      </Reveal>

      <Reveal className="contact-panel glass-card" delay={120} variant="right">
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
          <button
            className="primary-button"
            disabled={status === "sending"}
            type="submit"
          >
            {status === "sending" ? (
              <>
                Enviando… <Loader2 className="spin" size={17} />
              </>
            ) : (
              <>
                Enviar mensaje <Send size={17} />
              </>
            )}
          </button>
          {status === "success" ? (
            <p className="form-status form-status-success" role="status">
              ✓ Mensaje enviado. Te responderé pronto — más rápido que un
              webhook.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="form-status form-status-error" role="status">
              No se pudo enviar directo, así que abrí tu app de correo como
              plan B. También puedes escribirme a {profile.email}.
            </p>
          ) : null}
        </form>
        <div className="social-row">
          {socialLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                href={link.href}
                key={link.label}
                aria-label={link.label}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                <SocialIcon label={link.label} />
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { Spider, WebCorner } from "./PixelWeb";

// Sin barra superior ni barra de comandos: el rail lateral es ahora el
// único chrome fijo y concentra identidad, progreso, secciones y CV.
export default function Navbar({ subpage = false }) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateOnScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);

      // el scroll-spy solo aplica en la home, donde existen las secciones
      if (subpage) return;

      const marker = window.scrollY + window.innerHeight * 0.64;
      let current = 0;
      navItems.forEach((item, index) => {
        const section = document.querySelector(item.href);
        if (section && section.offsetTop <= marker) current = index;
      });
      setActiveIndex(current);
    };

    updateOnScroll();
    window.addEventListener("scroll", updateOnScroll, { passive: true });
    window.addEventListener("resize", updateOnScroll);

    return () => {
      window.removeEventListener("scroll", updateOnScroll);
      window.removeEventListener("resize", updateOnScroll);
    };
  }, [subpage]);

  // marca el layout que reserva la columna del rail
  useEffect(() => {
    document.body.classList.add("has-hud");
    return () => document.body.classList.remove("has-hud");
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  const href = (item) => (subpage ? `/${item.href}` : item.href);
  const Brand = subpage ? Link : "a";

  return (
    <>
      <nav
        aria-label="Secciones del portafolio"
        className={`hud-rail ${open ? "is-open" : ""}`}
      >
        <WebCorner className="hud-web-rail" />

        <Brand
          aria-label="Ir al inicio"
          className="hud-rail-brand"
          href={subpage ? "/" : "#inicio"}
          onClick={() => setOpen(false)}
        >
          <span className="hud-badge">SQ</span>
          <span className="hud-id">
            <strong>{profile.navName || profile.name}</strong>
            <small>Software Engineer</small>
          </span>
        </Brand>

        {!subpage ? (
          <div className="hud-progress" aria-hidden="true">
            <div className="hud-progress-head">
              <span>Recorrido</span>
              <b>{Math.round(progress * 100)}%</b>
            </div>
            <div className="hud-progress-track">
              {navItems.map((item, index) => (
                <i className={index <= activeIndex ? "is-on" : ""} key={item.href} />
              ))}
            </div>
          </div>
        ) : null}

        <p className="hud-rail-title">Secciones</p>

        <div className="hud-rail-list">
          {navItems.map((item, index) => (
            <a
              aria-current={!subpage && index === activeIndex ? "true" : undefined}
              className={!subpage && index === activeIndex ? "is-active" : ""}
              href={href(item)}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              <span className="hud-rail-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="hud-rail-cv"
          download
          href={profile.cvUrl}
          onClick={() => setOpen(false)}
          rel="noreferrer"
          target="_blank"
        >
          {profile.cvLabel} <Download size={14} />
        </a>

        <p className="hud-status">
          <i aria-hidden="true" />
          compilando_ideas
        </p>

        {/* la araña baja por el hilo siguiendo la posición del scroll */}
        <div className="hud-thread" aria-hidden="true">
          <span
            className="hud-thread-spider"
            style={{ top: `${(progress * 100).toFixed(2)}%` }}
          >
            <Spider size={22} />
          </span>
        </div>
      </nav>

      {/* En móvil no cabe una columna fija. En vez de reponer una barra,
          un único botón abre el mismo rail como panel deslizante. */}
      <button
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="hud-fab"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open ? (
        <button
          aria-label="Cerrar menú"
          className="hud-scrim"
          onClick={() => setOpen(false)}
          type="button"
        />
      ) : null}
    </>
  );
}

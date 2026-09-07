"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/data/portfolio";

// Press Start 2P no trae ▸ (U+25B8): el chevron va dibujado.
function Chevron({ size = 10 }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      shapeRendering="crispEdges"
      viewBox="0 0 6 8"
      width={(size * 6) / 8}
    >
      <path d="M1 0h1v1H1zM2 1h1v1H2zM3 2h1v1H3zM4 3h1v2H4zM3 5h1v1H3zM2 6h1v1H2zM1 7h1v1H1z" fill="currentColor" />
    </svg>
  );
}

export default function Navbar({ subpage = false }) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const stripRef = useRef(null);

  useEffect(() => {
    const updateOnScroll = () => {
      setCompact(window.scrollY > 120);

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

  // en móvil la tira es más ancha que la pantalla: arrastra el chip
  // activo a la vista para que el scroll-spy se vea
  useEffect(() => {
    const strip = stripRef.current;
    const chip = strip?.children[activeIndex];
    if (!strip || !chip) return;

    const target =
      chip.offsetLeft - strip.clientWidth / 2 + chip.clientWidth / 2;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";
    strip.scrollTo({ left: Math.max(target, 0), behavior });
  }, [activeIndex]);

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
  const atEnd = progress > 0.985;
  const nextItem = navItems[activeIndex + 1];

  return (
    <>
      {/* ===== BARRA SUPERIOR — fija siempre, encoge al bajar ===== */}
      <header className={`hud-top ${compact ? "is-compact" : ""}`}>
        {subpage ? (
          <Link aria-label="Ir al inicio" className="hud-badge" href="/">
            SQ
          </Link>
        ) : (
          <a aria-label="Ir al inicio" className="hud-badge" href="#inicio">
            SQ
          </a>
        )}

        <span className="hud-id">
          <strong>{profile.navName || profile.name}</strong>
          <small>Software Engineer · Bogotá</small>
        </span>

        <div className="hud-progress" aria-hidden="true">
          <div className="hud-progress-head">
            <span>Progreso de recorrido</span>
            <b>{Math.round(progress * 100)}%</b>
          </div>
          <div className="hud-progress-track">
            {navItems.map((item, index) => (
              <i
                className={index <= activeIndex && !subpage ? "is-on" : ""}
                key={item.href}
              />
            ))}
          </div>
        </div>

        <a
          className="hud-cv"
          download
          href={profile.cvUrl}
          rel="noreferrer"
          target="_blank"
        >
          Descargar CV <Download size={13} />
        </a>

        <button
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="hud-menu"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* ===== RAIL LATERAL (desktop) / PANEL (móvil) ===== */}
      <nav
        aria-label="Secciones del portafolio"
        className={`hud-rail ${open ? "is-open" : ""}`}
      >
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
      </nav>

      {/* ===== TIRA DE SECCIONES (solo móvil) ===== */}
      {!subpage ? (
        <div className="hud-strip" aria-hidden="true" ref={stripRef}>
          {navItems.map((item, index) => (
            <a
              className={index === activeIndex ? "is-active" : ""}
              href={item.href}
              key={item.href}
              tabIndex={-1}
            >
              <span>{String(index + 1).padStart(2, "0")}</span> {item.label}
            </a>
          ))}
        </div>
      ) : null}

      {/* ===== BARRA DE COMANDOS — fija abajo ===== */}
      <div className={`hud-bottom ${atEnd ? "is-end" : ""}`}>
        {subpage ? (
          <>
            <Link className="hud-cmd-back" href="/">
              <span className="hud-key" aria-hidden="true">
                <Chevron />
              </span>
              Volver al inicio
            </Link>
            <span className="hud-cmd-spacer" />
          </>
        ) : (
          <>
            <span className="hud-cmd-keys">
              <span className="hud-key" aria-hidden="true">
                ↑↓
              </span>
              Navegar
            </span>
            <span className="hud-cmd-sep" aria-hidden="true" />
            <span className="hud-cmd-now">
              {atEnd
                ? "Fin del recorrido"
                : `${String(activeIndex + 1).padStart(2, "0")}/07 · ${
                    navItems[activeIndex]?.label
                  }`}
            </span>
            <span className="hud-cmd-spacer" />
            {atEnd || !nextItem ? (
              <a className="hud-cmd-next" href="#inicio">
                <span aria-hidden="true">↑</span> Volver arriba
              </a>
            ) : (
              <a className="hud-cmd-next" href={nextItem.href}>
                <em>Siguiente</em>
                {String(activeIndex + 2).padStart(2, "0")} {nextItem.label}
                <Chevron />
              </a>
            )}
          </>
        )}
      </div>

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

"use client";

import { Download, Menu, PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import Logo from "./Logo";

export default function Navbar({ subpage = false }) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(
    subpage ? "" : navItems[0]?.href || "#inicio"
  );
  const progressRef = useRef(null);

  useEffect(() => {
    const updateOnScroll = () => {
      setScrolled(window.scrollY > 24);

      if (progressRef.current) {
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      // el scroll-spy solo aplica en la home, donde existen las secciones
      if (subpage) return;

      const marker = window.scrollY + window.innerHeight * 0.64;
      const current = navItems.reduce((active, item) => {
        const section = document.querySelector(item.href);
        if (!section) return active;
        return section.offsetTop <= marker ? item.href : active;
      }, navItems[0]?.href || "#inicio");

      setActiveHref(current);
    };

    updateOnScroll();
    window.addEventListener("scroll", updateOnScroll, { passive: true });
    window.addEventListener("resize", updateOnScroll);

    return () => {
      window.removeEventListener("scroll", updateOnScroll);
      window.removeEventListener("resize", updateOnScroll);
    };
  }, [subpage]);

  // marca el layout con columna lateral (solo donde se monta el Navbar)
  // y restaura el estado de colapso guardado por el usuario
  useEffect(() => {
    document.body.classList.add("has-sidebar");
    const saved = window.localStorage.getItem("sidebar-collapsed") === "true";
    setCollapsed(saved);
    return () => {
      document.body.classList.remove("has-sidebar", "sidebar-collapsed");
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("sidebar-collapsed", collapsed);
    window.localStorage.setItem("sidebar-collapsed", String(collapsed));
  }, [collapsed]);

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

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <span className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <nav className="nav-shell" aria-label="Navegacion principal">
        <Logo href={subpage ? "/" : "#inicio"} />

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <button
          className="sidebar-collapse"
          type="button"
          aria-label="Colapsar menu lateral"
          onClick={() => setCollapsed(true)}
        >
          <PanelLeftClose size={18} />
        </button>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item, index) => (
            <a
              className={activeHref === item.href ? "is-active" : ""}
              key={item.href}
              href={subpage ? `/${item.href}` : item.href}
              style={{ "--nav-index": index }}
              onClick={() => {
                if (!subpage) setActiveHref(item.href);
                setOpen(false);
              }}
            >
              <span className="nav-link-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
          <a
            className="primary-button nav-cv-mobile"
            href={profile.cvUrl}
            download
            target="_blank"
            rel="noreferrer"
            style={{ "--nav-index": navItems.length }}
            onClick={() => setOpen(false)}
          >
            {profile.cvLabel} <Download size={15} />
          </a>
        </div>

        <a
          className="ghost-button nav-cv"
          href={profile.cvUrl}
          download
          target="_blank"
          rel="noreferrer"
        >
          {profile.cvLabel} <Download size={15} />
        </a>
        </nav>
      </header>

      <button
        className="sidebar-reopen"
        type="button"
        aria-label="Mostrar menu lateral"
        onClick={() => setCollapsed(false)}
      >
        <PanelLeftOpen size={18} />
      </button>
    </>
  );
}

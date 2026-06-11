"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0]?.href || "#inicio");
  const progressRef = useRef(null);

  useEffect(() => {
    const updateOnScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.64;
      const current = navItems.reduce((active, item) => {
        const section = document.querySelector(item.href);
        if (!section) return active;
        return section.offsetTop <= marker ? item.href : active;
      }, navItems[0]?.href || "#inicio");

      setActiveHref(current);
      setScrolled(window.scrollY > 24);

      if (progressRef.current) {
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    updateOnScroll();
    window.addEventListener("scroll", updateOnScroll, { passive: true });
    window.addEventListener("resize", updateOnScroll);

    return () => {
      window.removeEventListener("scroll", updateOnScroll);
      window.removeEventListener("resize", updateOnScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <span className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <nav className="nav-shell" aria-label="Navegacion principal">
        <Logo />

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item, index) => (
            <a
              className={activeHref === item.href ? "is-active" : ""}
              key={item.href}
              href={item.href}
              style={{ "--nav-index": index }}
              onClick={() => {
                setActiveHref(item.href);
                setOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a className="ghost-button nav-cv" href={profile.cvUrl}>
          {profile.cvLabel} <Download size={15} />
        </a>
      </nav>
    </header>
  );
}

"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0]?.href || "#inicio");

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.64;
      const current = navItems.reduce((active, item) => {
        const section = document.querySelector(item.href);
        if (!section) return active;
        return section.offsetTop <= marker ? item.href : active;
      }, navItems[0]?.href || "#inicio");

      setActiveHref(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="site-header">
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
          {navItems.map((item) => (
            <a
              className={activeHref === item.href ? "is-active" : ""}
              key={item.href}
              href={item.href}
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

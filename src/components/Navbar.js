"use client";

import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="ghost-button nav-cv" href={profile.cvUrl}>
          Descargar CV <Download size={15} />
        </a>
      </nav>
    </header>
  );
}

import { ArrowUp } from "lucide-react";
import { navItems, profile, socialLinks } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <strong>{profile.name}</strong>
          <span>{profile.eyebrow} · {profile.location}</span>
        </div>

        <nav className="footer-nav" aria-label="Navegacion del pie de pagina">
          {navItems.map((item) => (
            <a key={item.href} href={`/${item.href}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          {socialLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                href={link.href}
                key={link.label}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="footer-bottom">
        <small>
          © {year} {profile.name}. Construido con Next.js.
        </small>
        <a className="back-to-top" href="#inicio" aria-label="Volver arriba">
          Volver arriba <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}

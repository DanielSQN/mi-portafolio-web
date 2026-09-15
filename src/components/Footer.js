import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

// El rail lateral ya lleva identidad y navegación, y la sección de
// contacto los enlaces sociales. El pie se queda con lo único que no
// está en ningún otro sitio: la nota legal y el volver arriba.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <small>
          © {year} {profile.name}. Construido con Next.js.
        </small>
        <a className="back-to-top" href="#inicio">
          Volver arriba <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found section-shell">
      <p className="hero-terminal">
        <span className="hero-terminal-prompt">~$</span> cd {"{esta-ruta}"}
        <span className="hero-terminal-output"> → bash: 404: not found</span>
      </p>
      <h1>
        Esta página <span>no compiló.</span>
      </h1>
      <p className="not-found-copy">
        La ruta que buscas no existe, cambió de lugar o nunca salió de la rama
        de experimentos. Volvamos a terreno conocido.
      </p>
      <Link className="primary-button" href="/">
        Volver al inicio <ArrowRight size={17} />
      </Link>
    </main>
  );
}

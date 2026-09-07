import Reveal from "./Reveal";

// Antes era la columna izquierda de una rejilla de dos: quedaba corta
// frente a la lista larga de la derecha y dejaba un hueco muerto. Ahora
// es un banner de ancho completo y el contenido ocupa toda la fila.
export default function SectionHeader({ index, label, title, copy }) {
  return (
    <Reveal className="section-banner" variant="left">
      <span className="section-banner-index" aria-hidden="true">
        {index}
      </span>
      <div className="section-banner-main">
        <p className="section-banner-label">{label}</p>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      {copy ? <p className="section-banner-copy">{copy}</p> : null}
    </Reveal>
  );
}

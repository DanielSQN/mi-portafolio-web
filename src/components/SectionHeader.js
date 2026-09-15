import Reveal from "./Reveal";

export const TOTAL_SECCIONES = "07";

// Deja de ser un panel con borde y sombra: ahora es aire, una regla de
// acento, el contador y un numeral gigante de fondo. El peso lo lleva la
// tipografía, no la caja.
export default function SectionHeader({ index, label, title, copy }) {
  return (
    <Reveal className="section-head" variant="left">
      <span className="section-head-rule" aria-hidden="true" />
      <p className="section-head-count">
        {index} <span>/ {TOTAL_SECCIONES}</span>
      </p>
      <p className="section-head-label">{label}</p>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {copy ? <p className="section-head-copy">{copy}</p> : null}
      <span className="section-head-ghost" aria-hidden="true">
        {Number(index)}
      </span>
    </Reveal>
  );
}

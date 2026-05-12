import Reveal from "./Reveal";

export default function SectionHeader({ index, label, title, copy }) {
  return (
    <Reveal className="section-copy">
      <p className="section-kicker">
        <span>{index}</span> {label}
      </p>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {copy ? <p>{copy}</p> : null}
    </Reveal>
  );
}

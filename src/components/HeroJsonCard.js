"use client";

import { Braces } from "lucide-react";

function JsonKey({ children }) {
  return <span className="json-key">&quot;{children}&quot;</span>;
}

function JsonValue({ children }) {
  return <span className="json-value">&quot;{children}&quot;</span>;
}

export default function HeroJsonCard({ data }) {
  function handleMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--tilt-x", `${(-y * 10).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(x * 12).toFixed(2)}deg`);
  }

  function handleLeave(event) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div className="laptop" onMouseLeave={handleLeave} onMouseMove={handleMove}>
      <div className="laptop-screen">
        <div className="window-dot-row">
          <span />
          <span />
          <span />
        </div>
        <code className="json-code">
          <span className="json-bracket">{"{"}</span>
          <span>
            <JsonKey>ingeniero</JsonKey>: <JsonValue>{data.ingeniero}</JsonValue>,
          </span>
          <span>
            <JsonKey>sobre_mi</JsonKey>: <span className="json-bracket">[</span>
          </span>
          <span className="json-indent">
            {data.sobre_mi.map((item, index) => (
              <span key={item}>
                <JsonValue>{item}</JsonValue>
                {index < data.sobre_mi.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
          <span>
            <span className="json-bracket">]</span>,
          </span>
          <span>
            <JsonKey>habilidades</JsonKey>: <span className="json-bracket">[</span>
          </span>
          {data.habilidades.map((skill, index) => (
            <span className="json-indent" key={skill}>
              <JsonValue>{skill}</JsonValue>
              {index < data.habilidades.length - 1 ? "," : ""}
            </span>
          ))}
          <span>
            <span className="json-bracket">]</span>,
          </span>
          <span>
            <JsonKey>objetivo</JsonKey>: <JsonValue>{data.objetivo}</JsonValue>
          </span>
          <span className="json-bracket">{"}"}</span>
        </code>
        <Braces className="screen-braces" size={24} />
      </div>
      <div className="laptop-base" />
    </div>
  );
}

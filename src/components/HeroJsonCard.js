"use client";

import { Braces } from "lucide-react";

function JsonKey({ children }) {
  return <span className="json-key">&quot;{children}&quot;</span>;
}

function JsonValue({ children }) {
  return <span className="json-value">&quot;{children}&quot;</span>;
}

export default function HeroJsonCard({ data }) {
  return (
    <div className="laptop">
      <div className="code-window-bar">
        <span className="window-dot-row" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="code-window-file">santi.config.json</span>
        <Braces aria-hidden="true" size={14} />
      </div>
      <div className="laptop-screen">
        <code className="json-code">
          <span className="json-bracket">{"{"}</span>
          <span>
            <JsonKey>nombre</JsonKey>: <JsonValue>{data.nombre}</JsonValue>,
          </span>
          <span>
            <JsonKey>alias</JsonKey>: <JsonValue>{data.alias}</JsonValue>,
          </span>
          <span>
            <JsonKey>base</JsonKey>: <JsonValue>{data.base}</JsonValue>,
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
            <JsonKey>superpoderes</JsonKey>: <span className="json-bracket">[</span>
          </span>
          {data.superpoderes.map((skill, index) => (
            <span className="json-indent" key={skill}>
              <JsonValue>{skill}</JsonValue>
              {index < data.superpoderes.length - 1 ? "," : ""}
            </span>
          ))}
          <span>
            <span className="json-bracket">]</span>,
          </span>
          <span>
            <JsonKey>mision</JsonKey>: <JsonValue>{data.mision}</JsonValue>,
          </span>
          <span>
            <JsonKey>estado</JsonKey>: <span className="json-status">&quot;{data.estado}&quot;</span>,
          </span>
          <span>
            <JsonKey>fe</JsonKey>: <span className="json-bracket">{"{"}</span>
          </span>
          <span className="json-indent">
            <JsonKey>mi_roca</JsonKey>: <JsonValue>{data.fe.mi_roca}</JsonValue>,
          </span>
          <span className="json-indent">
            <JsonKey>promesa</JsonKey>: <JsonValue>{data.fe.promesa}</JsonValue>,
          </span>
          <span className="json-indent">
            <JsonKey>en_progreso</JsonKey>:{" "}
            <span className="json-wip">&quot;{data.fe.en_progreso}&quot;</span>
          </span>
          <span>
            <span className="json-bracket">{"}"}</span>
          </span>
          <span className="json-bracket">{"}"}</span>
        </code>
      </div>
      <div className="code-window-status">
        <span className="code-window-branch">⎇ main</span>
        <span>JSON · UTF-8</span>
        <span className="code-window-ok">✓ 0 errores</span>
      </div>
    </div>
  );
}

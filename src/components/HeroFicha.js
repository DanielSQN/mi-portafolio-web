"use client";

import Image from "next/image";
import { Spider } from "./PixelWeb";

// El JSON del hero contaba quién es Santi en el lenguaje de un archivo de
// configuración. Aquí cuenta lo mismo como ficha de personaje, que es el
// equivalente en la estética de consola: mismos datos, otro idioma.

function ToolRail({ side, tools }) {
  if (!tools.length) return null;
  return (
    <div className={`tool-rail tool-rail-${side}`} aria-hidden="true">
      <div className="tool-track">
        {[...tools, ...tools].map(({ label, icon }, index) => (
          <span className="tool-chip" key={`${side}-${label}-${index}`}>
            <Image alt="" height={18} src={icon} width={18} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

// Los superpoderes no llevan número: inventar un 87/100 sería dato falso.
// Las barras solo dan peso visual, por eso son decorativas.
function PowerBar({ label }) {
  return (
    <li className="ficha-power">
      <span className="ficha-power-label">{label}</span>
      <span className="ficha-power-track" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </span>
    </li>
  );
}

export default function HeroFicha({ data, tools = [] }) {
  return (
    <div className="ficha">
      <div className="ficha-bar">
        <span className="ficha-bar-title">Ficha de personaje</span>
        <span className="ficha-bar-state">
          <i aria-hidden="true" />
          {data.estado}
        </span>
      </div>

      <ToolRail side="top" tools={tools} />

      <div className="ficha-body">
        <div className="ficha-id">
          <span className="ficha-avatar" aria-hidden="true">
            SQ
            <Spider className="ficha-avatar-spider" size={16} />
          </span>
          <dl className="ficha-rows">
            <div>
              <dt>Nombre</dt>
              <dd>{data.nombre}</dd>
            </div>
            <div>
              <dt>Alias</dt>
              <dd className="is-accent">«{data.alias}»</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>{data.base}</dd>
            </div>
          </dl>
        </div>

        <div className="ficha-block">
          <p className="ficha-block-title">Clase</p>
          <div className="ficha-tags">
            {data.sobre_mi.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="ficha-block">
          <p className="ficha-block-title">Superpoderes</p>
          <ul className="ficha-powers">
            {data.superpoderes.map((power) => (
              <PowerBar key={power} label={power} />
            ))}
          </ul>
        </div>

        <div className="ficha-block">
          <p className="ficha-block-title">Misión</p>
          <p className="ficha-mission">{data.mision}</p>
        </div>

        <div className="ficha-creed">
          <p className="ficha-block-title">Mi roca</p>
          <p>{data.fe.mi_roca}</p>
          <p>{data.fe.promesa}</p>
          <p className="ficha-creed-progress">{data.fe.en_progreso}</p>
        </div>
      </div>

      <ToolRail side="bottom" tools={tools} />
    </div>
  );
}

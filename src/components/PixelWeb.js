// Motivos decorativos en pixel art: telaraña y araña. Son formas
// genéricas dibujadas desde cero — nada aquí reproduce personajes,
// emblemas ni marcas de terceros.

// Cuarto de telaraña: radiales desde la esquina y tres cuerdas que las
// cruzan. crispEdges mantiene el borde duro, sin antialias.
export function WebCorner({ className = "" }) {
  const radials = [
    [24, 0],
    [24, 9],
    [17, 17],
    [9, 24],
    [0, 24]
  ];
  const rings = [0.35, 0.62, 0.9];

  return (
    <svg
      aria-hidden="true"
      className={`pixel-web ${className}`}
      fill="none"
      shapeRendering="crispEdges"
      stroke="currentColor"
      strokeWidth="0.7"
      viewBox="0 0 24 24"
    >
      {radials.map(([x, y]) => (
        <line key={`${x}-${y}`} x1="0" x2={x} y1="0" y2={y} />
      ))}
      {rings.map((f) => (
        <polyline
          key={f}
          points={radials
            .map(([x, y]) => `${(x * f).toFixed(1)},${(y * f).toFixed(1)}`)
            .join(" ")}
        />
      ))}
    </svg>
  );
}

// Araña de 11x9 píxeles: cuerpo, cabeza, ojos y ocho patas.
export function Spider({ size = 22, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={`pixel-spider ${className}`}
      height={(size * 9) / 11}
      shapeRendering="crispEdges"
      viewBox="0 0 11 9"
      width={size}
    >
      {/* patas izquierdas */}
      <path
        d="M0 2h1v1H0zM1 3h1v1H1zM2 4h1v1H2zM0 7h1v1H0zM1 6h1v1H1zM2 5h1v1H2zM1 1h1v1H1zM2 2h1v1H2zM0 5h1v1H0z"
        fill="currentColor"
      />
      {/* patas derechas */}
      <path
        d="M10 2h1v1h-1zM9 3h1v1H9zM8 4h1v1H8zM10 7h1v1h-1zM9 6h1v1H9zM8 5h1v1H8zM9 1h1v1H9zM8 2h1v1H8zM10 5h1v1h-1z"
        fill="currentColor"
      />
      {/* cabeza y abdomen */}
      <path
        d="M4 1h3v1H4zM3 2h5v1H3zM3 3h5v1H3zM3 4h5v1H3zM3 5h5v1H3zM4 6h3v1H4zM4 7h3v1H4z"
        fill="currentColor"
      />
      {/* ojos */}
      <path d="M4 3h1v1H4zM6 3h1v1H6z" fill="var(--red-bright, #ff5a5a)" />
    </svg>
  );
}

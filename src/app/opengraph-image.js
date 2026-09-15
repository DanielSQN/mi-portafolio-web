import { ImageResponse } from "next/og";
import { profile, stats } from "@/data/portfolio";

export const alt = "Santiago Quintero — Software Engineer en Bogotá";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

// Satori solo entiende flex, así que aquí no hay grid ni posicionamiento
// exótico: es la misma paleta del HUD resuelta con cajas simples.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#070a1e",
          color: "#dfe5ff",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial",
          height: "100%",
          justifyContent: "space-between",
          padding: "58px 72px 64px",
          width: "100%"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ background: "#ff2d2d", height: 8, width: 96 }} />

          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: 22,
              marginTop: 34
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#ff2d2d",
                border: "4px solid #ffd0d0",
                color: "#0a0a12",
                display: "flex",
                fontSize: 38,
                fontWeight: 800,
                height: 92,
                justifyContent: "center",
                width: 92
              }}
            >
              SQ
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 46, fontWeight: 800, color: "#ffffff" }}>
                {profile.name}
              </span>
              <span
                style={{ color: "#8fa3e8", fontSize: 24, letterSpacing: 2 }}
              >
                SOFTWARE ENGINEER · BOGOTÁ, COLOMBIA
              </span>
            </div>
          </div>

          {/* dos líneas explícitas: satori no envuelve texto repartido
              en varios span dentro de una fila flex */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.22,
              marginTop: 40
            }}
          >
            <span style={{ color: "#ffffff" }}>Convierto ideas en código,</span>
            <span style={{ color: "#ff5a5a" }}>y código en impacto.</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 56 }}>
          {stats.slice(0, 3).map((stat) => (
            <div
              key={stat.label}
              style={{
                borderLeft: "3px solid #2b3d86",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                paddingLeft: 20
              }}
            >
              <span
                style={{ color: "#ffc23c", fontSize: 40, fontWeight: 800 }}
              >
                {stat.value}
              </span>
              <span style={{ color: "#8fa3e8", fontSize: 19, width: 250 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

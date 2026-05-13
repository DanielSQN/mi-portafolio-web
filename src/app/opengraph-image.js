import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = "Daniel Quintero Software Engineer";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 72% 20%, rgba(255,45,45,0.34), transparent 290px), linear-gradient(135deg, #030304 0%, #090b10 55%, #160606 100%)",
          color: "#f4f4f5",
          display: "flex",
          fontFamily: "Arial",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28, width: 660 }}>
          <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
            <div
              style={{
                alignItems: "center",
                border: "2px solid #ff2d2d",
                borderRadius: 12,
                color: "#ff2d2d",
                display: "flex",
                fontSize: 28,
                fontWeight: 800,
                height: 64,
                justifyContent: "center",
                width: 78
              }}
            >
              SQ
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: 1 }}>
                {profile.name}
              </span>
              <span style={{ color: "#a1a1aa", fontSize: 22 }}>{profile.role}</span>
            </div>
          </div>

          <h1
            style={{
              fontSize: 70,
              fontWeight: 700,
              letterSpacing: -1,
              lineHeight: 1.02,
              margin: 0
            }}
          >
            Construyo soluciones que{" "}
            <span style={{ color: "#ff2d2d" }}>generan impacto.</span>
          </h1>

          <p style={{ color: "#c7c7d1", fontSize: 25, lineHeight: 1.45, margin: 0 }}>
            Software Engineer especializado en desarrollo full stack, automatizacion y
            soluciones digitales de alto impacto.
          </p>
        </div>

        <div
          style={{
            alignItems: "center",
            border: "2px solid rgba(255,45,45,0.42)",
            borderRadius: "50%",
            display: "flex",
            height: 330,
            justifyContent: "center",
            position: "relative",
            width: 330
          }}
        >
          <div
            style={{
              background: "linear-gradient(145deg, #13151b, #050609)",
              border: "2px solid rgba(255,255,255,0.16)",
              borderRadius: 18,
              boxShadow: "0 32px 90px rgba(255,45,45,0.34)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              height: 190,
              padding: 22,
              transform: "rotate(-7deg)",
              width: 390
            }}
          >
            <span style={{ color: "#ff2d2d", fontSize: 22 }}>const impact = &#123;</span>
            <span style={{ color: "#f4f4f5", fontSize: 20 }}>business: &quot;connected&quot;,</span>
            <span style={{ color: "#f4f4f5", fontSize: 20 }}>automation: &quot;smart&quot;</span>
            <span style={{ color: "#ff2d2d", fontSize: 22 }}>&#125;</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}

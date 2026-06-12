"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !ref.current) return;

    // solo opacidad: un translate aquí convertiría este contenedor en
    // containing block del navbar fixed y desplazaría la página al recargar
    gsap.fromTo(
      ref.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.6, ease: "power2.out", clearProps: "all" }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
}

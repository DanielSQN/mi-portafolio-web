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

    gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y: 26 },
      { autoAlpha: 1, y: 0, duration: 0.65, ease: "power2.out", clearProps: "all" }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
}

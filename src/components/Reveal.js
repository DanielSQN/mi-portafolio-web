"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const variants = {
  up: { from: { autoAlpha: 0, y: 60 }, to: { y: 0 } },
  left: { from: { autoAlpha: 0, x: -70 }, to: { x: 0 } },
  right: { from: { autoAlpha: 0, x: 70 }, to: { x: 0 } },
  zoom: { from: { autoAlpha: 0, scale: 0.92, y: 34 }, to: { scale: 1, y: 0 } },
  clip: {
    from: { autoAlpha: 0, clipPath: "inset(0 0 100% 0)", y: 24 },
    to: { clipPath: "inset(0 0 0% 0)", y: 0 }
  }
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up"
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(element, { autoAlpha: 1 });
      return undefined;
    }

    const { from, to } = variants[variant] || variants.up;
    // GSAP fija el estado inicial oculto (immediateRender); así, si el JS
    // o ScrollTrigger fallan, el contenido permanece visible (failsafe)
    const tween = gsap.fromTo(element, from, {
      autoAlpha: 1,
      ...to,
      duration: 1.05,
      delay: delay / 1000,
      ease: "power3.out",
      clearProps: "transform,clipPath",
      scrollTrigger: {
        trigger: element,
        start: "top 95%",
        once: true
      }
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, variant]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

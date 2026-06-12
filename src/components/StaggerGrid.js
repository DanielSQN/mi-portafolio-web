"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StaggerGrid({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const items = Array.from(element.children);

    if (prefersReducedMotion || items.length === 0) {
      gsap.set(items, { autoAlpha: 1 });
      return undefined;
    }

    const tween = gsap.fromTo(
      items,
      { autoAlpha: 0, y: 64, scale: 0.96 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.09,
        clearProps: "transform",
        scrollTrigger: {
          trigger: element,
          start: "top 86%",
          once: true
        }
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <Tag className={className} ref={ref} {...rest}>
      {children}
    </Tag>
  );
}

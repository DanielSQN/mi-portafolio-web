"use client";

import { useRef } from "react";

export default function TiltCard({ children, className = "", max = 7 }) {
  const ref = useRef(null);

  function handleMove(event) {
    const element = ref.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    element.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
    element.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
    element.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
    element.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
  }

  function handleLeave() {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty("--rx", "0deg");
    element.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      className={`tilt-card ${className}`}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      ref={ref}
    >
      <div className="tilt-card-inner">
        {children}
        <span className="tilt-glare" aria-hidden="true" />
      </div>
    </div>
  );
}

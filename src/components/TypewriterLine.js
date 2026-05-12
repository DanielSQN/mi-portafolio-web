"use client";

import { useEffect, useMemo, useState } from "react";

export default function TypewriterLine({ words }) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (safeWords.length === 0) return undefined;

    const currentWord = safeWords[wordIndex];
    const atFullWord = letterCount === currentWord.length;
    const atEmptyWord = letterCount === 0;
    const delay = deleting ? 46 : atFullWord ? 1150 : 78;

    const timeout = window.setTimeout(() => {
      if (!deleting && atFullWord) {
        setDeleting(true);
        return;
      }

      if (deleting && atEmptyWord) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % safeWords.length);
        return;
      }

      setLetterCount((current) => current + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, letterCount, safeWords, wordIndex]);

  if (safeWords.length === 0) return null;

  return (
    <p className="typewriter-line" aria-live="polite">
      Especializado en <span>{safeWords[wordIndex].slice(0, letterCount)}</span>
      <b aria-hidden="true" />
    </p>
  );
}

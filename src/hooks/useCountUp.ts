'use client';

import { useEffect, useState } from 'react';

/** Animates a number from `target - offset` to `target` once `run` is true. Non-numeric values pass through. */
export function useCountUp(value: string, run: boolean, { offset = 8, duration = 1000 } = {}) {
  const target = parseInt(value, 10);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!run || Number.isNaN(target)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const from = target - offset;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setDisplay(String(Math.round(from + (target - from) * (1 - Math.pow(1 - p, 3)))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, offset, duration]);

  return display;
}

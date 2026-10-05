'use client';

import { useEffect, useRef, useState } from 'react';

interface Options {
  threshold?: number;
  /** Elements already above this viewport fraction on mount show instantly (no animation). */
  instantAbove?: number;
}

/**
 * Fires once when the element enters the viewport.
 * `instant` is true when it was already visible on mount, so callers can skip the entrance animation.
 */
export function useInView<T extends Element>({ threshold = 0.12, instantAbove = 0.9 }: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    if (el.getBoundingClientRect().top < window.innerHeight * instantAbove) {
      setInstant(true);
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, instantAbove]);

  return { ref, inView, instant };
}

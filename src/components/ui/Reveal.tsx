'use client';

import type { ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
}

/** Fades & lifts its content in when scrolled into view. Styling lives in styles/animations.css. */
export function Reveal({ as: Tag = 'div', className, children, id }: RevealProps) {
  const { ref, inView, instant } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      data-reveal=""
      data-visible={inView}
      data-instant={instant}
    >
      {children}
    </Tag>
  );
}

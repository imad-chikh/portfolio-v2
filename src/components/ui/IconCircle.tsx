import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import styles from './IconCircle.module.css';

/** Round icon badge (→, ↗, ⧉). Colors come from the surrounding tone. */
export function IconCircle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn(styles.circle, className)} aria-hidden>
      {children}
    </span>
  );
}

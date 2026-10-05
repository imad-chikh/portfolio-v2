import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import styles from './SectionTitle.module.css';

/** Large display h2 used by every section. */
export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn(styles.title, className)}>{children}</h2>;
}

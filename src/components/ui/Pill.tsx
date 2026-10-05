import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import styles from './Pill.module.css';

interface PillProps {
  children: ReactNode;
  /** filled: uses the surrounding tone's accent colors. outline: bordered chip. */
  variant?: 'filled' | 'outline' | 'mono';
  className?: string;
}

export function Pill({ children, variant = 'filled', className }: PillProps) {
  return <span className={cn(styles.pill, styles[variant], className)}>{children}</span>;
}

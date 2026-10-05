import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import styles from './Button.module.css';

type Variant = 'accent' | 'ghostLight' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

/** Pill-shaped link button. `ghostLight` is for dark/forest backgrounds, `outline` for light ones. */
export function Button({ variant = 'accent', size = 'md', className, children, ...rest }: ButtonProps) {
  return (
    <a className={cn(styles.button, styles[variant], styles[size], className)} {...rest}>
      {children}
    </a>
  );
}

import { site } from '@/config/site';
import { cn } from '@/lib/cn';
import styles from './Logo.module.css';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  bordered?: boolean;
  className?: string;
}

/** The monogram tile (e.g. "ic"). */
export function Logo({ size = 'lg', bordered, className }: LogoProps) {
  return (
    <span className={cn(styles.logo, styles[size], bordered && styles.bordered, className)} aria-hidden>
      {site.initials}
    </span>
  );
}

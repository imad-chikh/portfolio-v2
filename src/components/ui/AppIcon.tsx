import Image from 'next/image';
import { cn } from '@/lib/cn';
import styles from './AppIcon.module.css';

interface AppIconProps {
  src: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/** Rounded square app icon. */
export function AppIcon({ src, size = 'md', className }: AppIconProps) {
  return (
    <span className={cn(styles.icon, styles[size], className)} aria-hidden>
      <Image src={src} alt="" fill sizes="72px" className={styles.img} />
    </span>
  );
}

import Image from 'next/image';
import { cn } from '@/lib/cn';
import styles from './PhoneMock.module.css';

interface PhoneMockProps {
  /** Full screenshot — fills the screen */
  src?: string;
  /** App icon — shown centred like a launch screen when there is no screenshot */
  icon?: string;
  alt?: string;
  /** Text shown in the empty striped placeholder */
  placeholder?: string;
  /** Load immediately instead of lazily (for phones visible on open) */
  eager?: boolean;
  className?: string;
}

/** Tilted phone frame: screenshot → icon splash → striped placeholder. */
export function PhoneMock({ src, icon, alt = '', placeholder = 'screen', eager, className }: PhoneMockProps) {
  return (
    <span className={cn(styles.phone, className)} aria-hidden={!src}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="260px" loading={eager ? 'eager' : 'lazy'} className={styles.img} />
      ) : icon ? (
        <span className={styles.icon}>
          <Image src={icon} alt="" fill sizes="96px" className={styles.img} />
        </span>
      ) : (
        <span>{placeholder}</span>
      )}
    </span>
  );
}

import type { ReactNode } from 'react';
import type { Tone } from '@/lib/types';
import { IconCircle } from '@/components/ui';
import { toneClass } from '@/lib/tone';
import { cn } from '@/lib/cn';
import styles from './ContactCard.module.css';

interface CardContentProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  icon: string;
}

export function ContactCardContent({ eyebrow, title, subtitle, icon }: CardContentProps) {
  return (
    <>
      <span className={styles.top}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <IconCircle>{icon}</IconCircle>
      </span>
      <span className={styles.bottom}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </span>
    </>
  );
}

interface ContactCardProps extends CardContentProps {
  href: string;
  tone: Tone;
  external?: boolean;
}

export function ContactCard({ href, tone, external, ...content }: ContactCardProps) {
  return (
    <a
      href={href}
      className={cn(styles.card, toneClass(tone))}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <ContactCardContent {...content} />
    </a>
  );
}

export const contactCardStyles = styles;

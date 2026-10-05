'use client';

import { useEffect, useRef, useState } from 'react';
import { toneClass } from '@/lib/tone';
import { cn } from '@/lib/cn';
import { ContactCardContent, contactCardStyles as styles } from './ContactCard';

interface CopyEmailCardProps {
  email: string;
  eyebrow: string;
  title: string;
  copiedTitle: string;
}

export function CopyEmailCard({ email, eyebrow, title, copiedTitle }: CopyEmailCardProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard?.writeText(email);
    } catch {
      /* clipboard unavailable — still show feedback */
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button type="button" className={cn(styles.card, toneClass('cream'))} onClick={copy}>
      <ContactCardContent
        eyebrow={eyebrow}
        title={<span aria-live="polite">{copied ? copiedTitle : title}</span>}
        subtitle={email}
        icon="⧉"
      />
    </button>
  );
}

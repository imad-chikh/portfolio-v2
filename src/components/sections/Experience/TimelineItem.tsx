'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { ExperienceItem } from '@/lib/types';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { Pill } from '@/components/ui';
import { cn } from '@/lib/cn';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  item: ExperienceItem;
  current: boolean;
}

export function TimelineItem({ item, current }: TimelineItemProps) {
  const { ref, inView } = useInView<HTMLLIElement>({ threshold: 0.35, instantAbove: 0 });
  const year = useCountUp(item.start, inView);
  // After the entrance finishes, swap to a snappy transition for the hover nudge.
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setSettled(true), 1100);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <li
      ref={ref}
      className={cn(styles.row, current && styles.current, inView && styles.shown, settled && styles.settled)}
    >
      <div className={styles.when}>
        <span className={styles.year}>{year}</span>
        <span className={styles.end}>to {item.end ?? 'now'}</span>
      </div>

      <div className={styles.rail} aria-hidden>
        <span className={styles.dot}>{current && <span className={styles.ring} />}</span>
        <span className={styles.line}>
          <span className={styles.fill} />
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.heading}>
          <span className={cn(styles.badge, current && styles.badgeCurrent, item.logo && styles.badgeLogo)} aria-hidden>
            {item.logo ? <Image src={item.logo} alt="" fill sizes="48px" className={styles.logoImg} /> : item.initials}
          </span>
          <div className={styles.titles}>
            <h3 className={styles.role}>{item.role}</h3>
            <span className={cn(styles.chip, current && styles.chipCurrent)}>{item.type}</span>
            <span className={styles.org}>
              {item.org}
              {item.location && <span className={styles.location}> · {item.location}</span>}
            </span>
          </div>
        </div>
        {item.description && <p className={styles.desc}>{item.description}</p>}
        {item.stack && item.stack.length > 0 && (
          <ul className={styles.stack}>
            {item.stack.map((tech) => (
              <li key={tech}>
                <Pill variant="outline">{tech}</Pill>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

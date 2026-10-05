import type { Service, Tone } from '@/lib/types';
import { Pill, Reveal } from '@/components/ui';
import { pad2, toneClass } from '@/lib/tone';
import { cn } from '@/lib/cn';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: Service;
  index: number;
  tone: Tone;
}

export function ServiceCard({ service, index, tone }: ServiceCardProps) {
  return (
    <Reveal className={styles.wrap}>
      <article className={cn(styles.card, toneClass(tone))}>
        <div className={styles.top}>
          <span className={styles.num}>{pad2(index + 1)}</span>
          <Pill>{service.time}</Pill>
        </div>
        <div className={styles.body}>
          <h3 className={styles.title}>{service.title}</h3>
          <p className={styles.desc}>{service.description}</p>
        </div>
      </article>
    </Reveal>
  );
}

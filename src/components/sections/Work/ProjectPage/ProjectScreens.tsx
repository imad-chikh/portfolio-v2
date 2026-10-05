import { PhoneMock } from '@/components/ui';
import { cn } from '@/lib/cn';
import styles from './ProjectPage.module.css';

/** Horizontal screenshot gallery. Hidden until screenshots are added. */
export function ProjectScreens({ name, screens }: { name: string; screens?: string[] }) {
  if (!screens?.length) return null;
  return (
    <section className={styles.screens}>
      <div className={cn('container', styles.screensHead)}>
        <h3 className={styles.subTitle}>Screens</h3>
        <span className={styles.scrollHint} aria-hidden>
          Scroll →
        </span>
      </div>
      <div className={styles.screensTrack}>
        {screens.map((src, i) => (
          <PhoneMock key={src} src={src} alt={`${name} screen ${i + 1}`} className={styles.screen} />
        ))}
      </div>
    </section>
  );
}

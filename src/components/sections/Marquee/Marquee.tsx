import { stack } from '@/content/stack';
import styles from './Marquee.module.css';

/** Infinitely scrolling strip of tech/stack items. */
export function Marquee({ items = stack }: { items?: string[] }) {
  // Rendered twice so the -50% keyframe loops seamlessly.
  const run = [...items, ...items];
  return (
    <div className={styles.strip} role="marquee" aria-label={items.join(', ')}>
      <div className={styles.track} aria-hidden>
        {run.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  );
}

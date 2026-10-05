import { cn } from '@/lib/cn';
import styles from './ProjectPage.module.css';

export function NextProject({ name, onClick }: { name: string; onClick: () => void }) {
  return (
    <button type="button" className={styles.next} onClick={onClick}>
      <span className={cn('container', styles.nextInner)}>
        <span className={styles.nextText}>
          <span className={styles.nextLabel}>Next project</span>
          <span className={styles.nextName}>{name}</span>
        </span>
        <span className={styles.nextArrow} aria-hidden>
          →
        </span>
      </span>
    </button>
  );
}

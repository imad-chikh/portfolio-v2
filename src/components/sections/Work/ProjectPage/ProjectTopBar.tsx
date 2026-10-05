import type { Ref } from 'react';
import { pad2 } from '@/lib/tone';
import { cn } from '@/lib/cn';
import styles from './ProjectPage.module.css';

interface ProjectTopBarProps {
  index: number;
  total: number;
  onClose: () => void;
  closeRef?: Ref<HTMLButtonElement>;
}

export function ProjectTopBar({ index, total, onClose, closeRef }: ProjectTopBarProps) {
  return (
    <div className={cn('container', styles.topBar)}>
      <button type="button" className={styles.back} onClick={onClose}>
        ← <span className={styles.desktopOnly}>Back to work</span>
        <span className={styles.mobileOnly}>Work</span>
      </button>
      <span className={styles.counter}>
        {pad2(index + 1)} / {pad2(total)}
      </span>
      <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Close project">
        ✕
      </button>
    </div>
  );
}

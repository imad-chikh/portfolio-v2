import type { Project } from '@/lib/types';
import { cn } from '@/lib/cn';
import styles from './ProjectPage.module.css';

/** Lime band of big-number highlights. Hidden when there are no results. */
export function ProjectResults({ results }: { results: Project['results'] }) {
  if (!results?.length) return null;
  return (
    <section className={styles.results}>
      <div className={cn('container', styles.resultsGrid)}>
        {results.map((r) => (
          <div key={r.label} className={styles.result}>
            <span className={styles.resultValue}>{r.value}</span>
            <span className={styles.resultLabel}>{r.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

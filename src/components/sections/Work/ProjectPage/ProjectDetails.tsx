import type { Project } from '@/lib/types';
import { Pill } from '@/components/ui';
import { cn } from '@/lib/cn';
import styles from './ProjectPage.module.css';

interface ProjectDetailsProps {
  features?: string[];
  tags?: string[];
  quote?: Project['quote'];
}

/** Key features + tech stack, with an optional client quote alongside. */
export function ProjectDetails({ features, tags, quote }: ProjectDetailsProps) {
  const hasFeatures = Boolean(features?.length);
  const hasTags = Boolean(tags?.length);
  if (!hasFeatures && !hasTags && !quote) return null;

  return (
    <section className={cn('container', styles.details, !quote && styles.detailsSingle)}>
      {(hasFeatures || hasTags) && (
        <div className={styles.features}>
          {hasFeatures && (
            <>
              <h3 className={styles.featuresTitle}>Key features</h3>
              <ul className={styles.featureList}>
                {features!.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </>
          )}
          {hasTags && (
            <div className={styles.builtWith}>
              <span className={styles.builtWithLabel}>Built with</span>
              <ul className={styles.tagList}>
                {tags!.map((t) => (
                  <li key={t}>
                    <Pill variant="outline">{t}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {quote && (
        <figure className={styles.quote}>
          <span className={styles.quoteMark} aria-hidden>
            “
          </span>
          <blockquote>{quote.text}</blockquote>
          <figcaption>{quote.by}</figcaption>
        </figure>
      )}
    </section>
  );
}

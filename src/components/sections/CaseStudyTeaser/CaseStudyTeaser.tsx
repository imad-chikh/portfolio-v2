import Link from 'next/link';
import { featuredCaseStudy as cs } from '@/content/caseStudies';
import { Reveal } from '@/components/ui';
import { caseStudyPath } from '@/lib/routes';
import styles from './CaseStudyTeaser.module.css';

/** Dark card under the Work carousel that links to the engineering case study page. */
export function CaseStudyTeaser() {
  if (!cs) return null;
  return (
    <section aria-label={cs.kicker} className={styles.section}>
      <Reveal className="container">
        <Link href={caseStudyPath(cs.slug)} className={styles.card}>
          <span className={styles.text}>
            <span className={styles.meta}>
              <span className={styles.pill}>{cs.kicker}</span>
              <span className={styles.status}>{cs.status}</span>
            </span>
            <span className={styles.title}>
              {cs.title} <span className={styles.accent}>{cs.titleAccent}</span>
            </span>
          </span>
          <span className={styles.more}>
            Read the case study
            <span className={styles.arrow} aria-hidden>
              →
            </span>
          </span>
        </Link>
      </Reveal>
    </section>
  );
}

import Link from 'next/link';
import type { CaseStudy } from '@/content/caseStudies';
import { site } from '@/config/site';
import { Logo, Reveal } from '@/components/ui';
import { Footer } from '@/components/layout/Footer';
import { AudienceViews } from './AudienceViews';
import styles from './CaseStudyPage.module.css';

/** Standalone engineering case study (/case-study/<slug>). */
export function CaseStudyPage({ cs }: { cs: CaseStudy }) {
  const tel = site.phone.replace(/\s+/g, '');
  return (
    <>
      <header className={styles.header}>
        <Link href="/#work" className={styles.back}>
          <Logo size="sm" className={styles.logo} />← Back to work
        </Link>
        <span className={styles.label}>Case study</span>
      </header>

      <main className={styles.main}>
        <article className={styles.panel}>
          <Reveal className={styles.intro}>
            <div className={styles.heading}>
              <div className={styles.meta}>
                <span className={styles.pill}>{cs.kicker}</span>
                <span className={styles.status}>{cs.status}</span>
              </div>
              <h1 className={styles.title}>
                {cs.title} <span className={styles.accent}>{cs.titleAccent}</span>
              </h1>
            </div>
            <div className={styles.lead}>
              <p className={styles.summary}>
                <span className={cs.summaryShort ? styles.long : undefined}>{cs.summary}</span>
                {cs.summaryShort && <span className={styles.short}>{cs.summaryShort}</span>}
              </p>
              <dl className={styles.facts}>
                {cs.facts.map((f) => (
                  <div key={f.label} className={styles.fact}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal>
            <AudienceViews cs={cs} />
          </Reveal>

          <Reveal className={styles.progress}>
            <div className={styles.progressHead}>
              <span>{cs.progress.label}</span>
              <span>{cs.progress.status}</span>
            </div>
            <ol className={styles.steps}>
              {cs.progress.steps.map((s) => (
                <li key={s.label} className={styles.step} data-state={s.percent >= 100 ? 'done' : s.percent > 0 ? 'active' : 'todo'}>
                  <span className={styles.bar} role="progressbar" aria-valuenow={s.percent} aria-valuemin={0} aria-valuemax={100} aria-label={s.label}>
                    <span style={{ width: `${s.percent}%` }} />
                  </span>
                  <span className={styles.stepLabel}>
                    {s.label}
                    {s.percent > 0 && s.percent < 100 && ` · ${s.percent}%`}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </article>

        <aside className={styles.note}>
          <span className={styles.noteLabel}>Confidentiality</span>
          <p>{cs.confidentiality}</p>
        </aside>

        <section className={styles.cta} aria-label="Contact">
          <h2 className={styles.ctaTitle}>{cs.cta}</h2>
          <div className={styles.ctaSide}>
            <a href={`tel:${tel}`} className={styles.phone}>
              {site.phone}
            </a>
            <Link href="/#contact" className={styles.ctaButton}>
              Contact options
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

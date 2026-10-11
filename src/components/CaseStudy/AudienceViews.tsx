'use client';

import { useState } from 'react';
import type { CaseStudy } from '@/content/caseStudies';
import { pad2 } from '@/lib/tone';
import { cn } from '@/lib/cn';
import styles from './AudienceViews.module.css';

const VIEWS = [
  { id: 'biz', label: 'For business owners', short: 'Business owners' },
  { id: 'tech', label: 'For tech leads', short: 'Tech leads' },
] as const;

/** Toggle between the plain-language benefits and the technical details. */
export function AudienceViews({ cs }: { cs: CaseStudy }) {
  const [view, setView] = useState<(typeof VIEWS)[number]['id']>('biz');

  return (
    <div className={styles.root}>
      <div className={styles.toggle} role="tablist" aria-label="Choose a view">
        {VIEWS.map((v) => (
          <button
            key={v.id}
            type="button"
            role="tab"
            id={`tab-${v.id}`}
            aria-selected={view === v.id}
            aria-controls={`panel-${v.id}`}
            className={cn(styles.tab, view === v.id && styles.tabOn)}
            onClick={() => setView(v.id)}
          >
            <span className={styles.long}>{v.label}</span>
            <span className={styles.short}>{v.short}</span>
          </button>
        ))}
      </div>

      {view === 'biz' ? (
        <ul id="panel-biz" role="tabpanel" aria-labelledby="tab-biz" className={styles.benefits}>
          {cs.benefits.map((b, i) => (
            <li key={b.title} className={cn(styles.benefit, i === 0 && styles.benefitLead)}>
              <span className={styles.check} aria-hidden>
                ✓
              </span>
              <span className={styles.benefitText}>
                <strong>{b.title}</strong>
                <span>{b.text}</span>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div id="panel-tech" role="tabpanel" aria-labelledby="tab-tech" className={styles.tech}>
          <div className={styles.pipelineWrap}>
            <span className={styles.caption}>GPS pipeline</span>
            <ol className={styles.pipeline}>
              {cs.pipeline.map((p, i) => (
                <li key={p.title} className={cn(styles.stage, p.highlight && styles.stageLead)}>
                  <span className={styles.num}>{pad2(i + 1)}</span>
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                </li>
              ))}
            </ol>
          </div>
          <dl className={styles.specs}>
            {cs.specs.map((s) => (
              <div key={s.label} className={styles.spec}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}

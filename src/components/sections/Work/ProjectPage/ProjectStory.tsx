import type { Project } from '@/lib/types';
import { pad2 } from '@/lib/tone';
import { cn } from '@/lib/cn';
import styles from './ProjectPage.module.css';

/** Problem → Approach → Outcome cards. Only filled-in steps render. */
export function ProjectStory({ caseStudy }: { caseStudy: Project['caseStudy'] }) {
  const steps = [
    { title: 'Problem', text: caseStudy?.problem },
    { title: 'Approach', text: caseStudy?.approach },
    { title: 'Outcome', text: caseStudy?.outcome, highlight: true },
  ].filter((s) => s.text);
  if (!steps.length) return null;

  return (
    <section className={cn('container', styles.story)}>
      <h3 className={styles.subTitle}>The story</h3>
      <div className={styles.storyGrid} style={{ ['--cols' as string]: steps.length }}>
        {steps.map((s, i) => (
          <div key={s.title} className={cn(styles.storyCard, s.highlight && styles.storyCardHighlight)}>
            <span className={styles.storyNum}>{pad2(i + 1)}</span>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

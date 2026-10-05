import { experience, experienceIntro } from '@/content/experience';
import { Reveal, SectionTitle } from '@/components/ui';
import { cn } from '@/lib/cn';
import { TimelineItem } from './TimelineItem';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <section id="experience" className={cn('container', styles.section)}>
      <Reveal>
        <SectionTitle>{experienceIntro.title}</SectionTitle>
      </Reveal>
      <ol className={styles.list}>
        {experience.map((item, i) => (
          <TimelineItem key={`${item.role}-${item.start}`} item={item} current={i === 0 && item.end === null} />
        ))}
      </ol>
    </section>
  );
}

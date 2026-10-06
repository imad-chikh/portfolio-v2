import type { Project } from '@/lib/types';
import { PhoneMock, StoreBadge } from '@/components/ui';
import { cn } from '@/lib/cn';
import styles from './ProjectPage.module.css';

export function ProjectHero({ project, titleId }: { project: Project; titleId: string }) {
  const cs = project.caseStudy ?? {};
  const pill = [project.year, project.platforms ?? 'iOS + Android'].filter(Boolean).join(' · ');
  const facts = [
    { label: 'Role', value: cs.role },
    { label: 'Timeline', value: cs.timeline },
    { label: 'Client', value: cs.client },
  ].filter((f) => f.value);
  const [screenA, screenB] = project.screens ?? [];
  const longestWord = Math.max(...project.name.split(/\s+/).map((w) => w.length));

  return (
    <div className={cn('container', styles.hero)}>
      <div className={styles.heroText}>
        <span className={styles.heroPill}>{pill}</span>
        <h2 id={titleId} className={styles.heroName} style={{ ['--longest-word' as string]: longestWord }}>
          {project.name}
        </h2>
        {(cs.summary ?? project.tagline) && <p className={styles.heroSummary}>{cs.summary ?? project.tagline}</p>}
        {facts.length > 0 && (
          <dl className={styles.heroFacts}>
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {project.links && project.links.length > 0 && (
          <div className={styles.badges}>
            {project.links.map((link) => (
              <StoreBadge key={link.href} link={link} />
            ))}
          </div>
        )}
      </div>
      <div className={styles.heroPhones} aria-hidden>
        <PhoneMock eager src={screenA} icon={project.logo} className={cn(styles.heroPhone, styles.heroPhoneA)} />
        <PhoneMock eager src={screenB} icon={project.logo} className={cn(styles.heroPhone, styles.heroPhoneB)} />
      </div>
    </div>
  );
}

'use client';

import { useCallback, useRef, useState } from 'react';
import { projects, projectTones, workIntro } from '@/content/projects';
import { SectionTitle } from '@/components/ui';
import { pickTone } from '@/lib/tone';
import { cn } from '@/lib/cn';
import { ProjectCard } from './ProjectCard';
import { ProjectOverlay } from './ProjectPage';
import styles from './Work.module.css';

export function Work() {
  const [selected, setSelected] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="work" className={styles.section}>
      <div className={cn('container', styles.head)}>
        <SectionTitle>{workIntro.title}</SectionTitle>
        <div className={styles.arrows}>
          <button type="button" className={styles.prev} onClick={() => scroll(-1)} aria-label="Previous project">
            ←
          </button>
          <button type="button" className={styles.next} onClick={() => scroll(1)} aria-label="Next project">
            →
          </button>
        </div>
        <span className={styles.swipe} aria-hidden>
          Swipe →
        </span>
      </div>

      <div ref={trackRef} className={styles.track}>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            tone={pickTone(projectTones, i, project.tone)}
            selected={selected === i}
            onSelect={() => setSelected(i)}
          />
        ))}
      </div>

      <ProjectOverlay projects={projects} index={selected} onClose={close} onChange={setSelected} />
    </section>
  );
}

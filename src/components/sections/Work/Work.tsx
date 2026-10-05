'use client';

import { useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { projects, projectTones, workIntro } from '@/content/projects';
import { SectionTitle } from '@/components/ui';
import { pickTone } from '@/lib/tone';
import { cn } from '@/lib/cn';
import { projectPath, projectSlugFromPath } from '@/lib/routes';
import { ProjectCard } from './ProjectCard';
import { ProjectOverlay } from './ProjectPage';
import styles from './Work.module.css';

export function Work() {
  // The open project lives in the URL (/work/<slug>), so each one is its own
  // page view in analytics, can be linked to directly, and closes with Back.
  const pathname = usePathname();
  const slug = projectSlugFromPath(pathname);
  const found = slug ? projects.findIndex((p) => p.slug === slug) : -1;
  const selected = found >= 0 ? found : null;
  // True when the project was opened from this page, so closing can just go Back.
  const openedHere = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  const open = (i: number) => {
    openedHere.current = true;
    window.history.pushState(null, '', projectPath(projects[i].slug));
  };
  // Switching project replaces the entry, so Back still returns to the site.
  const change = useCallback((i: number) => {
    window.history.replaceState(null, '', projectPath(projects[i].slug));
  }, []);
  const close = useCallback(() => {
    if (openedHere.current) {
      openedHere.current = false;
      window.history.back();
    } else {
      window.history.pushState(null, '', '/');
    }
  }, []);

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
            onSelect={() => open(i)}
          />
        ))}
      </div>

      <ProjectOverlay projects={projects} index={selected} onClose={close} onChange={change} />
    </section>
  );
}

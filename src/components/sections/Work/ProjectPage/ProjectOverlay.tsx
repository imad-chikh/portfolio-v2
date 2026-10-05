'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '@/lib/types';
import { site } from '@/config/site';
import { cn } from '@/lib/cn';
import { ProjectTopBar } from './ProjectTopBar';
import { ProjectHero } from './ProjectHero';
import { ProjectResults } from './ProjectResults';
import { ProjectStory } from './ProjectStory';
import { ProjectScreens } from './ProjectScreens';
import { ProjectDetails } from './ProjectDetails';
import { NextProject } from './NextProject';
import styles from './ProjectPage.module.css';

const EXIT_MS = 400;

interface ProjectOverlayProps {
  projects: Project[];
  /** Index of the open project, or null when closed */
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

/** Full-screen project page that slides up over the site. */
export function ProjectOverlay({ projects, index, onClose, onChange }: ProjectOverlayProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  // Keeps the last project rendered while the exit animation plays.
  const [current, setCurrent] = useState(index ?? 0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Enter / exit
  useEffect(() => {
    if (index === null) {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), EXIT_MS);
      return () => clearTimeout(t);
    }
    setCurrent(index);
    setMounted(true);
    let raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(raf);
  }, [index]);

  // Jump back to the top and update the tab title when switching project
  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: 0 });
  }, [current]);
  useEffect(() => {
    if (index === null) return;
    document.title = `${projects[index].name} — ${site.name}`;
    return () => {
      document.title = site.seo.title;
    };
  }, [index, projects]);

  // Scroll lock, Escape to close, initial focus
  useEffect(() => {
    if (!mounted) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [mounted, onClose]);

  if (!mounted) return null;

  const project = projects[current];
  const next = (current + 1) % projects.length;
  const titleId = `project-title-${project.slug}`;

  return createPortal(
    <div className={cn(styles.root, visible && styles.visible)} role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className={styles.backdrop} aria-hidden />
      <div
        ref={scrollerRef}
        className={styles.scroller}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <article className={styles.sheet}>
          <div className={styles.top}>
            <ProjectTopBar index={current} total={projects.length} onClose={onClose} closeRef={closeRef} />
            <ProjectHero project={project} titleId={titleId} />
          </div>
          <ProjectResults results={project.results} />
          <ProjectStory caseStudy={project.caseStudy} />
          <ProjectScreens name={project.name} screens={project.screens} />
          <ProjectDetails features={project.features} tags={project.tags} quote={project.quote} />
          {projects.length > 1 && <NextProject name={projects[next].name} onClick={() => onChange(next)} />}
        </article>
      </div>
    </div>,
    document.body,
  );
}

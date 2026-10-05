import type { Project, Tone } from '@/lib/types';
import { AppIcon, IconCircle, PhoneMock } from '@/components/ui';
import { pad2, toneClass } from '@/lib/tone';
import { cn } from '@/lib/cn';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
  tone: Tone;
  selected: boolean;
  onSelect: () => void;
}

export function ProjectCard({ project, index, tone, selected, onSelect }: ProjectCardProps) {
  const meta = [pad2(index + 1), project.year].filter(Boolean).join(' · ');
  return (
    <button
      type="button"
      className={cn(styles.card, toneClass(tone), selected && styles.selected)}
      onClick={onSelect}
      aria-haspopup="dialog"
      aria-label={`Open ${project.name} project`}
    >
      <span className={styles.info}>
        {project.logo && <AppIcon src={project.logo} className={styles.appIcon} />}
        <span className={styles.meta}>{meta}</span>
        <span className={styles.name}>{project.name}</span>
        {project.tagline && <span className={styles.tagline}>{project.tagline}</span>}
      </span>
      <span className={styles.footer}>
        {project.tags && project.tags.length > 0 && <span className={styles.tags}>{project.tags.join(', ')}</span>}
        <IconCircle>→</IconCircle>
      </span>
      <PhoneMock src={project.cover ?? project.screens?.[0]} icon={project.logo} alt={`${project.name} app screen`} className={styles.phone} />
    </button>
  );
}

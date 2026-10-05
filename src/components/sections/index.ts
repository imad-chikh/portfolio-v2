import type { ComponentType } from 'react';
import type { SectionId } from '@/config/sections';
import { Hero } from './Hero/Hero';
import { Marquee } from './Marquee/Marquee';
import { Services } from './Services/Services';
import { Work } from './Work/Work';
import { Experience } from './Experience/Experience';
import { About } from './About/About';
import { Contact } from './Contact/Contact';

/** Maps a section id (from src/config/sections.ts) to its component. */
export const sectionComponents: Record<SectionId, ComponentType> = {
  hero: Hero,
  marquee: Marquee,
  services: Services,
  work: Work,
  experience: Experience,
  about: About,
  contact: Contact,
};

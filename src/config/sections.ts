/**
 * SECTION REGISTRY CONFIG
 * - Reorder the array to reorder the page.
 * - Set `enabled: false` to hide a section (its nav link disappears too).
 * - `nav` adds the section to the header navigation.
 * To add a new section: build it in src/components/sections/<Name>/,
 * register it in src/components/sections/index.ts, then add it here.
 */
export type SectionId =
  | 'hero'
  | 'marquee'
  | 'services'
  | 'work'
  | 'experience'
  | 'about'
  | 'contact';

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  nav?: string;
}

export const sections: SectionConfig[] = [
  { id: 'hero', enabled: true },
  { id: 'marquee', enabled: true },
  { id: 'services', enabled: true, nav: 'Services' },
  { id: 'work', enabled: true, nav: 'Work' },
  { id: 'experience', enabled: true, nav: 'Experience' },
  { id: 'about', enabled: true, nav: 'About' },
  { id: 'contact', enabled: true },
];

export const enabledSections = sections.filter((s) => s.enabled);

export const navItems = enabledSections
  .filter((s): s is SectionConfig & { nav: string } => Boolean(s.nav))
  .map((s) => ({ label: s.nav, href: `#${s.id}` }));

/** Shared content types. Content lives in src/content, branding in src/config. */

/** Surface tones defined in src/styles/tokens.css (.tone-*) */
export type Tone = 'forest' | 'lime' | 'sand' | 'ink' | 'cream';

export interface Service {
  title: string;
  /** Typical timeline shown in the pill, e.g. "6–10 weeks" */
  time: string;
  description: string;
  /** Optional override; otherwise tones cycle automatically */
  tone?: Tone;
}

export interface ProjectLink {
  href: string;
  /** Badge caption; App Store / Google Play links get a default ("Download on the" / "Get it on") */
  note?: string;
  /** Text for non-store links (website, demo…) */
  label?: string;
}

export interface Project {
  slug: string;
  name: string;
  /** App icon (square image under /public), shown on the card and as the phone splash */
  logo?: string;
  year?: string;
  /** Shown in the project page pill. Defaults to "iOS + Android". */
  platforms?: string;
  tagline?: string;
  tags?: string[];
  tone?: Tone;
  /** Store / website links — App Store & Google Play URLs render as store badges */
  links?: ProjectLink[];
  /** Screenshot paths under /public. The first two also fill the hero phones. */
  screens?: string[];
  /** Screenshot shown on the home-page card. Defaults to the first of `screens`. */
  cover?: string;
  /** Big-number highlights, e.g. { value: '500k+', label: 'Downloads' } */
  results?: { value: string; label: string }[];
  features?: string[];
  quote?: { text: string; by: string };
  /** Every field is optional — the project page only renders what you fill in. */
  caseStudy?: {
    summary?: string;
    role?: string;
    timeline?: string;
    client?: string;
    problem?: string;
    approach?: string;
    outcome?: string;
  };
}

export interface ExperienceItem {
  start: string;
  /** Use null for a current role (renders as "now") */
  end: string | null;
  role: string;
  org: string;
  type: string;
  /** e.g. "Algiers, Algeria · Remote" */
  location?: string;
  /** Company logo path under /public, e.g. '/images/logos/slickpay.png' */
  logo?: string;
  /** Two-letter badge shown when no logo is set */
  initials: string;
  description?: string;
  stack?: string[];
}

export interface Fact {
  label: string;
  value: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

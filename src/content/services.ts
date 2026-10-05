import type { Service, Tone } from '@/lib/types';

export const servicesIntro = {
  title: 'Services',
  lead: 'Fixed scope, clear timeline, one person accountable from first call to launch.',
  leadShort: 'Fixed scope, clear timeline, one person accountable.',
};

/** Tones cycle in this order unless a service sets its own `tone`. */
export const serviceTones: Tone[] = ['forest', 'lime', 'sand', 'ink'];

export const services: Service[] = [
  {
    title: 'MVP build',
    time: '6–10 weeks',
    description: 'From idea to a working app in both stores: scoping, UI, backend integration and release.',
  },
  {
    title: 'App rescue',
    time: '2–4 weeks',
    description: 'I take over an existing Flutter app, fix crashes, clean up the code and get updates shipping again.',
  },
  {
    title: 'Design to Flutter',
    time: '3–6 weeks',
    description: 'Your Figma screens turned into an accurate, production-ready Flutter app.',
  },
  {
    title: 'Release & upkeep',
    time: 'Monthly',
    description: 'App Store and Google Play setup, CI/CD, updates and monitoring after launch.',
  },
];

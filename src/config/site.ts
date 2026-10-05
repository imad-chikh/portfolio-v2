import type { SocialLink } from '@/lib/types';

/**
 * SITE & BRANDING CONFIG
 * Personal details, contact info and SEO. Colors/fonts live in src/styles/tokens.css.
 */
export const site = {
  name: 'Imad Eddine Chikh',
  shortName: 'Imad',
  /** Monogram shown in the logo tile */
  initials: 'ic',
  role: 'Mobile engineer — Flutter',
  url: 'https://imadchikh.vercel.app',
  email: 'imadedinchikh@gmail.com',
  bookingUrl: 'https://calendly.com/imadedinchikh/let-s-talk-30-min',
  cvUrl: '/cv/Imad-Eddine-Chikh-CV.pdf', // file lives in /public/cv
  replyTime: 'Replies within 24 hours',

  availability: {
    enabled: true,
    label: 'Taking projects from November 2026',
    shortLabel: 'Taking projects from Nov 2026',
  },

  /** Primary call-to-action in the header */
  headerCta: { label: 'Hire me', href: '#contact' },

  socials: [
    { label: 'GitHub', href: 'https://github.com/imad-chikh' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/imad-eddine-chikh-133795218/' },
    { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01fc1692cd7e81e4d1' },
  ] satisfies SocialLink[],

  seo: {
    title: 'Imad Eddine Chikh — Flutter mobile engineer',
    description:
      'Flutter mobile engineer with 3 years shipping cross-platform apps for fintech, logistics and e-commerce. Six apps on the App Store and Play Store, one past 500k downloads.',
  },
} as const;

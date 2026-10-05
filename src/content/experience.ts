import type { ExperienceItem } from '@/lib/types';

export const experienceIntro = { title: 'Experience' };

/**
 * Newest first. The first item is highlighted as the current role when `end` is null.
 * Optional: `logo` (path under /public), `location`, `description`, `stack`.
 */
export const experience: ExperienceItem[] = [
  {
    start: '2026',
    end: null,
    role: 'Mobile Application Developer',
    org: 'SlickPay',
    type: 'Full-time',
    location: 'Algiers, Algeria · Remote',
    initials: 'SP',
    logo: '/images/logos/slickpay.jpg',
    description:
      'Develop and maintain the SlickPay wallet app: QR-code payments, peer-to-peer transfers, mobile top-up and bill payment, plus card payment flows with full transaction, retry and failure handling. I also own the iOS and Android release pipelines and keep each release within store review rules for financial apps.',
    stack: ['Flutter', 'Dart', 'Card payments', 'QR payments', 'CI/CD'],
  },
  {
    start: '2024',
    end: '2026',
    role: 'Mobile Application Developer',
    org: 'CAMIO LLC',
    type: 'Full-time',
    location: 'Dover, Delaware, US · Remote',
    initials: 'CA',
    logo: '/images/logos/camio.webp',
    description:
      'Built and maintained the Flutter logistics app across Algeria, Morocco and Egypt, reaching 500,000+ downloads. Integrated Stripe, Payzone and SATIM into one checkout, collaborated on an ML model estimating cargo trip costs, and owned iOS and Android releases on a fully remote US team.',
    stack: ['Flutter', 'Stripe', 'Payzone', 'SATIM', 'Azure DevOps', 'Codemagic'],
  },
  {
    start: '2023',
    end: '2024',
    role: 'Mobile Developer',
    org: 'DelivriLi',
    type: 'Part-time',
    location: 'Médéa, Algeria · Hybrid',
    initials: 'DL',
    logo: '/images/logos/delivrili.jpg',
    description:
      'Developed cross-platform delivery apps with REST API integration, turned Figma designs into responsive iOS and Android interfaces, and restructured the codebase around a layered architecture as the team grew.',
    stack: ['Flutter', 'Dart', 'REST APIs', 'Figma'],
  },
];

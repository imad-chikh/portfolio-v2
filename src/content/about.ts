import type { Fact } from '@/lib/types';

export const about = {
  title: 'About me',
  /** Path under /public, e.g. '/images/about.jpg'. Leave empty to show a placeholder. */
  photo: '/images/about/imad-speaking.webp',
  photoAlt: 'Imad Eddine Chikh speaking at Université Yahia Fares Médéa',
  sticker: "Hi, I'm Imad",
  lead: "I'm a mobile engineer with 3 years building cross-platform Flutter apps for fintech, logistics and e-commerce.",
  body: "I've shipped six apps to the App Store and Play Store, one of them past 500k downloads across three markets, and spent two years working remotely with teams in the United States and Canada. I like owning a feature end to end: architecture, payments and API integration, offline behaviour and release on both stores.",
  facts: [
    { label: 'Based in', value: 'Algeria' },
    { label: 'Languages', value: 'Arabic, English, French' },
    { label: 'Works with', value: 'Remote teams, open to relocation' },
  ] satisfies Fact[],
  cvLabel: 'Download CV ↓',
};

import type { Project, Tone } from '@/lib/types';

export const workIntro = { title: 'Selected work' };

/** Tones cycle in this order unless a project sets its own `tone`. */
export const projectTones: Tone[] = ['forest', 'lime', 'sand'];

/**
 * Only `slug` and `name` are required. Everything else is optional and the
 * card / project page render just what you fill in:
 *  - `screens`  → hero phones + "Screens" gallery (paths under /public)
 *  - `cover`    → screenshot on the home-page card (defaults to the first screen)
 *  - `results`  → lime big-number band, e.g. { value: '500k+', label: 'Downloads' }
 *  - `quote`    → client quote card
 *  - `caseStudy.problem / approach / outcome` → "The story" cards
 * App icons live in /public/images/projects.
 */
export const projects: Project[] = [
  {
    slug: 'solvgo',
    name: 'SolvGo',
    logo: '/images/projects/solvgo.png',
    screens: [
      '/images/projects/solvgo/welcome.webp',
      '/images/projects/solvgo/home.webp',
      '/images/projects/solvgo/timesheets.webp',
      '/images/projects/solvgo/quote-saved.webp',
    ],
    cover: '/images/projects/solvgo/home.webp',
    tagline: 'Field service management, from quote to payment.',
    tags: ['Flutter', 'Real-time tracking', 'Invoicing', 'Payments'],
    links: [
      { href: 'https://apps.apple.com/app/id6751549278' },
      { href: 'https://play.google.com/store/apps/details?id=com.solvgo.mobile' },
    ],
    features: [
      'Quoting and scheduling for every job',
      'Invoicing and payment collection',
      'Job assignment for dispatchers',
      'Real-time progress tracking for technicians',
    ],
    caseStudy: {
      summary:
        'A field service platform covering the full job lifecycle: quoting, scheduling, invoicing and payment collection.',
      role: 'Freelance mobile engineer',
      approach:
        'Built job assignment and real-time progress tracking so dispatchers and technicians stay in sync from planning through to delivery.',
      outcome: 'Live on the App Store and Google Play.',
    },
  },
  {
    slug: 'findeat',
    name: 'FindEat',
    logo: '/images/projects/findeat.png',
    screens: [
      '/images/projects/findeat/my-qr.webp',
      '/images/projects/findeat/splash.webp',
      '/images/projects/findeat/get-started.webp',
      '/images/projects/findeat/favorites.webp',
    ],
    tagline: 'Local deals, discovered and redeemed by QR.',
    tags: ['Flutter', 'QR redemption', 'Geolocation', 'Subscriptions'],
    links: [
      { href: 'https://apps.apple.com/app/id6740823217' },
      { href: 'https://play.google.com/store/apps/details?id=com.findeat.client' },
      { href: 'https://apps.apple.com/app/id6740823394', note: 'FindEat Business on the' },
      { href: 'https://play.google.com/store/apps/details?id=com.findeat.business', note: 'FindEat Business on' },
    ],
    features: [
      'Location-based deal discovery',
      'QR scan-and-redeem between the two apps',
      'Merchant dashboard for managing promotions',
      'Redemption metrics for merchants',
      'Subscription-gated merchant accounts',
    ],
    caseStudy: {
      summary:
        'A two-app ecosystem: a consumer app for location-based deal discovery, and a merchant app for managing promotions and tracking redemptions.',
      client: '9530-0869 Quebec Inc',
      approach:
        'Built the QR scan-and-redeem loop connecting both apps, plus subscription-gated access for merchant accounts. Worked in French with non-technical stakeholders.',
      outcome: 'FindEat and FindEat Business are both live on the App Store and Google Play.',
    },
  },
  {
    slug: 'amar-hanoutek',
    name: '3amar 7anoutek',
    logo: '/images/projects/amar-hanoutek.png',
    screens: [
      '/images/projects/amar-hanoutek/home.webp',
      '/images/projects/amar-hanoutek/product-details.webp',
      '/images/projects/amar-hanoutek/cart.webp',
      '/images/projects/amar-hanoutek/splash.webp',
    ],
    cover: '/images/projects/amar-hanoutek/splash.webp',
    tagline: 'Arabic-first e-commerce with secure checkout.',
    tags: ['Flutter', 'E-commerce', 'Arabic / RTL'],
    links: [
      { href: 'https://apps.apple.com/app/id6602831207' },
      { href: 'https://play.google.com/store/apps/details?id=com.amarhanoutek.app' },
    ],
    features: [
      'Catalogue browsing and search',
      'Secure checkout and order tracking',
      'Product recommendations',
      'Inventory-aware listings',
      'Arabic-first interface',
    ],
    caseStudy: {
      summary: 'A full e-commerce app with catalogue browsing, search, secure checkout and order tracking.',
      role: 'Freelance mobile engineer',
      approach: 'Added product recommendations and inventory-aware listings on top of an Arabic-first interface.',
      outcome: 'Live on the App Store and Google Play.',
    },
  },
  {
    slug: 'pharma-express',
    name: 'Pharma Express',
    logo: '/images/projects/pharma-express.png',
    screens: [
      '/images/projects/pharma-express/nearby-pharmacies.webp',
      '/images/projects/pharma-express/pharmacy-route.webp',
      '/images/projects/pharma-express/splash.webp',
      '/images/projects/pharma-express/login.webp',
    ],
    platforms: 'Android · iOS in review',
    tagline: 'Find which nearby pharmacy has your medicine.',
    tags: ['Flutter', 'Google Maps', 'Local notifications'],
    links: [{ href: 'https://play.google.com/store/apps/details?id=com.pharmaexpress.app' }],
    features: [
      'Find which nearby pharmacies stock a medicine',
      'Location-based search with map integration',
      'Medication reminders for recurring doses',
    ],
    caseStudy: {
      summary:
        'A rebuilt app that shows which nearby pharmacies stock a given medicine, with reminders for recurring doses.',
      role: 'Part-time mobile engineer',
      approach:
        'Location-based search with map integration, and scheduled local notifications for reminders. Helped scope features with stakeholders.',
      outcome: 'Owned the release: live on Google Play, App Store submission in review.',
    },
  },
];

/**
 * ENGINEERING CASE STUDIES — standalone pages at /case-study/<slug>.
 * Used for work under NDA (no screens, no client name), so they are separate
 * from the app projects in projects.ts. The home page shows a teaser card
 * for `featuredCaseStudy` right after the Work carousel.
 */
export interface CaseStudyProgressStep {
  label: string;
  /** 0–100 */
  percent: number;
}

export interface CaseStudy {
  slug: string;
  /** Pill text, e.g. "Engineering case study" */
  kicker: string;
  /** Small note next to the pill */
  status: string;
  /** Title is rendered as `title` + highlighted `titleAccent` */
  title: string;
  titleAccent: string;
  summary: string;
  /** Shorter summary for small screens */
  summaryShort?: string;
  facts: { label: string; value: string }[];
  /** "For business owners" view */
  benefits: { title: string; text: string }[];
  /** "For tech leads" view */
  /** Steps of the GPS pipeline; `highlight` paints one lime */
  pipeline: { title: string; text: string; highlight?: boolean }[];
  specs: { label: string; value: string }[];
  progress: { label: string; status: string; steps: CaseStudyProgressStep[] };
  confidentiality: string;
  cta: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'location-engine',
    kicker: 'Engineering case study',
    status: 'Client name withheld · ongoing',
    title: "Making a delivery app's",
    titleAccent: 'locations accurate.',
    summary:
      'A ride and delivery platform in Algeria, Morocco, Egypt and France was losing money to wrong addresses, unreliable driver tracking and GPS fraud. I am rebuilding how the mobile app searches, maps and tracks locations.',
    summaryShort:
      'A ride and delivery platform in 4 countries was losing money to wrong addresses, unreliable tracking and GPS fraud. I am rebuilding how the app searches, maps and tracks locations.',
    facts: [
      { label: 'Role', value: 'Senior mobile engineer' },
      { label: 'Markets', value: '4 countries' },
      { label: 'Scope', value: 'Search, maps, GPS' },
    ],
    benefits: [
      {
        title: 'Customers find their address faster',
        text: 'Search suggests places after 3 letters and remembers recent and saved addresses.',
      },
      {
        title: 'Prices match the real trip',
        text: 'Pickup and drop-off points are accurate, so the price is right the first time.',
      },
      {
        title: 'Drivers stay visible, even offline',
        text: 'The app keeps recording the trip with no signal and sends it when the connection returns.',
      },
      { title: 'Lower map bills', text: 'Results are reused instead of asking the map company every time.' },
      {
        title: 'Changes without an app update',
        text: 'The team can adjust tracking settings remotely, for every driver at once.',
      },
    ],
    pipeline: [
      { title: 'GPS fix', text: 'accuracy, speed, heading' },
      { title: 'Filter', text: 'drop fixes worse than 100 m', highlight: true },
      { title: 'Offline queue', text: 'survives restarts and crashes' },
      { title: 'Batch upload', text: '20 points per flush' },
    ],
    specs: [
      { label: 'Search', value: '500 ms debounce · 3 char minimum' },
      { label: 'Search cache', value: '10 min TTL · 100 entries' },
      { label: 'Reverse geocoding', value: '24 h local cache · 200 entries' },
      { label: 'Recent places', value: '50, kept between sessions' },
      { label: 'Maps', value: 'Provider-neutral · Mapbox primary, Google fallback' },
      { label: 'GPS', value: '50 m distance filter · 100 m accuracy cut-off' },
      { label: 'Remote config', value: 'All geo values tunable, safe fallbacks, kill switch' },
      { label: 'Ownership', value: 'Mobile: caches, offline queue, map adapters' },
    ],
    progress: {
      label: 'Project progress',
      status: 'Phase 3 of 5 · June 2026',
      steps: [
        { label: 'Plan', percent: 100 },
        { label: 'Search', percent: 100 },
        { label: 'Tracking', percent: 70 },
        { label: 'Pricing', percent: 0 },
        { label: 'Fraud', percent: 0 },
      ],
    },
    confidentiality:
      "The client's name, screens and internal figures are withheld. Details here describe the approach and the published progress only.",
    cta: "Have an app with a similar problem? Let's talk.",
  },
];

/** The case study teased on the home page. */
export const featuredCaseStudy = caseStudies[0];

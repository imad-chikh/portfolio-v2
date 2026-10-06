# Portfolio V2

Personal portfolio for Imad Eddine Chikh, built with Next.js (App Router), TypeScript and CSS Modules. It implements the Claude Design file *Portfolio Personal v2* (desktop 1280 and mobile 390 frames) as one responsive page.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

> The scripts use `--webpack` because Turbopack in Next 16.3 fails to load the Instrument Sans Google font.

## Where things live

```
src/
├── config/
│   ├── site.ts          ← name, email, socials, availability, CV link, SEO
│   └── sections.ts      ← section order, on/off switches, nav labels
├── content/             ← all copy & data (one file per section)
│   ├── hero.ts  services.ts  projects.ts  experience.ts
│   ├── about.ts contact.ts   stack.ts
├── styles/
│   ├── tokens.css       ← THEME: colors, fonts, type scale, radii, motion, card tones
│   ├── animations.css   ← keyframes + scroll-reveal
│   └── globals.css
├── app/
│   ├── fonts.ts         ← brand fonts (next/font)
│   ├── layout.tsx  page.tsx
├── components/
│   ├── ui/              ← reusable primitives (Button, Pill, Logo, Reveal, PhoneMock…)
│   ├── layout/          ← Header (with mobile menu), Footer
│   └── sections/        ← one folder per section + index.ts registry
├── hooks/               ← useInView, useCountUp
└── lib/                 ← types, tone helpers, cn()
```

## Common tasks

**Edit text, projects, jobs, services.** Edit the matching file in `src/content/`. Components never hold copy.

**Hide or reorder a section.** In `src/config/sections.ts`, set `enabled: false` or move the entry. Nav links update automatically.

**Add a new section.**
1. Create `src/components/sections/<Name>/<Name>.tsx` (and a `.module.css` file).
2. Add its id to the `SectionId` type and the `sections` array in `src/config/sections.ts`.
3. Register it in `src/components/sections/index.ts`.

**Rebrand or retheme.**
- Colors, radii, type scale and motion: `src/styles/tokens.css`.
- Fonts: `src/app/fonts.ts`.
- Card color combos are named *tones* (`forest`, `lime`, `sand`, `ink`, `cream`) and are also defined in `tokens.css`. Services and projects cycle through the tone list in their content file, and you can pin one with `tone: 'ink'`.

**Add your photo, project screenshots and CV.**
- Photo: put it in `public/images/` and set `photo: '/images/you.jpg'` in `src/content/about.ts`.
- App screens: set `screens: ['/images/projects/solvgo-1.png', …]` on a project in `src/content/projects.ts`. The first two fill the phones on the project page, and all of them appear in its Screens gallery.
- CV: replace `public/cv/Imad-Eddine-Chikh-CV.pdf` (or change `cvUrl` in `src/config/site.ts`).

**Project pages.** Clicking a project card opens a full project page at its own address, `/work/<slug>` (for example `/work/solvgo`). Each one is a separate page view in Vercel Analytics, can be linked to directly, and is listed in `/sitemap.xml`. The slug comes from `slug` in `projects.ts`. Each block appears only when its data is filled in: `results` (big numbers), `caseStudy.problem/approach/outcome` (the story), `screens`, `features`, `tags`, `quote`, and `links` (App Store and Google Play URLs become store badges).

## Still to fill in

- `projects.ts`: years, screenshots, results, the problem behind each project, and client quotes

# CLAUDE.md — Portfolio V2 (imadchikh.com)

Read this first. It sums up how the site is built, what has been done, the decisions behind it, the known gotchas, and what is still open. `README.md` is the shorter how-to for the owner.

## The project

Personal portfolio of **Imad Eddine Chikh**, a Flutter mobile engineer based in Algeria.
- **Live:** https://imadchikh.com (deploys from the `main` branch)
- **Repo:** https://github.com/imad-chikh/portfolio-v2 (public)
- **Hosting:** Vercel, Hobby plan. The project is `portfolio-v2`. DNS for `imadchikh.com` is at **Namecheap**.
- **Design source:** the Claude Design project "Mobile developer portfolio UI", file `Portfolio Personal v2.dc.html`, with a desktop frame at 1280 and a mobile frame at 390. The latest export the owner shared was at `~/Downloads/Mobile developer portfolio UI/`. The site recreates that design as one responsive page.

## Stack and commands

Next.js 16 (App Router), React 19, TypeScript 5, CSS Modules plus global design tokens, `clsx`, `@vercel/analytics`, `@vercel/speed-insights`. There is no CSS framework and no test suite.

```bash
npm run dev        # http://localhost:3000
npm run build      # production build (run before pushing)
npm run typecheck  # tsc --noEmit
```

**`dev` and `build` use `--webpack` on purpose.** Turbopack in Next 16.3 fails to load the Instrument Sans Google font ("next/font/google queries have exactly one entry"). Don't remove the flag unless that is fixed.

## Architecture: where things live

The site is modular so sections, content and branding can change without touching component internals.

```
src/
├── config/
│   ├── site.ts        name, email, socials, bookingUrl (Calendly), cvUrl, availability badge, SEO, url
│   ├── sections.ts    section ORDER + enabled flags + nav labels (the nav is derived from this)
│   └── env.ts         isProduction (VERCEL_ENV === 'production')
├── content/           ALL copy and data, one file per section (components hold no copy)
│   hero.ts services.ts projects.ts experience.ts about.ts contact.ts stack.ts
├── styles/
│   ├── tokens.css     THE theme: colors, fonts, fluid type scale, radii, motion, and "tones"
│   ├── animations.css scroll-reveal styles only (see the keyframes gotcha below)
│   └── globals.css
├── app/
│   ├── layout.tsx     fonts, metadata, robots (noindex off-production), <Analytics/>, <SpeedInsights/>
│   ├── page.tsx       → <HomePage/>
│   ├── work/[slug]/page.tsx  → the same <HomePage/>; the Work section opens that project (SSG, per-project metadata)
│   ├── sitemap.ts     / plus /work/<slug> for each project
│   └── fonts.ts       Bricolage Grotesque (display), Instrument Sans (body), JetBrains Mono
├── components/
│   ├── HomePage.tsx   Header + sections rendered from config/sections.ts + Footer
│   ├── layout/        Header (with mobile menu below 900px), Footer
│   ├── sections/      one folder per section; index.ts maps section id → component
│   │   Hero, Marquee, Services, Work (+ ProjectCard, ProjectPage/*), Experience (+ TimelineItem), About (+ PhotoFrame), Contact (+ ContactCard, CopyEmailCard)
│   └── ui/            primitives: Button, Pill, Logo, AppIcon, IconCircle, PhoneMock, PulseDot, Reveal, SectionTitle, StoreBadge
├── hooks/             useInView (reveal-on-scroll), useCountUp (timeline years)
└── lib/               types.ts, tone.ts (toneClass/pickTone/pad2), routes.ts (projectPath/projectSlugFromPath), cn.ts
```

**Common changes:**
- Edit copy or data: the matching file in `src/content/`.
- Hide or reorder a section: `src/config/sections.ts`.
- Add a section: create `components/sections/<Name>/`, add its id to the `SectionId` type and the array in `config/sections.ts`, then register it in `components/sections/index.ts`.
- Rebrand: `styles/tokens.css` and `app/fonts.ts`.
- **Tones:** card color combos are named `forest`, `lime`, `sand`, `ink` and `cream`, defined in `tokens.css` as `.tone-*` classes that set the `--tone-*` variables. Services and projects cycle through the tones automatically, or an item can pin one with `tone: 'ink'`.

## Key features and how they work

- **Scroll reveal.** An inline script in `layout.tsx` sets `html[data-js]` before first paint. `[data-reveal]` elements are hidden only when that flag is present, so the page still works without JS. `<Reveal>` sets `data-visible` from `useInView`.
- **Experience timeline.** The rail fills, the dot pops, and the year counts up. The current role (`end: null`, first item) gets a lime dot, a pulsing ring and a lime chip. Company logos are used when `logo` is set, otherwise the initials.
- **Work carousel.** A full-bleed scroller aligned to the container edge, with arrow buttons on desktop and swipe on mobile. Card phone image: `project.cover ?? project.screens[0]`, falling back to the app icon as a splash, then to a striped placeholder.
- **Project page.** A full-screen sheet that slides up over the site (`ProjectPage/ProjectOverlay.tsx`). It is rendered in a portal, locks body scroll, closes on Escape, ✕ or a backdrop click, and updates `document.title`. Blocks render **only when their data exists**: hero (pill, name, summary, role/timeline/client, store badges, two phones), results band, story (problem/approach/outcome), screens gallery, features + "Built with" tags + quote, and next project. The hero title font scales to fit its longest word (container query `cqi` plus the `--longest-word` variable) so names never break mid-word.
- **Project URLs.** The open project lives in the URL, `/work/<slug>`.
  - Opening uses `history.pushState`, switching uses `replaceState`, and closing uses `history.back()` if the project was opened in-page, or `pushState('/')` if it was a direct link.
  - Next.js syncs `usePathname` with native history, so **each project is its own page view in Vercel Analytics**.
  - The rendered page doesn't remount, and scroll position is kept.
- **Store badges.** `StoreBadge` detects `apps.apple.com` and `play.google.com` URLs. `note` overrides the small caption (used for "FindEat Business on the").
- **Analytics.** Page views only. Button clicks are NOT tracked: Vercel custom events (`track()`) are visible only on the Pro plan, and the owner is on Hobby. The owner was told; adding click tracking would need Pro, or another tool such as Umami or PostHog.
- **SEO.** Per-project metadata and canonical links, `sitemap.xml`, and `robots: noindex,nofollow` whenever `VERCEL_ENV !== 'production'`.

## Content data model (`src/content/projects.ts`)

Only `slug` and `name` are required. The optional fields are:
- `logo`, `cover`, `screens[]`
- `year`, `platforms` (default "iOS + Android")
- `tagline`, `tags[]`, `features[]`, `results[]` (`{value,label}`), `quote` (`{text,by}`)
- `links[]` (`{href, note?, label?}`)
- `tone`
- `caseStudy{summary, role, timeline, client, problem, approach, outcome}`

Current projects, in order, with their sources:

| Slug | Name | Source | Notes |
|---|---|---|---|
| `solvgo` | SolvGo | Freelance, field service app | `cover` is `home.webp` (map/visits); screens: welcome, home, timesheets, quote-saved |
| `findeat` | FindEat | Client 9530-0869 Quebec Inc | Two apps, consumer and Business, with 4 store links; screens: my-qr, splash, get-started, favorites |
| `amar-hanoutek` | 3amar 7anoutek | Freelance, Arabic-first e-commerce | `cover` is `splash.webp`; screens: home, product-details, cart, splash |
| `pharma-express` | Pharma Express | Part-time | `platforms: 'Android · iOS in review'`; only a Play Store link; screens: nearby-pharmacies, pharmacy-route, splash, login |

**Experience:**
- SlickPay (2026–now, current role)
- CAMIO LLC (2024–2026)
- DelivriLi (2023–2024, part-time)

Descriptions and stacks come from the CV. Logos are in `public/images/logos/`.

**About:**
- Photo: `public/images/about/imad-speaking.webp`, from a talk at Université Yahia Fares Médéa.
- Based in: "Algeria". The owner asked to remove the city; keep it as just "Algeria".
- Languages: Arabic, English, French.
- Works with: remote teams, open to relocation.

**Site config** (`config/site.ts`):

| Field | Value |
|---|---|
| email | imadedinchikh@gmail.com |
| url | https://imadchikh.com |
| bookingUrl | https://calendly.com/imadedinchikh/let-s-talk-30-min |
| CV | `public/cv/Imad-Eddine-Chikh-CV.pdf` |
| GitHub | `imad-chikh` |
| LinkedIn | `/in/imad-eddine-chikh-133795218/` |
| Upwork | `~01fc1692cd7e81e4d1` |

The CV PDF (2 pages) is the source of truth for the bio, experience and project facts. It contains the owner's phone number; the owner knows the repo is public.

## Asset conventions

- **Screenshots** come from the owner as 786×1704 iPhone mockups with **transparent rounded corners**. Process each one by compositing onto `#14201a` (ink, matching the phone frame) and saving as `.webp` at quality ~88. Store them in `public/images/projects/<slug>/<descriptive-name>.webp`.
- **Screen order matters.** `screens[0]` and `screens[1]` fill the project-page hero phones, and `screens[0]` is the card image unless `cover` is set. Put the most telling screens first.
- **App icons** are square, in `public/images/projects/<slug>.png`.
  - Trim excess whitespace.
  - The FindEat icon is the round cutlery emblem cropped from the orange logo. `findeat-wordmark.png` is saved but unused.
- **Company logos** in `public/images/logos/` were trimmed to a square and are shown with `object-fit: cover`.

## Gotchas (learned the hard way)

1. **Define `@keyframes` inside the CSS module that uses them.** CSS Modules renames `animation: name` inside modules, so global keyframes never match and the animation silently doesn't run. This froze the marquee, the pulse dot and the timeline ring until it was fixed.
2. **Next's image optimizer caches by URL.** If you replace or rename a file under an existing path, delete `.next/cache/images` and `.next/dev/cache/images`, or the old image keeps showing.
3. `PhoneMock` is absolutely positioned by default. Galleries override it with `position: relative`.
4. `<button>` cards contain only `<span>`s; block elements inside a button are invalid HTML.
5. **Next 16:** route `params` is a Promise, so `await params`.
6. **Browser pane quirks during verification.** Screenshots in mobile emulation after scripted scrolls can come back blank or stale, and fades are often caught mid-animation. Verify with DOM checks (`currentSrc`, computed styles, measurements) or headless Chrome. Headless Chrome won't go narrower than about 500px, so use the pane's mobile preset for 375px.

## Git and deploy workflow

- **Branches:** `main` is production (imadchikh.com). **`dev`** is the testing branch; Vercel builds it as a Preview deployment.
- **Intended flow:** work on `dev`, check on the dev domain, then merge `dev` into `main` to go live.
- **Planned dev domain:** `dev.imadchikh.com` (still pending at the time of writing). The owner needs to:
  1. In Vercel → Settings → Domains, add `dev.imadchikh.com` and connect it to the Preview environment for branch `dev`.
  2. In Namecheap → Advanced DNS, add a CNAME with host `dev` and value `cname.vercel-dns.com`.

  After that, check that it resolves and serves `<meta name="robots" content="noindex, nofollow">`.
- `origin/vercel/install-vercel-speed-insights-h7vcle` is a redundant Vercel-bot branch; Speed Insights is already on `main`. It's safe to delete.
- Vercel redeploys automatically on push, in about 50 seconds. You can check the live site with `curl` after pushing.
- **Commit messages** end with the `Co-Authored-By` trailer for the Claude model you're running as (whatever your session's attribution instructions give).

## Working with the owner

- **Ask before committing or pushing.** The owner approves each push explicitly ("yes", "push"). Never push to `main` without that.
- **Never invent facts** (metrics, client names, quotes, years, problems). Use the CV and what the owner provides. Fields without data stay empty, and the UI hides empty blocks. Mark gaps with `// TODO` in content files.
- The owner writes short, informal messages, often with typos. Interpret the intent, and confirm when it is ambiguous.
- Verify visual changes in the browser (desktop 1280, tablet ~820, mobile 375) and run `npm run build` before proposing a push.

## Open items / ideas

- `dev.imadchikh.com` DNS and Vercel domain setup, which the owner does in their dashboards. Then verify it.
- `projects.ts` still has no `year`, `results`, `caseStudy.problem` or `quote` for any project. Ask the owner for them.
- Click tracking, only if the owner upgrades to Vercel Pro or picks another analytics tool.
- Optional: an exception so the marquee keeps moving when the visitor has "Reduce motion" on. Not requested yet; currently all motion stops under `prefers-reduced-motion`.

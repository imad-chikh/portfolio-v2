/** URL helpers for project pages (/work/<slug>). */
export const WORK_BASE = '/work';

export const projectPath = (slug: string) => `${WORK_BASE}/${slug}`;

/** Returns the project slug from a pathname like /work/solvgo, or null. */
export const projectSlugFromPath = (pathname: string | null) => {
  const match = pathname?.match(/^\/work\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
};

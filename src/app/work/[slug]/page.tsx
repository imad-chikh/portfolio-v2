import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HomePage } from '@/components/HomePage';
import { site } from '@/config/site';
import { projects } from '@/content/projects';
import { projectPath } from '@/lib/routes';

/**
 * /work/<slug> — the home page with that project's page open on top.
 * The Work section reads the slug from the URL, so opening, switching and
 * closing projects is just a URL change (and a page view in analytics).
 */
type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.name} — ${site.name}`;
  const description = project.caseStudy?.summary ?? project.tagline ?? site.seo.description;
  return {
    title,
    description,
    alternates: { canonical: projectPath(slug) },
    openGraph: { title, description, url: projectPath(slug), siteName: site.name, type: 'article' },
  };
}

export default async function ProjectRoute({ params }: Params) {
  const { slug } = await params;
  if (!projects.some((p) => p.slug === slug)) notFound();
  return <HomePage />;
}

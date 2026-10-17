import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudyPage } from '@/components/CaseStudy/CaseStudyPage';
import { site } from '@/config/site';
import { isProduction } from '@/config/env';
import { caseStudies } from '@/content/caseStudies';
import { caseStudyPath } from '@/lib/routes';

/** /case-study/<slug> — standalone engineering case studies (content in src/content/caseStudies.ts). */
type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  const title = `${cs.title} ${cs.titleAccent} — ${site.name}`;
  const description = cs.summary;
  return {
    title,
    description,
    alternates: { canonical: caseStudyPath(slug) },
    openGraph: { title, description, url: caseStudyPath(slug), siteName: site.name, type: 'article' },
    robots: isProduction ? undefined : { index: false, follow: false },
  };
}

export default async function CaseStudyRoute({ params }: Params) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();
  return <CaseStudyPage cs={cs} />;
}

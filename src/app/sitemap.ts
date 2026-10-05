import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { projects } from '@/content/projects';
import { projectPath } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((p) => ({ url: `${site.url}${projectPath(p.slug)}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ];
}

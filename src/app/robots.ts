import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { isProduction } from '@/config/env';

/** /robots.txt — open on production, closed on preview/dev deployments. */
export default function robots(): MetadataRoute.Robots {
  if (!isProduction) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

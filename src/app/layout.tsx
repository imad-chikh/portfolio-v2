import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { site } from '@/config/site';
import { fontVariables } from './fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#1d5c43',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        {/* Flags JS before first paint so scroll-reveal pre-states never flash or hide content without JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.setAttribute('data-js','')" }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

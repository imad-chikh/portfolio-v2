import { enabledSections } from '@/config/sections';
import { sectionComponents } from '@/components/sections';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

/** The one-page site. Rendered by both / and /work/[slug] (which opens a project on top). */
export function HomePage() {
  return (
    <>
      <Header />
      <main>
        {enabledSections.map(({ id }) => {
          const Section = sectionComponents[id];
          return <Section key={id} />;
        })}
      </main>
      <Footer />
    </>
  );
}

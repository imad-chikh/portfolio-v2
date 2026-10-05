import { enabledSections } from '@/config/sections';
import { sectionComponents } from '@/components/sections';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
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

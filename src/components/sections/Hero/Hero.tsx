import { site } from '@/config/site';
import { hero } from '@/content/hero';
import { Button, PulseDot, Reveal } from '@/components/ui';
import { cn } from '@/lib/cn';
import styles from './Hero.module.css';

export function Hero() {
  const { headline } = hero;
  return (
    <section id="top" className={styles.hero}>
      <div className={cn('container', styles.inner)}>
        {site.availability.enabled && (
          <Reveal className={styles.badge}>
            <PulseDot />
            <span className={styles.desktopOnly}>{site.availability.label}</span>
            <span className={styles.mobileOnly}>{site.availability.shortLabel}</span>
          </Reveal>
        )}

        <Reveal as="h1" className={styles.title}>
          {headline.before} <span className={styles.highlight}>{headline.highlight}</span> {headline.after}
        </Reveal>

        <Reveal className={styles.bottom}>
          <p className={styles.intro}>
            <span className={styles.desktopOnly}>{hero.intro}</span>
            <span className={styles.mobileOnly}>{hero.introShort}</span>
          </p>
          <div className={styles.actions}>
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} size="lg" variant="ghostLight" className={styles.secondary}>
              {hero.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

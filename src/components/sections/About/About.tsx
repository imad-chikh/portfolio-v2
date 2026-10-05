import { site } from '@/config/site';
import { about } from '@/content/about';
import { Button, Reveal, SectionTitle } from '@/components/ui';
import { cn } from '@/lib/cn';
import { PhotoFrame } from './PhotoFrame';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={cn('container', styles.section)}>
      <Reveal>
        <PhotoFrame src={about.photo} alt={about.photoAlt} sticker={about.sticker} />
      </Reveal>

      <Reveal className={styles.content}>
        <SectionTitle>{about.title}</SectionTitle>
        <p className={styles.lead}>{about.lead}</p>
        <p className={styles.body}>{about.body}</p>
        <dl className={styles.facts}>
          {about.facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <Button href={site.cvUrl} variant="outline" className={styles.cv} download>
          {about.cvLabel}
        </Button>
      </Reveal>
    </section>
  );
}

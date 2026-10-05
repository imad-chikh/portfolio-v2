import { services, servicesIntro, serviceTones } from '@/content/services';
import { Reveal, SectionTitle } from '@/components/ui';
import { pickTone } from '@/lib/tone';
import { cn } from '@/lib/cn';
import { ServiceCard } from './ServiceCard';
import styles from './Services.module.css';

export function Services() {
  return (
    <section id="services" className={cn('container', styles.section)}>
      <Reveal className={styles.head}>
        <SectionTitle>{servicesIntro.title}</SectionTitle>
        <p className={styles.lead}>{servicesIntro.lead}</p>
      </Reveal>
      <div className={styles.grid}>
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} tone={pickTone(serviceTones, i, service.tone)} />
        ))}
      </div>
    </section>
  );
}

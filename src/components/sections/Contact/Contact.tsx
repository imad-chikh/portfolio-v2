import { site } from '@/config/site';
import { contact } from '@/content/contact';
import { Reveal } from '@/components/ui';
import { cn } from '@/lib/cn';
import { ContactCard } from './ContactCard';
import { CopyEmailCard } from './CopyEmailCard';
import styles from './Contact.module.css';

export function Contact() {
  const { cards } = contact;
  return (
    <section id="contact" className={styles.section}>
      <div className={cn('container', styles.inner)}>
        <Reveal as="h2" className={styles.title}>
          {contact.title}
        </Reveal>

        <Reveal className={styles.body}>
          <div className={styles.cards}>
            <ContactCard
              href={`mailto:${site.email}`}
              tone="ink"
              eyebrow={cards.email.eyebrow}
              title={cards.email.title}
              subtitle={site.email}
              icon="↗"
            />
            <ContactCard
              href={site.bookingUrl}
              tone="forest"
              eyebrow={cards.call.eyebrow}
              title={cards.call.title}
              subtitle={cards.call.subtitle}
              icon="↗"
              external
            />
            <CopyEmailCard email={site.email} {...cards.copy} />
          </div>

          <div className={styles.socials}>
            <span className={styles.socialsLabel}>{contact.socialsLabel}</span>
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} className={styles.social} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

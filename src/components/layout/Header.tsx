'use client';

import { useEffect, useState } from 'react';
import { navItems } from '@/config/sections';
import { site } from '@/config/site';
import { Logo } from '@/components/ui';
import { cn } from '@/lib/cn';
import styles from './Header.module.css';

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={cn('container', styles.bar)}>
        <a href="#top" className={styles.brand} aria-label={`${site.name}, home`}>
          <Logo />
          <span className={styles.name}>{site.name}</span>
        </a>

        <nav className={styles.nav} aria-label="Main">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
          <a href={site.headerCta.href} className={styles.cta}>
            {site.headerCta.label}
          </a>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav id="mobile-menu" className={cn(styles.mobileMenu, open && styles.mobileMenuOpen)} aria-label="Mobile" hidden={!open}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={styles.mobileLink} onClick={close}>
            {item.label}
          </a>
        ))}
        <a href={site.headerCta.href} className={styles.mobileCta} onClick={close}>
          {site.headerCta.label}
        </a>
      </nav>
    </header>
  );
}

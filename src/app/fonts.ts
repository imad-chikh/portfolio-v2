import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from 'next/font/google';

/** Brand fonts. Swap families here; tokens.css consumes the CSS variables. */
export const displayFont = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const bodyFont = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-instrument',
  display: 'swap',
});

export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const fontVariables = [displayFont.variable, bodyFont.variable, monoFont.variable].join(' ');

import type { Tone } from './types';

/** className for a tone defined in tokens.css */
export const toneClass = (tone: Tone) => `tone-${tone}`;

/** Pick an explicit tone or cycle through a palette by index. */
export const pickTone = (palette: readonly Tone[], index: number, explicit?: Tone): Tone =>
  explicit ?? palette[index % palette.length];

export const pad2 = (n: number) => String(n).padStart(2, '0');

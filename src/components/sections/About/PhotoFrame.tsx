import Image from 'next/image';
import styles from './PhotoFrame.module.css';

interface PhotoFrameProps {
  src?: string;
  alt: string;
  sticker?: string;
}

/** Tilted, framed portrait with a sticker. Shows a placeholder until `src` is set. */
export function PhotoFrame({ src, alt, sticker }: PhotoFrameProps) {
  return (
    <div className={styles.frame}>
      <div className={styles.back} aria-hidden />
      <div className={styles.photo}>
        {src ? (
          <Image src={src} alt={alt} fill sizes="(max-width: 767px) 100vw, 480px" className={styles.img} />
        ) : (
          <span className={styles.placeholder}>Add your photo in src/content/about.ts</span>
        )}
      </div>
      {sticker && <span className={styles.sticker}>{sticker}</span>}
    </div>
  );
}

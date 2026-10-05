import { site } from '@/config/site';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className={styles.reply}>{site.replyTime}</span>
        </div>
      </div>
    </footer>
  );
}

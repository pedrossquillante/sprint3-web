import Link from 'next/link';
import styles from './PdfRodape.module.css';

export default function PdfRodape() {
  return (
    <footer className={styles.hotbardown}>
      <div className={styles.n3}>
        <span className={styles.f4}></span>
        <span className={styles.f5}></span>
        <Link href="/" className={styles.f6}></Link>
      </div>
    </footer>
  );
}
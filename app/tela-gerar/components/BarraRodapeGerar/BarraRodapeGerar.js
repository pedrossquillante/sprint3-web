import Link from 'next/link';
import styles from './BarraRodapeGerar.module.css';

export default function BarraRodapeGerar() {
  return (
    <footer className={styles.hotbardown}>
      <div className={styles.n1}>
        <span className={styles.btN1}></span>
        <span className={styles.btN2}></span>
        <Link href="/tela-pdf" className={styles.btN3}></Link>
        <Link href="/tela-galeria" className={styles.btN4}></Link>
      </div>

      <div className={styles.n2}>
        <span className={styles.btN5}></span>
        <span className={styles.btN6}></span>
        <Link href="/" className={styles.btN7}></Link>
      </div>
    </footer>
  );
}
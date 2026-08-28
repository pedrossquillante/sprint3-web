import Link from 'next/link';
import styles from './FotoExibida.module.css';

export default function FotoExibida() {
  return (
    <main>
      <div className={styles.tela}></div>
      <div className={styles.bttns}>
        <span className={styles.bttns1}></span>
        <span className={styles.bttns2}></span>
        <Link href="/tela-gerar" className={styles.bttns3}></Link>
      </div>
    </main>
  );
}
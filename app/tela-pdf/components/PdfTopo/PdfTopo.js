import Link from 'next/link';
import styles from './PdfTopo.module.css';

export default function PdfTopo() {
  return (
    <header className={styles.hotbarUP}>
      <div className={styles.b1}></div>

      <div className={styles.botoesPDF}>
        <p className={styles.texto}>PDF_Movimento_...</p>

        <Link href="/tela-gerar" className={styles.botaovoltar}></Link>
        <span className={styles.botaomsg}></span>
        <span className={styles.botaotrespontos}></span>
        <span className={styles.botaoprocurandodoc}></span>
        <span className={styles.horasebateria}></span>
      </div>
    </header>
  );
}
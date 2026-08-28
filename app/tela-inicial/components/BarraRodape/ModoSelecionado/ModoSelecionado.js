import styles from './ModoSelecionado.module.css';

export default function ModoSelecionado() {
  return (
    <div className={styles.n1}>
        <a className={styles.n}>Noite</a>
        <a className={styles.n}>Retrato</a>
        <a className={`${styles.n} ${styles.nblue}`}>Foto</a>
        <a className={styles.n}>Video</a>
        <a className={styles.n}>Microfilme</a>
    </div>
  );
}
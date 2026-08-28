import BarraRodapeGerar from './components/BarraRodapeGerar/BarraRodapeGerar';
import styles from './page.module.css';

export default function TelaGerar() {
  return (
    <div className={styles.containercelular}>
      <div className={styles.containertela}>
      <header className={styles.hotbarUP}></header>
      <div className={styles.tela}></div>
      <BarraRodapeGerar />
      </div>
    </div>
  );
}

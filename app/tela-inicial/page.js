import BarraTopo from './components/BarraTopo/BarraTopo';
import FotoExibida from './components/FotoExibida/FotoExibida';
import BarraRodape from './components/BarraRodape/BarraRodape';
import styles from './page.module.css';

export default function TelaInicial() {
  return (
    <div className={styles.containercelular}>
      <div className={styles.containertela}>
      <BarraTopo />
      <FotoExibida /> 
      <BarraRodape />
      </div>
    </div>
  );
}

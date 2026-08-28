import ModoSelecionado from './ModoSelecionado/ModoSelecionado';
import FaixaFuncoes from './FaixaFuncoes/FaixaFuncoes';
import styles from './BarraRodape.module.css';

export default function BarraRodape() {
  return (
    <footer className={styles.hotbardown}>
      <ModoSelecionado />
      <FaixaFuncoes />
    </footer>
  );
}
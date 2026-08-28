import Link from 'next/link';
import styles from './GaleriaTopo.module.css'

const NOME_PADRAO = 'Pasta_Movimento_...';

export default function GaleriaTopo({quantidadeImagens = '10 imagens'}) {
  const nomePasta = NOME_PADRAO;

  return (
    <header className={styles.hotbarUP}>
      <span className={styles.bateria}></span>
      <span className={styles.fotof1}></span>

      <p className={styles.pastamovimento}>
        {nomePasta}
      </p>

      <p className={styles.parimagens}>{quantidadeImagens}</p>

      <Link href="/tela-gerar" className={styles.voltar}></Link>

      <span className={styles.aleatorio1}></span>
      <span className={styles.aleatorio2}></span>
    </header>
  );
}
import styles from './PdfConteudo.module.css';

export default function PdfConteudo() {
return (
    <main>
      <div className={styles.tela}></div>
      <div className={styles.bttns}>
        <button
          type="button"
          className={styles.bttns3}
        ></button>
      </div>
    </main>
  );
}
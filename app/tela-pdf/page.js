import PdfTopo from './components/PdfTopo/PdfTopo';
import PdfConteudo from './components/PdfConteudo/PdfConteudo';
import PdfRodape from './components/PdfRodape/PdfRodape';
import styles from './page.module.css';

export default function TelaPdf() {
  return (
    <div className={styles.containercelular}>
      <div className={styles.containertela}>
        <PdfTopo />
        <PdfConteudo />
        <PdfRodape />
      </div>
    </div>
  );
}
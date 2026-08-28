import GaleriaHeader from './components/GaleriaTopo/GaleriaTopo';
import PassarSlide from './components/PassarSlide/PassarSlide';
import styles from './page.module.css';

export default function TelaGaleria() {
  return (
    <div className={styles.containercelular}>
        <div className={styles.containertela}>
            <GaleriaHeader/>
            <main className={styles.tela}>
                <PassarSlide />
            </main>
        </div>
    </div>
  );
}
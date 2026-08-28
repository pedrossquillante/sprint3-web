import styles from './FaixaFuncoes.module.css';

const linhaSuperior = ['f1', 'f2', 'f3'];
const linhaInferior = ['f4', 'f5', 'f6'];

export default function FaixaFuncoes() {
  return (
    <>
      <div className={styles.n2}>
        {linhaSuperior.map((id) => (
          <a key={id} className={styles[id]}></a>
        ))}
      </div>
      <div className={styles.n3}>
        {linhaInferior.map((id) => (
          <a key={id} className={styles[id]}></a>
        ))}
      </div>
    </>
  );
}
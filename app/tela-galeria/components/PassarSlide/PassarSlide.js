'use client';

import { useEffect, useRef } from 'react';
import styles from './PassarSlide.module.css';

const imagens = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'];
const INTERVALO_MS = 2000;

export default function PassarSlide() {
  const containerRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function proximo() {
      indexRef.current += 1;
      if (indexRef.current >= imagens.length) {
        indexRef.current = 0;
      }

      const primeiraImagem = container.children[0];
      const tam = primeiraImagem ? primeiraImagem.offsetWidth : 0;

      container.scrollTo({
        left: indexRef.current * tam,
        behavior: 'smooth',
      });
    }

    const slide = setInterval(proximo, INTERVALO_MS);

    function pausar() {
      clearInterval(slide);
    }

    container.addEventListener('mousedown', pausar);
    container.addEventListener('touchstart', pausar);

    return () => {
      clearInterval(slide);
      container.removeEventListener('mousedown', pausar);
      container.removeEventListener('touchstart', pausar);
    };
  }, []);

  return (
    <div className={styles.slideshowContainer} ref={containerRef}>
      {imagens.map((id) => (
        <span key={id} className={`${styles.f} ${styles[id]}`}></span>
      ))}
    </div>
  );
}
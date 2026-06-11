import { Download, FileText } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Resume.module.css';
 
export const Resume = () => {
  const { ref, isVisible } = useScrollReveal();
 
  return (
    <section id="resume" className={styles.section} ref={ref}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <header className={styles.header}>
          <h2 className={styles.title}>Resume</h2>
          <p className={styles.subtitle}>
            Download my CV in your preferred language.
          </p>
        </header>
 
        <div className={styles.grid}>
          <a
            href="/cv/Paula_Bottale_Resume_EN.pdf"
            download
            className={styles.card}
            aria-label="Download Resume in English"
          >
            <div className={styles.iconWrapper}>
              <FileText size={26} strokeWidth={1.75} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardLanguage}>English</span>
              <h3 className={styles.cardTitle}>Full Stack Developer Resume</h3>
              <p className={styles.cardDescription}>
                Complete profile · React, TypeScript, Node.js, AI integration
              </p>
            </div>
            <div className={styles.downloadIcon}>
              <Download size={20} strokeWidth={2} />
            </div>
          </a>
 
          <a
            href="/cv/Paula_Bottale_CV_ES.pdf"
            download
            className={styles.card}
            aria-label="Descargar CV en Español"
          >
            <div className={styles.iconWrapper}>
              <FileText size={26} strokeWidth={1.75} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardLanguage}>Español</span>
              <h3 className={styles.cardTitle}>CV Desarrolladora Full Stack</h3>
              <p className={styles.cardDescription}>
                Perfil completo · React, TypeScript, Node.js, integración con IA
              </p>
            </div>
            <div className={styles.downloadIcon}>
              <Download size={20} strokeWidth={2} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
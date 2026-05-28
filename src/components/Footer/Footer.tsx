import { personalInfo } from '../../data/personal';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p className={styles.builtWith}>Built with React, TypeScript & Vite</p>
      </div>
    </footer>
  );
};
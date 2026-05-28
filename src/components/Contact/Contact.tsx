import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socials } from '../../data/personal';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Contact.module.css';

export const Contact = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const githubLink = socials.find((s) => s.name === 'GitHub');
  const linkedinLink = socials.find((s) => s.name === 'LinkedIn');

  return (
    <section
      ref={ref}
      id="contact"
      className={`${styles.contact} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <span className={styles.label}>Contact</span>
        <h2 className={styles.heading}>Let's build something together.</h2>
        <p className={styles.subheading}>
          I'm currently available for freelance work and open to new opportunities.
          If you have a project in mind or just want to chat, drop me a line.
        </p>

        <a href={`mailto:${personalInfo.email}`} className={styles.emailButton}>
          <Mail size={20} />
          {personalInfo.email}
          <ArrowUpRight size={18} className={styles.arrow} />
        </a>

        <div className={styles.socialLinks}>
          {githubLink && (
            <a
              href={githubLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaGithub size={18} />
              GitHub
            </a>
          )}
          {linkedinLink && (
            <a
              href={linkedinLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

import { useState, useEffect } from 'react';
import { Mail, MapPin, ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socials } from '../../data/personal';
import styles from './Hero.module.css';

const ROLE_VARIANTS = [
  'Full Stack Developer',
  'AI-Assisted Developer',
  'API Builder',
  'LLM Integration Engineer',
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLE_VARIANTS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const githubLink = socials.find((s) => s.name === 'GitHub');
  const linkedinLink = socials.find((s) => s.name === 'LinkedIn');

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <span className={styles.badge}>
          <span className={styles.dot} />
          Available for freelance work
        </span>

        <h1 className={styles.heading}>Paula Bottale.</h1>

        <p className={styles.role}>
          <span key={roleIndex} className={styles.roleText}>
            {ROLE_VARIANTS[roleIndex]}
          </span>
        </p>

        <p className={styles.tagline}>{personalInfo.tagline}</p>

        <div className={styles.location}>
          <MapPin size={16} />
          <span>{personalInfo.location}</span>
        </div>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>
            View Projects
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Get in Touch
          </a>
        </div>

        <div className={styles.socialLinks}>
          {githubLink && (
            <a href={githubLink.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
          )}
          {linkedinLink && (
            <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          )}
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <a href="#about" className={styles.scrollIndicator} aria-label="Scroll down">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};
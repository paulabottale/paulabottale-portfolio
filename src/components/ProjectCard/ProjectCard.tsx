import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../../types';
import styles from './ProjectCard.module.css';
 
interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
  delay: number;
}
 
export const ProjectCard = ({ project, isVisible, delay }: ProjectCardProps) => {
  return (
    <article
      className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {project.featuredImage && (
        <div className={styles.imageWrapper}>
          <img
            src={project.featuredImage}
            alt={`${project.title} preview`}
            className={styles.image}
            loading="lazy"
          />
          <span className={`${styles.statusBadge} ${styles[`status-${project.status}`]}`}>
            {project.status === 'live' ? 'Live' : 'In development'}
          </span>
        </div>
      )}
 
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
 
        <ul className={styles.techList}>
          {project.tech.map((t) => (
            <li key={t} className={styles.techChip}>
              {t}
            </li>
          ))}
        </ul>
 
        <ul className={styles.highlights}>
          {project.highlights.map((highlight, index) => (
            <li key={index} className={styles.highlight}>
              {highlight}
            </li>
          ))}
        </ul>
 
        <div className={styles.actions}>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryLink}
          >
            <FaGithub size={16} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};
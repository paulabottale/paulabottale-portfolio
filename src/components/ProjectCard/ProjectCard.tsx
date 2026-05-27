import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

export const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  const isLive = project.status === 'live';

  return (
    <article
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{project.title}</h3>
        <span
          className={`${styles.status} ${isLive ? styles.live : styles.inDevelopment}`}
        >
          <span className={styles.statusDot} />
          {isLive ? 'Live' : 'In Development'}
        </span>
      </div>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.techList}>
        {project.tech.map((tech) => (
          <span key={tech} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaGithub size={16} />
          Code
        </a>
      </div>
    </article>
  );
};

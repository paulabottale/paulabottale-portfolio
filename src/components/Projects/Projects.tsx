import { projects } from '../../data/projects';
import { ProjectCard } from '../ProjectCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Projects.module.css';

export const Projects = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Projects</span>
          <h2 className={styles.heading}>Selected work</h2>
          <p className={styles.subheading}>
            A selection of projects I've built — from full-stack SaaS platforms to REST APIs.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

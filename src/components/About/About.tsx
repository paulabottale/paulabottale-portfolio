import { personalInfo, stack } from '../../data/personal';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

export const About = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className={`${styles.about} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>About</span>
          <h2 className={styles.heading}>About me</h2>
        </div>

        <p className={styles.bio}>{personalInfo.about}</p>

        <div className={styles.stackSection}>
          <h3 className={styles.subheading}>Tech Stack</h3>
          <div className={styles.stackGrid}>
            {stack.map((category) => (
              <div key={category.category} className={styles.stackCategory}>
                <h4 className={styles.categoryTitle}>{category.category}</h4>
                <div className={styles.tagList}>
                  {category.items.map((item) => (
                    <span key={item} className={styles.tag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
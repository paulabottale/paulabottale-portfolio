import { education } from '../../data/experience';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Education.module.css';

export const Education = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Education</span>
          <h2 className={styles.heading}>Where I learned</h2>
        </div>

        <div className={styles.timeline}>
          {education.map((item, index) => (
            <div
              key={item.institution}
              className={`${styles.item} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={styles.itemHeader}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <span className={styles.period}>{item.period}</span>
              </div>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

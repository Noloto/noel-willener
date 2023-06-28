import styles from './Portfolio.module.css';

import Image from 'next/image';
import Link from 'next/link';

type RequiredProps = {
  projects: Project[];
};

const Portfolio: React.FC<RequiredProps> = ({ projects }) => {
  return (
    <div className={styles.container} id="portfolio">
      <h2>Portfolio</h2>
      <div className={styles.projectsSection}>
        {projects.map((project, idx) => {
          return (
            <div key={idx} className={styles.projectContainer}>
              <div className={styles.imageContainer}>
                <div className={styles.image}>
                  <Image
                    src={project.image}
                    fill={true}
                    alt={project.name}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className={styles.projectDescirption}>
                <div className={styles.description}>
                  <h3 style={{ color: project.accentColor }}>{project.name}</h3>
                  <p>{project.description}</p>
                  <Link
                    href={project.href}
                    style={{ color: project.accentColor }}
                  >
                    {'->'} visit page
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;

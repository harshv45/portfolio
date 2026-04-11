import { PROJECTS } from "../../data/portfolioData";
import FadeIn from "../FadeIn/FadeIn";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader number="04" title="Projects" />

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.12}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>◈</div>
                  <span className={styles.cardPeriod}>{project.period}</span>
                </div>

                <h3 className={styles.cardName}>{project.name}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.cardFooter}>
                  <div className={styles.highlights}>
                    {project.highlights.map((h) => (
                      <span key={h} className={styles.highlight}>
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className={styles.stackRow}>
                    {project.stack.map((s, idx) => (
                      <span key={s}>
                        <span className={styles.stackItem}>{s}</span>
                        {idx < project.stack.length - 1 && (
                          <span className={styles.stackSep}>·</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.githubLink}
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

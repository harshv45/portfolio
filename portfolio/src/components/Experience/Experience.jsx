import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from "../../data/portfolioData";
import FadeIn from "../FadeIn/FadeIn";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader number="03" title="Experience" />

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />

          <div className={styles.timelineItems}>
            {EXPERIENCE.map((job, i) => (
              <FadeIn key={job.company} delay={i * 0.15}>
                <div className={styles.timelineItem}>
                  <div
                    className={`${styles.timelineDot} ${
                      job.current ? styles.timelineDotActive : ""
                    }`}
                  />

                  <div className={styles.jobHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <div className={styles.jobCompany}>{job.company}</div>
                      <div className={styles.jobLocation}>{job.location}</div>
                    </div>
                    <div className={styles.jobMeta}>
                      {job.current && (
                        <span className={styles.currentBadge}>CURRENT</span>
                      )}
                      <span className={styles.jobPeriod}>{job.period}</span>
                    </div>
                  </div>

                  <ul className={styles.bullets}>
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className={styles.bullet}>
                        <span className={styles.bulletArrow}>▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education */}
        <FadeIn delay={0.2}>
          <div className={styles.educationCard}>
            <div className={styles.eduLabel}>EDUCATION</div>
            <div className={styles.eduContent}>
              <div>
                <h3 className={styles.eduDegree}>{EDUCATION.degree}</h3>
                <div className={styles.eduInstitution}>{EDUCATION.institution}</div>
                <div className={styles.eduCoursework}>{EDUCATION.coursework}</div>
              </div>
              <div className={styles.eduPeriod}>{EDUCATION.period}</div>
            </div>
          </div>
        </FadeIn>

        {/* Certifications */}
        <FadeIn delay={0.3}>
          <div className={styles.certCard}>
            <div className={styles.eduLabel}>CERTIFICATIONS</div>
            <ul className={styles.certList}>
              {CERTIFICATIONS.map((cert, i) => (
                <li key={i} className={styles.certItem}>
                  <span className={styles.bulletArrow}>▸</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

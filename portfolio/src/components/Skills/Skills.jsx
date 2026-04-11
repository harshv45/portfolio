import { SKILLS, ACHIEVEMENTS } from "../../data/portfolioData";
import FadeIn from "../FadeIn/FadeIn";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          number="02"
          title="Skills"
          subtitle="Tools and technologies I work with to build robust, scalable systems."
        />

        {/* Skills grid */}
        <div className={styles.skillsGrid}>
          {SKILLS.map(({ category, items }, i) => (
            <FadeIn key={category} delay={i * 0.08}>
              <div className={styles.skillCard}>
                <div className={styles.skillCategory}>{category}</div>
                <div className={styles.skillTags}>
                  {items.map((item) => (
                    <span key={item} className={styles.skillTag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Achievement stats */}
        <div className={styles.achievementsGrid}>
          {ACHIEVEMENTS.map(({ stat, label }, i) => (
            <FadeIn key={stat} delay={i * 0.1}>
              <div className={styles.achievementCard}>
                <div className={styles.achievementStat}>{stat}</div>
                <div className={styles.achievementLabel}>{label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        
      </div>
    </section>
  );
}

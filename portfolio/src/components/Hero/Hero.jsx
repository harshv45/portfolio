import { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../../data/portfolioData";
import styles from "./Hero.module.css";

const SOCIAL_LINKS = [
  { label: "GitHub", url: PERSONAL_INFO.github, icon: "GH" },
  { label: "LinkedIn", url: PERSONAL_INFO.linkedin, icon: "in" },
  { label: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "@" },
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = PERSONAL_INFO.title;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, [fullText]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="about" className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} />
      {/* Glow orbs */}
      <div className={`${styles.orb} ${styles.orbRight}`} />
      <div className={`${styles.orb} ${styles.orbLeft}`} />

      <div className={styles.content}>
        <div className={styles.label}>&gt; HELLO, WORLD — I AM</div>

        <h1 className={styles.name}>
          {PERSONAL_INFO.name.split(" ")[0]}
          <br />
          <span className={styles.nameAccent}>
            {PERSONAL_INFO.name.split(" ")[1]}
          </span>
        </h1>

        <div className={styles.typewriter}>
          {typed}
          <span className={styles.cursor}>|</span>
        </div>

        <p className={styles.tagline}>
          {PERSONAL_INFO.tagline} Currently based in{" "}
          <span className={styles.accentText}>{PERSONAL_INFO.location}</span>.
        </p>

        <div className={styles.ctas}>
          <button
            className={styles.ctaPrimary}
            onClick={() => scrollTo("connect")}
          >
            GET IN TOUCH
          </button>
          <button
            className={styles.ctaSecondary}
            onClick={() => scrollTo("projects")}
          >
            VIEW WORK
          </button>
        </div>

        <div className={styles.socials}>
          {SOCIAL_LINKS.map(({ label, url, icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <span className={styles.socialIcon}>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

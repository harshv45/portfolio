import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/portfolioData";
import styles from "./Navbar.module.css";

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <span className={styles.logo}>
          HVS<span className={styles.logoDot}>.dev</span>
        </span>

        {/* Desktop links */}
        <div className={styles.desktopLinks}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`${styles.navLink} ${
                active === link.toLowerCase() ? styles.navLinkActive : ""
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={styles.mobileLink}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

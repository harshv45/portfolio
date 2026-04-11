import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/portfolioData";

/**
 * Tracks which section is currently in view and returns its id string.
 */
export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.toLowerCase());
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}

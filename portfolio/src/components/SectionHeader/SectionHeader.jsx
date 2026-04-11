import FadeIn from "../FadeIn/FadeIn";

/**
 * Consistent section header with numbered label, heading, and optional subtitle.
 */
export default function SectionHeader({ number, title, subtitle }) {
  return (
    <FadeIn>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--accent)",
          fontSize: "0.78rem",
          letterSpacing: "0.2em",
          marginBottom: "0.5rem",
        }}
      >
        {/* {number} / {title.toUpperCase()} */}
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "var(--text-primary)",
          margin: "0 0 0.5rem",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: "var(--text-muted)",
            marginBottom: "3rem",
            maxWidth: 500,
          }}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}

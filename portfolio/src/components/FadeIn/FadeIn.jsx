import useInView from "../../hooks/useInView";

/**
 * Wraps children in a fade-in-up animation triggered on scroll.
 * @param {React.ReactNode} children
 * @param {number} delay - seconds to delay the animation
 * @param {string} className - optional extra class
 */
export default function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

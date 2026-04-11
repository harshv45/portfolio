import { useEffect, useRef, useState } from "react";

/**
 * Returns a [ref, inView] tuple.
 * inView becomes true (and stays true) when the element enters the viewport.
 * @param {number} threshold - 0–1, how much of the element must be visible
 */
export default function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

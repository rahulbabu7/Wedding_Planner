import { useEffect, useState } from "react";

/**
 * Generic media query subscription. Prefer GSAP's own matchMedia() inside
 * animation setup code — this hook is for layout/UI decisions in React only.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches); // `query` may have changed since the initializer ran
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

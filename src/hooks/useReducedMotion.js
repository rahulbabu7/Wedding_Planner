import { useEffect, useState } from "react";
import { MEDIA_REDUCED_MOTION } from "../config/theme";

/**
 * Tracks the user's prefers-reduced-motion setting. Animation code should
 * branch on this rather than assume motion is always welcome.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MEDIA_REDUCED_MOTION).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(MEDIA_REDUCED_MOTION);
    const handler = (e) => setReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return reduced;
}

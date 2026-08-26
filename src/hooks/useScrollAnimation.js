import { useLayoutEffect } from "react";
import gsap from "gsap";

/**
 * Runs `setup(ctx)` inside a scoped gsap.context bound to `scopeRef`, and
 * reverts it on unmount / dependency change. Centralizes the
 * context-create → revert lifecycle so every section follows the same
 * cleanup discipline (no duplicate ScrollTriggers, no stale animations
 * across dev-mode remounts).
 */
export function useScrollAnimation(scopeRef, setup, deps = []) {
  useLayoutEffect(() => {
    if (!scopeRef.current) return undefined;

    const ctx = gsap.context(() => {
      setup();
    }, scopeRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

import { useMemo, useRef } from "react";
import FloatingLeaf from "./FloatingLeaf";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { generateLeafField, initLeafFlight } from "../../animations/coupleAnimations";
import { DESKTOP_LEAF_COUNT, MOBILE_LEAF_COUNT, MEDIA_DESKTOP } from "../../config/theme";
import "./LeafReveal.css";

/**
 * The flying-leaf reveal: a bounded flock of leaves (20-35 desktop,
 * 10-15 mobile per the brief) that fly across the couple section and
 * disperse to uncover the photograph underneath.
 */
function LeafReveal({ triggerRef }) {
  const containerRef = useRef(null);
  const leafRefs = useRef([]);
  const isDesktop = useMediaQuery(MEDIA_DESKTOP);
  const reducedMotion = useReducedMotion();
  const count = isDesktop ? DESKTOP_LEAF_COUNT : MOBILE_LEAF_COUNT;

  const fields = useMemo(() => generateLeafField(count), [count]);

  useScrollAnimation(
    containerRef,
    () => {
      if (!triggerRef.current || reducedMotion) return;
      initLeafFlight({ section: triggerRef.current, leaves: leafRefs.current, fields });
    },
    [fields, reducedMotion]
  );

  if (reducedMotion) return null;

  return (
    <div ref={containerRef} className="leaf-reveal" aria-hidden="true">
      {fields.map((field, i) => (
        <FloatingLeaf key={field.id} leaf={field} ref={(el) => (leafRefs.current[i] = el)} />
      ))}
    </div>
  );
}

export default LeafReveal;

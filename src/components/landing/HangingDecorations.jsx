import { useRef } from "react";
import Leaf from "../common/motifs/Leaf";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { initAmbientFoliage } from "../../animations/landingAnimations";
import "./HangingDecorations.css";

const STRINGS = [
  { left: "10%", length: 120, delay: 0 },
  { left: "28%", length: 80, delay: 0.3 },
  { left: "72%", length: 84, delay: 0.15 },
  { left: "90%", length: 118, delay: 0.4 },
];

/**
 * Hanging garlands at the top edge with extremely subtle, slow, continuous
 * movement — atmosphere first, animation second.
 */
function HangingDecorations() {
  const containerRef = useRef(null);
  const stringRefs = useRef([]);
  const reducedMotion = useReducedMotion();

  useScrollAnimation(
    containerRef,
    () => {
      if (reducedMotion) return;
      initAmbientFoliage(stringRefs.current);
    },
    [reducedMotion]
  );

  return (
    <div ref={containerRef} className="hanging-decorations" aria-hidden="true">
      {STRINGS.map((s, i) => (
        <div
          key={i}
          ref={(el) => (stringRefs.current[i] = el)}
          className="hanging-decorations__string"
          style={{ left: s.left, height: s.length, transformOrigin: "top center" }}
        >
          <span className="hanging-decorations__cord" />
          <Leaf variant="petal" size={26} className="hanging-decorations__flower" />
        </div>
      ))}
    </div>
  );
}

export default HangingDecorations;

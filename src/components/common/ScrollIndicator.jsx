import { forwardRef } from "react";
import "./ScrollIndicator.css";

/**
 * Minimal "scroll to explore" affordance for the landing section. Pure CSS
 * animation (not GSAP) since it is decorative and always-on, independent of
 * scroll position. Forwards its ref so entrance timelines can fade it in.
 */
const ScrollIndicator = forwardRef(function ScrollIndicator(
  { label = "Scroll to explore", className = "" },
  ref
) {
  return (
    <div ref={ref} className={`scroll-indicator ${className}`} aria-hidden="true">
      <span className="scroll-indicator__label">{label}</span>
      <svg
        className="scroll-indicator__glyph"
        width="18"
        height="28"
        viewBox="0 0 18 28"
        focusable="false"
      >
        <rect x="1" y="1" width="16" height="26" rx="8" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle className="scroll-indicator__dot" cx="9" cy="8" r="2.2" fill="currentColor" />
      </svg>
    </div>
  );
});

export default ScrollIndicator;

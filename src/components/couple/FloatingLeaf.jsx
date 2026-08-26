import { forwardRef } from "react";
import Leaf from "../common/motifs/Leaf";

/**
 * One leaf in the flying-leaf reveal. Purely presentational — initial
 * placement and all motion are driven by GSAP in coupleAnimations.js so this
 * stays a cheap, stateless render target.
 */
const FloatingLeaf = forwardRef(function FloatingLeaf({ leaf }, ref) {
  return (
    <div
      ref={ref}
      className="floating-leaf"
      style={{
        left: `${leaf.left}%`,
        top: `${leaf.top}%`,
        transform: `rotate(${leaf.rotation}deg) scale(${leaf.scale})`,
      }}
    >
      <Leaf variant={leaf.variant} size={leaf.size} />
    </div>
  );
});

export default FloatingLeaf;

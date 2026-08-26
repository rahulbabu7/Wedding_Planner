import { useRef } from "react";
import Leaf from "../common/motifs/Leaf";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { initForegroundSway } from "../../animations/landingAnimations";
import "./ForegroundTrees.css";

const LEFT_CLUSTER = [
  { variant: "banana", size: 130, top: "58%", left: "-6%", rotate: -8 },
  { variant: "green", size: 70, top: "70%", left: "6%", rotate: 6 },
  { variant: "green", size: 50, top: "50%", left: "2%", rotate: -18 },
];

const RIGHT_CLUSTER = [
  { variant: "banana", size: 130, top: "60%", right: "-6%", rotate: 10 },
  { variant: "green", size: 66, top: "72%", right: "5%", rotate: -8 },
  { variant: "green", size: 46, top: "48%", right: "1%", rotate: 20 },
];

/**
 * Foreground foliage: two corner clusters that sway with scroll (rotation +
 * x/y + slight scale) to read as wind moving through leaves, not a simple
 * vertical drift.
 */
function ForegroundTrees({ triggerRef }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useScrollAnimation(leftRef, () => {
    if (!triggerRef.current) return;
    initForegroundSway({ section: triggerRef.current, trees: [leftRef.current, rightRef.current] });
  });

  return (
    <div className="foreground-trees" aria-hidden="true">
      <div ref={leftRef} className="foreground-trees__cluster foreground-trees__cluster--left">
        {LEFT_CLUSTER.map((leaf, i) => (
          <Leaf
            key={i}
            variant={leaf.variant}
            size={leaf.size}
            className="foreground-trees__leaf"
            style={{ top: leaf.top, left: leaf.left, transform: `rotate(${leaf.rotate}deg)` }}
          />
        ))}
      </div>
      <div ref={rightRef} className="foreground-trees__cluster foreground-trees__cluster--right">
        {RIGHT_CLUSTER.map((leaf, i) => (
          <Leaf
            key={i}
            variant={leaf.variant}
            size={leaf.size}
            className="foreground-trees__leaf"
            style={{ top: leaf.top, right: leaf.right, transform: `rotate(${leaf.rotate}deg)` }}
          />
        ))}
      </div>
    </div>
  );
}

export default ForegroundTrees;

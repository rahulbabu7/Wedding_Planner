import { useRef } from "react";
import Pillar from "../common/motifs/Pillar";
import Lotus from "../common/motifs/Lotus";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { initTemplateParallax } from "../../animations/landingAnimations";
import "./TempleForeground.css";

/**
 * Midground layer: flanking temple pillars and corner lotus finials that
 * frame the hero text. Moves a little more than the sky (3–7%).
 */
function TempleForeground({ triggerRef }) {
  const midRef = useRef(null);

  useScrollAnimation(midRef, () => {
    if (!triggerRef.current) return;
    initTemplateParallax({ section: triggerRef.current, midground: midRef.current });
  });

  return (
    <div ref={midRef} className="temple-foreground" aria-hidden="true">
      <Pillar tone="var(--gold-dim)" className="temple-foreground__pillar temple-foreground__pillar--left" />
      <Pillar tone="var(--gold-dim)" flip className="temple-foreground__pillar temple-foreground__pillar--right" />
      <Lotus size={56} tone="var(--gold-foil)" center="var(--magenta-silk)" className="temple-foreground__lotus temple-foreground__lotus--left" />
      <Lotus size={56} tone="var(--gold-foil)" center="var(--magenta-silk)" className="temple-foreground__lotus temple-foreground__lotus--right" />
    </div>
  );
}

export default TempleForeground;

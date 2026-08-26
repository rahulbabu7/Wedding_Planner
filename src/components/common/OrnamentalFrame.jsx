import { forwardRef } from "react";
import TempleArch from "./motifs/TempleArch";
import Pillar from "./motifs/Pillar";
import "./OrnamentalFrame.css";

/**
 * Frames printed-invitation-style content with a stone arch header and a
 * pair of pillars — the recurring "threshold" composition used wherever a
 * cream card of content needs to feel carved rather than boxed.
 */
const OrnamentalFrame = forwardRef(function OrnamentalFrame(
  { tone = "var(--gold-foil)", children, className = "" },
  ref
) {
  return (
    <div ref={ref} className={`ornamental-frame ${className}`}>
      <Pillar tone={tone} className="ornamental-frame__pillar ornamental-frame__pillar--left" />
      <Pillar tone={tone} flip className="ornamental-frame__pillar ornamental-frame__pillar--right" />
      <TempleArch tone={tone} className="ornamental-frame__arch" />
      <div className="ornamental-frame__content">{children}</div>
      <TempleArch tone={tone} inverted className="ornamental-frame__arch ornamental-frame__arch--bottom" />
    </div>
  );
});

export default OrnamentalFrame;

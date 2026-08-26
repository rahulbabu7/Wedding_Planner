import { useRef } from "react";
import SectionWrapper from "../common/SectionWrapper";
import GopuramSilhouette from "../common/motifs/GopuramSilhouette";
import LeafReveal from "./LeafReveal";
import CouplePhoto from "./CouplePhoto";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { revealCouplePhoto, revealCoupleNames } from "../../animations/coupleAnimations";
import { wedding } from "../../config/wedding";
import "./CoupleSection.css";

function CoupleSection() {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const namesRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useScrollAnimation(
    sectionRef,
    () => {
      if (reducedMotion) return;
      revealCouplePhoto(photoRef.current, sectionRef.current);
      revealCoupleNames(namesRef.current, sectionRef.current);
    },
    [reducedMotion]
  );

  return (
    <SectionWrapper
      id="couple"
      ref={sectionRef}
      className="couple-section"
      innerClassName="couple-section__inner"
      background={
        <>
          <div className="couple-section__backdrop" />
          <GopuramSilhouette tone="var(--teal-deep)" className="couple-section__gopuram" />
          <LeafReveal triggerRef={sectionRef} />
        </>
      }
    >
      <p className="eyebrow couple-section__eyebrow">The Bride &amp; Groom</p>

      <CouplePhoto ref={photoRef} />

      <h2 ref={namesRef} className="couple-section__names font-display">
        {wedding.groom.name}
        <span className="couple-section__amp">&amp;</span>
        {wedding.bride.name}
      </h2>
    </SectionWrapper>
  );
}

export default CoupleSection;

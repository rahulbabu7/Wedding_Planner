import { useRef } from "react";
import SectionWrapper from "../common/SectionWrapper";
import AuspiciousMark from "../common/motifs/AuspiciousMark";
import ScrollIndicator from "../common/ScrollIndicator";
import TempleBackground from "./TempleBackground";
import TempleForeground from "./TempleForeground";
import ForegroundTrees from "./ForegroundTrees";
import HangingDecorations from "./HangingDecorations";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { playLandingEntrance } from "../../animations/landingAnimations";
import { wedding } from "../../config/wedding";
import "./LandingSection.css";

function LandingSection() {
  const sectionRef = useRef(null);
  const symbolRef = useRef(null);
  const namesRef = useRef(null);
  const subtitleRef = useRef(null);
  const dateRef = useRef(null);
  const indicatorRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useScrollAnimation(
    sectionRef,
    () => {
      if (reducedMotion) return;
      playLandingEntrance({
        symbol: symbolRef.current,
        names: namesRef.current,
        subtitle: subtitleRef.current,
        date: dateRef.current,
        indicator: indicatorRef.current,
      });
    },
    [reducedMotion]
  );

  return (
    <SectionWrapper
      id="landing"
      ref={sectionRef}
      className="landing-section"
      innerClassName="landing-section__inner"
      background={
        <>
          <TempleBackground triggerRef={sectionRef} />
          <TempleForeground triggerRef={sectionRef} />
          <HangingDecorations />
          <ForegroundTrees triggerRef={sectionRef} />
        </>
      }
    >
      <div ref={symbolRef}>
        <AuspiciousMark symbol={wedding.invitation.auspiciousSymbol} />
      </div>

      <h1 ref={namesRef} className="landing-section__names">
        <span>{wedding.groom.name}</span>
        <span className="landing-section__amp" aria-hidden="true">
          &amp;
        </span>
        <span>{wedding.bride.name}</span>
      </h1>

      <p ref={subtitleRef} className="landing-section__tagline">
        {wedding.tagline}
      </p>

      <p ref={dateRef} className="landing-section__date font-display">
        {wedding.displayDate}
      </p>

      <ScrollIndicator ref={indicatorRef} className="landing-section__indicator" />
    </SectionWrapper>
  );
}

export default LandingSection;

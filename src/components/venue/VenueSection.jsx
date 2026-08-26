import { useRef } from "react";
import SectionWrapper from "../common/SectionWrapper";
import OrnamentalFrame from "../common/OrnamentalFrame";
import DecorativeDivider from "../common/DecorativeDivider";
import VenueDetails from "./VenueDetails";
import VenueQR from "./VenueQR";
import MapButton from "./MapButton";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { playVenueEntrance } from "../../animations/venueAnimations";
import "./VenueSection.css";

function VenueSection() {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const detailsRef = useRef(null);
  const qrRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useScrollAnimation(
    sectionRef,
    () => {
      if (reducedMotion) return;
      playVenueEntrance({
        section: sectionRef.current,
        frame: frameRef.current,
        details: detailsRef.current,
        qr: qrRef.current,
      });
    },
    [reducedMotion]
  );

  return (
    <SectionWrapper id="venue" ref={sectionRef} className="venue-section" innerClassName="venue-section__inner">
      <OrnamentalFrame tone="var(--teal-deep)" ref={frameRef} className="venue-section__frame">
        <div ref={detailsRef}>
          <VenueDetails />
        </div>

        <DecorativeDivider />

        <div ref={qrRef} className="venue-section__qr-block">
          <VenueQR />
          <MapButton />
        </div>
      </OrnamentalFrame>
    </SectionWrapper>
  );
}

export default VenueSection;

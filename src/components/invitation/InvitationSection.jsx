import { useRef } from "react";
import gsap from "gsap";
import SectionWrapper from "../common/SectionWrapper";
import OrnamentalFrame from "../common/OrnamentalFrame";
import DecorativeDivider from "../common/DecorativeDivider";
import AuspiciousMark from "../common/motifs/AuspiciousMark";
import InvitationText from "./InvitationText";
import ParentDetails from "./ParentDetails";
import CoupleNames from "./CoupleNames";
import EventDetails from "./EventDetails";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { playInvitationSequence } from "../../animations/invitationAnimations";
import { events } from "../../config/events";
import "./InvitationSection.css";

function InvitationSection() {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const symbolRef = useRef(null);
  const introRef = useRef(null);
  const familyRef = useRef(null);
  const namesRef = useRef(null);
  const underlineRef = useRef(null);
  const eventsRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useScrollAnimation(
    sectionRef,
    () => {
      if (reducedMotion) return;
      playInvitationSequence({
        section: sectionRef.current,
        frame: frameRef.current,
        symbol: symbolRef.current,
        intro: introRef.current,
        family: familyRef.current,
        names: namesRef.current,
        nameUnderline: underlineRef.current,
        events: gsap.utils.toArray(eventsRef.current?.children ?? []),
      });
    },
    [reducedMotion]
  );

  return (
    <SectionWrapper id="invitation" ref={sectionRef} className="invitation-section" innerClassName="invitation-section__inner">
      <OrnamentalFrame tone="var(--gold-foil)" className="invitation-section__frame" ref={frameRef}>
        <div ref={symbolRef}>
          <AuspiciousMark symbol="ॐ" size={56} />
        </div>

        <div ref={introRef}>
          <InvitationText />
        </div>

        <DecorativeDivider />

        <div ref={familyRef}>
          <ParentDetails />
        </div>

        <p className="invitation-section__lead-in eyebrow">to grace the auspicious wedding of</p>

        <CoupleNames ref={namesRef} underlineRef={underlineRef} />

        <DecorativeDivider />

        <p className="invitation-section__events-heading section-title" style={{ fontSize: "var(--fs-lede)" }}>
          On the Following Events
        </p>

        <ul ref={eventsRef} className="invitation-section__events">
          {events.map((event) => (
            <EventDetails key={event.id} event={event} />
          ))}
        </ul>
      </OrnamentalFrame>
    </SectionWrapper>
  );
}

export default InvitationSection;

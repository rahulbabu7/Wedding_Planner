import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Six-phase invitation reveal: frame → symbol → intro text → family details
 * → couple names (emphasis) → events. Grouped as whole blocks per the
 * brief — never animating individual words.
 */
export function playInvitationSequence({ section, frame, symbol, intro, family, names, nameUnderline, events }) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    defaults: { ease: "power2.out" },
  });

  tl.from(frame, { opacity: 0, scale: 0.97, duration: 1 })
    .from(symbol, { opacity: 0, y: 16, duration: 0.7 }, "-=0.5")
    .from(intro, { opacity: 0, y: 24, duration: 0.9 }, "-=0.3")
    .from(family, { opacity: 0, y: 20, duration: 0.8 }, "-=0.4")
    .from(names, { opacity: 0, y: 18, scale: 0.94, duration: 0.9 }, "-=0.3")
    .fromTo(nameUnderline, { scaleX: 0 }, { scaleX: 1, duration: 0.7, transformOrigin: "left center" }, "-=0.4")
    .from(
      events,
      { opacity: 0, y: 22, duration: 0.7, stagger: 0.15 },
      "-=0.2"
    );

  return tl;
}

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Quiet entrance for the venue card: details settle in, then the QR block. */
export function playVenueEntrance({ section, frame, details, qr }) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
    defaults: { ease: "power2.out" },
  });

  tl.from(frame, { opacity: 0, scale: 0.97, duration: 1 })
    .from(details, { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
    .from(qr, { opacity: 0, y: 16, scale: 0.96, duration: 0.7 }, "-=0.3");

  return tl;
}

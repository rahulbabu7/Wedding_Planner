import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LEAF_MIN_DURATION, LEAF_MAX_DURATION } from "../config/theme";

gsap.registerPlugin(ScrollTrigger);

const REVEAL_START = "top 60%";

/**
 * Generates randomized leaf definitions: position, scale, rotation, variant,
 * speed and drift all vary per leaf so no two follow the same path.
 */
export function generateLeafField(count) {
  const variants = ["green", "dry", "petal", "banana"];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: gsap.utils.random(4, 92),
    top: gsap.utils.random(6, 88),
    size: gsap.utils.random(22, 46),
    scale: gsap.utils.random(0.7, 1.15),
    rotation: gsap.utils.random(-25, 25),
    variant: variants[i % variants.length],
    driftX: gsap.utils.random(-140, 140),
    driftY: gsap.utils.random(-90, 90),
    duration: gsap.utils.random(LEAF_MIN_DURATION, LEAF_MAX_DURATION),
    delay: gsap.utils.random(0, 0.9),
  }));
}

/**
 * Stages 1-2-3-5-6: leaves enter, fly across with organic drift, hold near
 * peak coverage, then disperse off-screen. Each leaf runs its own
 * randomized timeline so the flock never reads as a single repeated loop.
 */
export function initLeafFlight({ section, leaves, fields }) {
  leaves.forEach((leafEl, i) => {
    if (!leafEl) return;
    const field = fields[i];
    const direction = i % 2 === 0 ? 1 : -1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: REVEAL_START,
        toggleActions: "play none none reverse",
      },
      delay: field.delay,
    });

    tl.fromTo(
      leafEl,
      { opacity: 0, scale: field.scale * 0.5, x: field.driftX * -0.4 * direction, y: field.driftY * -0.4 },
      { opacity: 1, scale: field.scale, x: 0, y: 0, duration: field.duration * 0.35, ease: "power1.out" }
    )
      .to(leafEl, {
        x: field.driftX * direction,
        y: field.driftY,
        rotation: `+=${direction * gsap.utils.random(20, 55)}`,
        duration: field.duration * 0.4,
        ease: "sine.inOut",
      })
      .to(leafEl, {
        opacity: 0,
        x: field.driftX * direction * 1.8,
        y: field.driftY * 1.6,
        scale: field.scale * 0.6,
        duration: field.duration * 0.35,
        ease: "power1.in",
      });
  });
}

/** Stage 4/7: the couple photograph reveals beneath the dispersing leaves. */
export function revealCouplePhoto(photoEl, section) {
  if (!photoEl) return;

  gsap.fromTo(
    photoEl,
    { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, scale: 0.96 },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      scale: 1,
      duration: 1.6,
      delay: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: REVEAL_START,
        toggleActions: "play none none reverse",
      },
    }
  );
}

/** Stage 8: names settle in once the photograph is fully revealed. */
export function revealCoupleNames(namesEl, section) {
  if (!namesEl) return;

  gsap.fromTo(
    namesEl,
    { opacity: 0, y: 22 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay: 2.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: REVEAL_START,
        toggleActions: "play none none reverse",
      },
    }
  );
}

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  PARALLAX_BACKGROUND,
  PARALLAX_MIDGROUND,
  PARALLAX_FOREGROUND,
  TREE_ROTATION_RANGE,
  TREE_X_RANGE,
  TREE_Y_RANGE,
  AMBIENT_SWAY_MIN_DURATION,
  AMBIENT_SWAY_MAX_DURATION,
  MEDIA_DESKTOP,
  MEDIA_MOBILE,
} from "../config/theme";

gsap.registerPlugin(ScrollTrigger);

/**
 * Entrance sequence for the hero text stack: symbol → names → subtitle →
 * date → scroll indicator. One shared timeline keeps the pacing coherent
 * instead of each element animating independently.
 */
export function playLandingEntrance({ symbol, names, subtitle, date, indicator }) {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.from(symbol, { opacity: 0, y: 18, duration: 0.9, delay: 0.2 })
    .from(names, { opacity: 0, y: 26, duration: 1.1 }, "-=0.5")
    .from(subtitle, { opacity: 0, y: 18, duration: 0.9 }, "-=0.6")
    .from(date, { opacity: 0, y: 14, duration: 0.8 }, "-=0.5")
    .from(indicator, { opacity: 0, duration: 1 }, "-=0.3");

  return tl;
}

/**
 * Multi-layer scroll parallax across the temple composition. Intensities
 * are deliberately small — the temple should feel alive, not like it is
 * floating apart from itself.
 */
export function initTemplateParallax({ section, background, midground, foreground }) {
  const mm = gsap.matchMedia();

  mm.add({ desktop: MEDIA_DESKTOP, mobile: MEDIA_MOBILE }, (context) => {
    const { desktop } = context.conditions;
    const scale = desktop ? 1 : 0.55;

    const layers = [
      { el: background, intensity: PARALLAX_BACKGROUND },
      { el: midground, intensity: PARALLAX_MIDGROUND },
      { el: foreground, intensity: PARALLAX_FOREGROUND },
    ];

    layers.forEach(({ el, intensity }) => {
      if (!el) return;
      gsap.to(el, {
        yPercent: intensity * 100 * scale,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  });
}

/**
 * Organic wind sway for foreground foliage, linked to scroll position
 * rather than a fixed loop — rotation + x/y + slight scale, never purely
 * vertical translation.
 */
export function initForegroundSway({ section, trees }) {
  const mm = gsap.matchMedia();

  mm.add({ desktop: MEDIA_DESKTOP, mobile: MEDIA_MOBILE }, (context) => {
    const { desktop } = context.conditions;
    const scale = desktop ? 1 : 0.6;

    trees.forEach((tree, i) => {
      if (!tree) return;
      const direction = i % 2 === 0 ? 1 : -1;

      gsap.to(tree, {
        rotation: TREE_ROTATION_RANGE * direction * scale,
        x: TREE_X_RANGE * direction * scale,
        y: TREE_Y_RANGE * scale,
        scale: 1.015,
        ease: "none",
        transformOrigin: direction > 0 ? "bottom left" : "bottom right",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    });
  });
}

/**
 * Slow, continuous ambient movement for hanging garlands/flowers —
 * deliberately not scroll-linked so the atmosphere reads before the
 * animation does.
 */
export function initAmbientFoliage(elements) {
  elements.filter(Boolean).forEach((el, i) => {
    const duration = gsap.utils.random(AMBIENT_SWAY_MIN_DURATION, AMBIENT_SWAY_MAX_DURATION);
    gsap
      .timeline({ repeat: -1, yoyo: true, delay: i * 0.4 })
      .to(el, {
        rotation: gsap.utils.random(-3, 3),
        x: gsap.utils.random(-4, 4),
        duration,
        ease: "sine.inOut",
      });
  });
}

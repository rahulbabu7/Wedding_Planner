import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wires Lenis into GSAP's own ticker so there is exactly one driver of
 * scroll-linked animation: Lenis -> requestAnimationFrame (via gsap.ticker)
 * -> GSAP -> ScrollTrigger. Returns a teardown function.
 */
export function setupSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const syncLenis = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(syncLenis);
  gsap.ticker.lagSmoothing(0);

  // Belt-and-suspenders: keyboard scrolling, in-page anchor jumps, and
  // assistive-tech scrolling move the native scroll position without going
  // through Lenis's wheel/touch handlers. A plain scroll listener keeps
  // ScrollTrigger in sync no matter how the page was scrolled.
  const onNativeScroll = () => ScrollTrigger.update();
  window.addEventListener("scroll", onNativeScroll, { passive: true });

  return () => {
    gsap.ticker.remove(syncLenis);
    window.removeEventListener("scroll", onNativeScroll);
    lenis.destroy();
  };
}

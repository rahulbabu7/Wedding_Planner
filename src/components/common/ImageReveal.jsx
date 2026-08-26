import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useReducedMotion } from "../../hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Performant reveal for framed imagery: clip-path inset + opacity + scale,
 * all compositor-friendly properties. Triggered once when the element
 * enters the viewport rather than scrubbing, per the brief's instruction to
 * keep the reveal understated.
 */
function ImageReveal({ children, className = "", start = "top 75%" }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();

  useScrollAnimation(
    ref,
    () => {
      if (reducedMotion) return;

      gsap.fromTo(
        ref.current,
        { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, scale: 0.96 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          scale: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    },
    [reducedMotion]
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default ImageReveal;

import { useRef } from "react";
import GopuramSilhouette from "../common/motifs/GopuramSilhouette";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { initTemplateParallax } from "../../animations/landingAnimations";
import "./TempleBackground.css";

const STARS = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 60}%`,
  size: 1 + ((i * 7) % 3),
  delay: (i % 6) * 0.6,
}));

/**
 * Furthest layer: night-to-dusk sky gradient behind a distant gopuram
 * silhouette. Moves the least under parallax (0–3%).
 */
function TempleBackground({ triggerRef }) {
  const bgRef = useRef(null);

  useScrollAnimation(bgRef, () => {
    if (!triggerRef.current) return;
    initTemplateParallax({ section: triggerRef.current, background: bgRef.current });
  });

  return (
    <div ref={bgRef} className="temple-background" aria-hidden="true">
      <div className="temple-background__sky" />
      {STARS.map((star) => (
        <span
          key={star.id}
          className="temple-background__star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      <GopuramSilhouette className="temple-background__gopuram" />
    </div>
  );
}

export default TempleBackground;

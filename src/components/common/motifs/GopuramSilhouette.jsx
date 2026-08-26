/**
 * Distant multi-tier gopuram (temple gateway tower) silhouette. Used as the
 * background architectural layer on the landing and couple sections so both
 * moments read as the same temple, seen from different distances.
 */
function GopuramSilhouette({ tone = "var(--indigo-royal)", className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 420"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      focusable="false"
    >
      {/* tiers, widest at base */}
      {[
        { y: 260, w: 460, h: 60 },
        { y: 210, w: 380, h: 55 },
        { y: 160, w: 300, h: 55 },
        { y: 115, w: 230, h: 50 },
        { y: 75, w: 170, h: 45 },
        { y: 40, w: 120, h: 40 },
      ].map((tier, i) => (
        <path
          key={i}
          d={`M${300 - tier.w / 2} ${tier.y + tier.h}
              L${300 - tier.w / 2 + 14} ${tier.y}
              L${300 + tier.w / 2 - 14} ${tier.y}
              L${300 + tier.w / 2} ${tier.y + tier.h} Z`}
          fill={tone}
          opacity={0.14 + i * 0.03}
        />
      ))}
      <path d="M280 40 L300 6 L320 40 Z" fill={tone} opacity="0.4" />
      <rect x="60" y="300" width="480" height="120" fill={tone} opacity="0.16" />
      {/* base doorway */}
      <path
        d="M255 420 V360 Q255 335 300 335 Q345 335 345 360 V420"
        fill="var(--color-bg)"
      />
    </svg>
  );
}

export default GopuramSilhouette;

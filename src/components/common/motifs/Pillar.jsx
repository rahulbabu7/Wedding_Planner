/**
 * Ornamental temple pillar. Designed to stretch vertically
 * (preserveAspectRatio="none") so a single asset can frame content columns
 * of any height without distortion of the carved bands.
 */
function Pillar({ tone = "var(--gold-foil)", className = "", flip = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 400"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      style={{ transform: flip ? "scaleX(-1)" : "none" }}
    >
      <rect x="18" y="0" width="24" height="400" fill="none" stroke={tone} strokeWidth="2" opacity="0.7" />
      {[40, 120, 200, 280, 360].map((y) => (
        <g key={y}>
          <rect x="8" y={y} width="44" height="14" fill="none" stroke={tone} strokeWidth="2" opacity="0.8" />
          <circle cx="30" cy={y + 7} r="3.5" fill={tone} opacity="0.9" />
        </g>
      ))}
      <path d="M6 0 H54 L48 16 H12 Z" fill={tone} opacity="0.85" />
      <path d="M6 400 H54 L48 384 H12 Z" fill={tone} opacity="0.85" />
    </svg>
  );
}

export default Pillar;

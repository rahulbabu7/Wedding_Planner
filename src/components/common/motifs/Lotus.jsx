const OUTER_PETAL = "M0 0 C -16 -12 -18 -30 0 -44 C 18 -30 16 -12 0 0 Z";
const INNER_PETAL = "M0 0 C -10 -8 -11 -20 0 -30 C 11 -20 10 -8 0 0 Z";

/**
 * Layered lotus bloom: eight outer petals plus eight offset inner petals
 * around a common center, built from rounded teardrop paths rather than a
 * sharp asterisk so it reads as a flower at a glance.
 */
function Lotus({ size = 64, tone = "var(--magenta-silk)", center = "var(--gold-foil)", className = "" }) {
  const outer = Array.from({ length: 8 }, (_, i) => i * 45);
  const inner = Array.from({ length: 8 }, (_, i) => i * 45 + 22.5);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(50,56)">
        {outer.map((angle) => (
          <path key={`o${angle}`} d={OUTER_PETAL} fill={tone} opacity="0.85" transform={`rotate(${angle})`} />
        ))}
        {inner.map((angle) => (
          <path key={`i${angle}`} d={INNER_PETAL} fill={tone} opacity="0.55" transform={`rotate(${angle})`} />
        ))}
        <circle r="7" fill={center} />
      </g>
    </svg>
  );
}

export default Lotus;

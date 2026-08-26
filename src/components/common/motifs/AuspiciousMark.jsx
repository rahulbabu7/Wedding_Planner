/**
 * The recurring auspicious mark (default: Om) inside a thin double ring,
 * used once per section as an opening flourish — never repeated mid-content.
 */
function AuspiciousMark({ symbol = "ॐ", size = 72, className = "" }) {
  return (
    <div
      className={`auspicious-mark ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Auspicious symbol"
    >
      <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" focusable="false">
        <circle cx="50" cy="50" r="46" fill="none" stroke="var(--gold-foil)" strokeWidth="1.5" opacity="0.8" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--gold-foil)" strokeWidth="1" opacity="0.5" />
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fontSize="42"
          fill="var(--gold-foil)"
          fontFamily="var(--font-display)"
        >
          {symbol}
        </text>
      </svg>
    </div>
  );
}

export default AuspiciousMark;

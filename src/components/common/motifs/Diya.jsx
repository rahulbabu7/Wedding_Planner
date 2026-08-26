/**
 * Small oil-lamp motif used as a sparing accent near event details / venue.
 */
function Diya({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size * 0.9}
      viewBox="0 0 40 36"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 20 Q20 34 38 20 Q34 26 20 26 Q6 26 2 20Z"
        fill="var(--gold-foil)"
      />
      <path
        d="M18 16 C14 10 16 4 20 0 C24 4 26 10 22 16 C21 18 19 18 18 16Z"
        fill="var(--magenta-silk)"
      />
    </svg>
  );
}

export default Diya;

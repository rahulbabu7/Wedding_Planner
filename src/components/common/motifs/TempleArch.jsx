/**
 * Stepped gopuram-style arch — the recurring "doorway" motif that marks the
 * threshold into each section. Colors are set by the `tone` prop so the same
 * silhouette can shift from dusk-indigo (landing) to gold (invitation) to
 * teal (venue) without duplicating markup.
 */
function TempleArch({ tone = "var(--gold-foil)", className = "", inverted = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 160"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      style={{ transform: inverted ? "scaleY(-1)" : "none" }}
    >
      <path
        d="M0 160 V70 Q0 40 30 38 H60 Q60 20 90 18 H110 Q110 4 130 2
           H270 Q290 4 290 18 H310 Q340 20 340 38 H370 Q400 40 400 70 V160Z"
        fill="none"
        stroke={tone}
        strokeWidth="3"
        opacity="0.9"
      />
      <path
        d="M150 2 Q200 -14 250 2"
        fill="none"
        stroke={tone}
        strokeWidth="3"
        opacity="0.9"
      />
      <circle cx="200" cy="14" r="5" fill={tone} opacity="0.95" />
      <path d="M0 70 H400" stroke={tone} strokeWidth="1.5" opacity="0.45" />
      <path d="M30 38 H370" stroke={tone} strokeWidth="1.5" opacity="0.35" />
    </svg>
  );
}

export default TempleArch;

const VARIANT_PATHS = {
  green: "M20 2 C34 10 38 26 20 46 C2 26 6 10 20 2 Z",
  dry: "M20 4 C30 12 32 28 20 44 C8 28 10 12 20 4 Z",
  petal: "M20 6 C28 14 28 30 20 42 C12 30 12 14 20 6 Z",
  banana: "M2 20 C10 4 30 2 38 6 C30 14 12 18 2 20 Z",
};

const VARIANT_TONE = {
  green: "var(--leaf-deep)",
  dry: "var(--leaf-dry)",
  petal: "var(--magenta-soft)",
  banana: "var(--leaf-soft)",
};

/**
 * Single foliage unit reused across the foreground trees, the ambient
 * hanging decorations, and the flying-leaf reveal. Kept as one lightweight
 * component so all three moments read as the same material.
 */
function Leaf({ variant = "green", size = 40, tone, className = "", style }) {
  const path = VARIANT_PATHS[variant] ?? VARIANT_PATHS.green;
  const fill = tone ?? VARIANT_TONE[variant] ?? VARIANT_TONE.green;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 48"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} fill={fill} />
      <path
        d={variant === "banana" ? "M4 20 H36" : "M20 8 V40"}
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

export default Leaf;

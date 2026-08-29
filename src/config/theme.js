// Named animation & layout constants. Keep tuning values here rather than
// scattering magic numbers through animation code.

export const BREAKPOINTS = {
	mobile: 0,
	tablet: 768,
	desktop: 1280,
};

export const MEDIA_DESKTOP = "(min-width: 1024px)";
export const MEDIA_MOBILE = "(max-width: 1023px)";
export const MEDIA_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

// -- Parallax intensity (landing temple layers) ------------------------
export const PARALLAX_BACKGROUND = 0.03;
export const PARALLAX_MIDGROUND = 0.06;
export const PARALLAX_FOREGROUND = 0.1;

// -- Foreground tree sway -------------------------------------------------
export const TREE_ROTATION_RANGE = 2.5; // degrees
export const TREE_X_RANGE = 10; // px
export const TREE_Y_RANGE = 14; // px

// -- Flying leaf reveal (couple section) ---------------------------------
export const DESKTOP_LEAF_COUNT = 100;
export const MOBILE_LEAF_COUNT = 40;
export const LEAF_MIN_DURATION = 2.6;
export const LEAF_MAX_DURATION = 4.8;

// -- Ambient foliage (landing hanging decorations) -----------------------
export const AMBIENT_SWAY_MIN_DURATION = 5;
export const AMBIENT_SWAY_MAX_DURATION = 9;

export const theme = {
	colors: {
		ivory: "#f8efd9",
		teal: "#0b6e6e",
		indigo: "#133b77",
		magenta: "#b4297a",
		gold: "#ce9f3e",
		leaf: "#35603a",
	},
};

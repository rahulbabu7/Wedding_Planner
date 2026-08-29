// Edit this file to personalize the invitation. Nothing here touches
// animation or layout code — nothing else needs to change.

export const wedding = {
	groom: {
		name: "Rahul",
		fullName: "Rahul Krishna U",
		father: "Shri Unnikrishnan Nair",
		mother: "Smt. S Remadevi",
	},

	bride: {
		name: "Sreelekshmi",
		fullName: "Sreelekshmi Anil",
		father: "Shri Anilkumar A R",
		mother: "Smt. Praseetha S",
	},

	grandparents: {
		bride: "Grandchild of (Late) Shri Ramakrishnan Nair & Smt. Kalyanikuttiammma",
	},

	weddingDate: "2026-10-25",
	displayDate: "25th October 2026",

	invitation: {
		auspiciousSymbol: "ॐ", // ॐ
		blessing: "With the blessings of God and our beloved parents,",
		introduction:
			"we cordially invite you to grace the auspicious wedding ceremony of our beloved children with your presence and blessings.",
		closing:
			"Your presence is the greatest gift we could receive on this sacred occasion.",
	},

	// Shown on the landing hero
	tagline: "A Wedding Celebration",

	// Drop a photo into src/assets/couple/, import it in CouplePhoto.jsx, and
	// set the src prop there. Left null here so the placeholder frame renders
	// until a real photograph is supplied.
	couplePhotoSrc: null,
	couplePhotoAlt: "Rahul and Sreelekshmi",

	seo: {
		title: "Rahul & Sreelekshmi | Wedding Invitation",
		description: "A celebration of Rahul & Sreelekshmi's wedding.",
		themeColor: "#0b6e6e",
	},
};

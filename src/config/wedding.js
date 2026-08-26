// Edit this file to personalize the invitation. Nothing here touches
// animation or layout code — nothing else needs to change.

export const wedding = {
  groom: {
    name: "Rahul",
    fullName: "Rahul Sharma",
    father: "Shri Vijay Sharma",
    mother: "Smt. Anita Sharma",
  },

  bride: {
    name: "Kiran",
    fullName: "Kiran Reddy",
    father: "Shri Suresh Reddy",
    mother: "Smt. Lakshmi Reddy",
  },

  grandparents: {
    groom: "Grandchild of Late Shri Ram Sharma & Smt. Saraswati Sharma",
    bride: "Grandchild of Late Shri Krishna Reddy & Smt. Padma Reddy",
  },

  weddingDate: "2026-12-15",
  displayDate: "15th December 2026",

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
  couplePhotoAlt: "Rahul and Kiran",

  seo: {
    title: "Rahul & Kiran | Wedding Invitation",
    description: "A celebration of Rahul & Kiran's wedding.",
    themeColor: "#0b6e6e",
  },
};

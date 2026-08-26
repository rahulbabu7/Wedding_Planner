Build a Premium Interactive Indian Wedding Invitation Website
1. PROJECT OVERVIEW

Build a premium, highly polished, interactive Indian wedding invitation website using React.

The website should feel like a traditional Indian temple wedding invitation brought to life as a modern interactive web experience.

This is NOT intended to look like a generic modern wedding website.

The visual identity should be strongly inspired by the provided reference screenshots:

    Traditional Indian temple architecture
    Ornamental temple pillars
    Lotus flowers
    Hanging floral decorations
    Leaves and foliage
    Peacock/elephant/temple motifs where appropriate
    Rich turquoise
    Royal/deep blue
    Magenta/pink
    Gold
    Warm ivory/cream
    Natural greens
    Traditional Indian decorative artwork
    Elegant typography
    Premium invitation-card composition

The website should combine:

    Traditional Indian wedding aesthetics + layered artwork + cinematic scroll animation + modern responsive web development.

The result should feel like a large animated traditional wedding invitation card, not like four unrelated website sections.
2. VERY IMPORTANT TECHNICAL CONSTRAINTS

Use:

    React
    JavaScript
    Vite
    GSAP
    GSAP ScrollTrigger
    Optional Lenis
    Modern CSS

JavaScript only

DO NOT use TypeScript.

Use:

.js
.jsx
.css

Do NOT create:

.ts
.tsx
tsconfig.json

3. SINGLE-PAGE ARCHITECTURE

This must be a single continuous scrolling page.

There should be:

    NO React Router
    NO separate routes
    NO route-based navigation
    NO separate page URLs

Everything exists inside one page.

The experience should be:

SECTION 1
Temple Landing
       ↓
SECTION 2
Wedding Invitation
       ↓
SECTION 3
Bride & Groom Reveal
       ↓
SECTION 4
Venue + QR

The user simply scrolls from the top to the bottom.

The sections should visually transition into each other.

The website should feel like one continuous invitation.
4. PROJECT STRUCTURE

Use a clean, modular architecture.

Recommended structure:

wedding-invitation/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── temple/
│   │   ├── backgrounds/
│   │   ├── decorations/
│   │   ├── flowers/
│   │   ├── leaves/
│   │   ├── couple/
│   │   ├── venue/
│   │   ├── icons/
│   │   ├── textures/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── OrnamentalFrame.jsx
│   │   │   ├── DecorativeDivider.jsx
│   │   │   ├── ScrollIndicator.jsx
│   │   │   ├── SectionWrapper.jsx
│   │   │   └── ImageReveal.jsx
│   │   │
│   │   ├── landing/
│   │   │   ├── LandingSection.jsx
│   │   │   ├── TempleBackground.jsx
│   │   │   ├── TempleForeground.jsx
│   │   │   ├── ForegroundTrees.jsx
│   │   │   └── HangingDecorations.jsx
│   │   │
│   │   ├── invitation/
│   │   │   ├── InvitationSection.jsx
│   │   │   ├── InvitationText.jsx
│   │   │   ├── CoupleNames.jsx
│   │   │   ├── ParentDetails.jsx
│   │   │   └── EventDetails.jsx
│   │   │
│   │   ├── couple/
│   │   │   ├── CoupleSection.jsx
│   │   │   ├── LeafReveal.jsx
│   │   │   ├── FloatingLeaf.jsx
│   │   │   └── CouplePhoto.jsx
│   │   │
│   │   └── venue/
│   │       ├── VenueSection.jsx
│   │       ├── VenueDetails.jsx
│   │       ├── VenueQR.jsx
│   │       └── MapButton.jsx
│   │
│   ├── animations/
│   │   ├── landingAnimations.js
│   │   ├── invitationAnimations.js
│   │   ├── coupleAnimations.js
│   │   ├── venueAnimations.js
│   │   └── smoothScroll.js
│   │
│   ├── config/
│   │   ├── wedding.js
│   │   ├── events.js
│   │   ├── venue.js
│   │   └── theme.js
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   ├── useReducedMotion.js
│   │   └── useMediaQuery.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   ├── typography.css
│   │   └── responsive.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md

The exact structure may be adjusted if there is a better architectural solution, but maintain the same principles.
5. APP STRUCTURE

App.jsx should be simple.

Conceptually:

import LandingSection from "./components/landing/LandingSection";
import InvitationSection from "./components/invitation/InvitationSection";
import CoupleSection from "./components/couple/CoupleSection";
import VenueSection from "./components/venue/VenueSection";

function App() {
  return (
    <main>
      <LandingSection />
      <InvitationSection />
      <CoupleSection />
      <VenueSection />
    </main>
  );
}

export default App;

Do not turn App.jsx into a 500-line monster.
6. SECTION IDS

Each major section should have a stable ID:

<section id="landing">

<section id="invitation">

<section id="couple">

<section id="venue">

There are still NO routes.

If navigation is ever required, use normal scrolling:

document
  .getElementById("venue")
  .scrollIntoView({
    behavior: "smooth"
  });

If Lenis is used, integrate navigation with Lenis instead.
7. CONTENT MUST BE CONFIGURATION-DRIVEN

Do NOT hardcode wedding information throughout JSX.

Create configuration files.

For example:

export const wedding = {
  groom: {
    name: "RAHUL",
    father: "Father Name",
    mother: "Mother Name"
  },

  bride: {
    name: "KIRAN",
    father: "Father Name",
    mother: "Mother Name"
  },

  invitation: {
    introduction:
      "With the blessings of God and our beloved parents, we cordially invite you..."
  }
};

Events:

export const events = [
  {
    title: "Mehendi Night",
    date: "15 December 2026",
    time: "7:00 PM",
    venue: "Taj Hotel",
    description:
      "An evening of mehendi artistry, music, and family celebration."
  }
];

Venue:

export const venue = {
  name: "Taj Hotel",
  address: "Full Address Here",
  googleMapsUrl: "https://maps.google.com/..."
};

The developer should be able to change:

    Bride name
    Groom name
    Parents' names
    Grandparents' names
    Invitation text
    Event names
    Dates
    Times
    Descriptions
    Venue
    Address
    Google Maps URL
    Couple image

without modifying animation logic.
8. DESIGN LANGUAGE

The website should strongly follow the visual language of the provided screenshots.

The main palette should contain:

Warm Ivory / Cream
        ↓
Turquoise / Teal
        ↓
Royal Blue
        ↓
Magenta / Pink
        ↓
Gold
        ↓
Natural Leaf Green

Suggested CSS variables:

:root {
  --ivory: #f7f1df;
  --cream: #eee6d2;

  --temple-blue: #1267a8;
  --deep-blue: #063b78;

  --turquoise: #16a6a6;
  --teal: #087f88;

  --magenta: #c73591;
  --pink: #e66ca7;

  --gold: #d9a441;
  --soft-gold: #e8c46a;

  --leaf-green: #4f8a42;
  --dark-green: #286638;

  --text-dark: #352d27;
}

These values should be adjusted once the user's actual artwork is provided.

The final colors should match the supplied artwork rather than blindly following these exact hex values.
9. AVOID THESE DESIGN STYLES

Do NOT introduce:

    Generic SaaS styling
    Glassmorphism
    Neon gradients
    Excessive modern cards
    Generic pink wedding templates
    Excessive white space
    Corporate UI
    Giant navigation bars
    Unnecessary hamburger menus
    Excessive drop shadows
    Excessive rounded cards
    Random animations
    Random decorative assets

The website should feel culturally coherent.
10. TYPOGRAPHY

Use a combination of:
Decorative Display Font

For:

    Bride name
    Groom name
    Main invitation title
    Section titles

Use an elegant traditional serif/script-style font.
Body Font

For:

    Invitation paragraphs
    Event information
    Venue details
    Buttons

Use a highly readable serif or clean sans-serif.

Do not sacrifice readability for decorative typography.

Use responsive sizing with clamp().

Example:

font-size: clamp(2.5rem, 8vw, 7rem);

11. SECTION 1: TEMPLE LANDING

The first screen should immediately establish the temple wedding aesthetic.

The temple should occupy most or all of the initial viewport.

The design should feel like the user is entering a beautifully decorated temple wedding invitation.
12. LAYERED TEMPLE COMPOSITION

If the user supplies separate artwork layers, preserve them separately.

The scene should ideally consist of:

Background
    ↓
Temple architecture
    ↓
Midground decorations
    ↓
Foreground trees
    ↓
Hanging leaves / flowers
    ↓
Wedding typography

Do NOT flatten everything into one image if separate assets are available.

This allows subtle parallax movement.
13. TEMPLE PARALLAX

Create a subtle multi-layer parallax effect.

Suggested intensity:

Background:
0-3%

Midground:
3-7%

Foreground:
5-12%

These values are approximate.

The movement should be subtle.

The temple should feel alive without looking like the entire building is floating around.
14. FOREGROUND TREE MOVEMENT

The user specifically wants the trees and foreground foliage to move with scrolling.

The effect should resemble:

    gentle wind moving leaves and branches.

Use a combination of:

rotation
x translation
y translation
small scale changes

Example ranges:

rotation: ±1–3 degrees
x movement: a few pixels
y movement: a few pixels

Do not simply move the trees vertically.

The animation should feel organic.

Use GSAP ScrollTrigger for scroll-linked movement.
15. AMBIENT FOLIAGE ANIMATION

In addition to scroll-based movement, some hanging leaves and flowers may have extremely subtle continuous movement.

Use GSAP timelines.

Keep it slow.

For example:

rotation
small horizontal movement
small vertical movement

Avoid obvious looping.

The user should notice the atmosphere before noticing the animation.
16. LANDING TEXT

The first section should have relatively little text.

Possible structure:

[auspicious decorative symbol]

RAHUL

&

KIRAN

A Wedding Celebration

[Date]

Scroll to explore

All actual content should be configurable.

Animation sequence:

Decorative symbol
       ↓
Couple names
       ↓
Subtitle
       ↓
Date
       ↓
Scroll indicator

Use subtle:

    opacity
    translateY
    scale

animations.

No flashy text effects.
17. LANDING → INVITATION TRANSITION

This transition must feel intentional.

Do not end Section 1 and suddenly begin a completely unrelated white card.

Instead:

Temple
  ↓
Foreground foliage
  ↓
Ornamental architecture
  ↓
Cream invitation surface
  ↓
Invitation content

The temple artwork should visually flow into the invitation.

Think:

    one enormous animated wedding invitation.

Not:

    four unrelated webpage sections.

18. SECTION 2: WEDDING INVITATION

This section should closely follow the provided invitation screenshot.

Create a warm ivory/cream central invitation surface.

Surround it with:

    ornate temple borders
    pillars
    lotus decorations
    gold accents
    turquoise details
    blue ornamental artwork
    magenta details
    traditional motifs

The invitation should feel like premium printed wedding stationery.
19. INVITATION CONTENT

The section should support content similar to:

[auspicious symbol]

With the blessings of God
and our beloved parents,

we cordially invite you...

[Grandparents]

[Parents]

to grace the auspicious wedding ceremony
of their beloved son

RAHUL

&

KIRAN

[additional family information]

On the following events

The exact content will be provided/configured later.

Do not permanently hardcode these names or sentences.
20. INVITATION ANIMATION

When the user enters the invitation section:
Phase 1

Outer decoration becomes visible.
Phase 2

Auspicious symbol appears.
Phase 3

Introductory text fades upward.
Phase 4

Parent/family details appear.
Phase 5

Couple names receive stronger emphasis.
Phase 6

Event information appears.

Use GSAP ScrollTrigger.

Animations should be elegant and slow.

Do not animate every individual word.

Group related content.
21. EVENT COMPONENT

Events must be reusable.

For example:

<EventDetails event={event} />

If there are multiple events, render them from the configuration array.

Do not duplicate markup.

Possible event information:

Event Name
Date
Time
Venue
Description

22. SECTION 3: BRIDE & GROOM

Do NOT simply reproduce the reference site's existing photo carousel.

Instead, create an interaction specifically matching the temple aesthetic.

The main visual concept is:

    Leaves fly across the screen and reveal the couple's photograph underneath.

This should be one of the major animation moments of the website.
23. COUPLE REVEAL SEQUENCE

Initial state:

Temple-inspired background
+
ornamental decoration
+
hidden couple photograph

As the user scrolls:
Stage 1

A few leaves enter.
Stage 2

More leaves begin flying across the viewport.
Stage 3

The leaves partially cover the center.
Stage 4

The couple photograph begins revealing.
Stage 5

Leaves continue moving across the screen.
Stage 6

The leaves disperse.
Stage 7

The complete couple photograph is visible.
Stage 8

Couple names/details appear.
24. LEAF ANIMATION

Do not create hundreds of DOM elements.

Use approximately:

Desktop:
20-35 leaves

Mobile:
10-15 leaves

Randomize:

position
scale
rotation
speed
direction
delay
horizontal drift
vertical drift

Use GSAP.

The movement should be organic.

Leaves should have slightly different trajectories.

Avoid all leaves moving at exactly the same speed.
25. LEAF VISUAL STYLE

Use the actual leaf artwork supplied by the user whenever possible.

If individual leaf assets are provided, use them.

Otherwise create a small reusable set of leaf assets.

Use variations of:

    green leaves
    dried leaves
    small floral petals
    lotus petals
    traditional foliage

Do not introduce leaves that visually clash with the temple artwork.
26. COUPLE PHOTO

The couple photograph should be simple.

The photograph should remain the focal point.

Possible composition:

Ornamental frame
       ↓
Couple photo
       ↓
RAHUL & KIRAN

Use:

    subtle border
    tasteful ornamental frame
    soft shadow
    cream background
    optional lotus decoration

Avoid creating a huge modern card around the image.
27. IMAGE REVEAL

Use performant reveal techniques such as:

clip-path
opacity
scale
mask/reveal

For example:

clip-path: inset(100% 0 0 0);

animating toward:

clip-path: inset(0% 0 0 0);

Combine with subtle:

opacity: 0 → 1
scale: 0.96 → 1

Do not make the reveal excessively dramatic.
28. SECTION 4: VENUE

The final section should provide the practical information.

It should contain:

Venue

[Venue Name]

[Address]

[Date]

[Time]

[QR CODE]

Scan to open location

[Open in Google Maps]

The final reference screenshot will be used to refine the exact design.
29. QR CODE

The QR code should encode the Google Maps location URL.

It must be:

    high contrast
    sufficiently large
    surrounded by whitespace
    easy to scan
    displayed on a clean background

Do not put complicated artwork directly behind the QR.

Scanning reliability is more important than decoration.

The Google Maps URL should come from:

venue.googleMapsUrl

30. GOOGLE MAPS BUTTON

Provide a prominent button:

Open in Google Maps

It should open the configured location:

<a
  href={venue.googleMapsUrl}
  target="_blank"
  rel="noopener noreferrer"
>
  Open in Google Maps
</a>

This provides a backup for users who cannot scan the QR.
31. RESPONSIVE DESIGN

The website must work properly on:
Mobile

360px
375px
390px
412px
430px

Tablet

768px
1024px

Desktop

1280px
1440px
1920px

Do NOT simply shrink the desktop design.

Mobile should have intentional layout adjustments.
32. MOBILE PRIORITY

Mobile is extremely important because most wedding invitation users will open the link on phones.

Ensure:

    no horizontal overflow
    readable typography
    appropriately sized artwork
    touch-friendly buttons
    readable invitation text
    scannable QR
    smooth scrolling
    reduced animation complexity
    no layout jumps

Touch targets should generally be around:

44 × 44px

or larger.
33. DESKTOP

On desktop:

    allow artwork to breathe
    use larger decorative elements
    use subtle parallax
    maintain a controlled content width
    avoid giant empty spaces
    keep the invitation visually centered

Do not simply stretch the mobile design.
34. SMOOTH SCROLLING

Optionally use Lenis.

If used, integrate it correctly with GSAP ScrollTrigger.

The flow should be:

Lenis
 ↓
requestAnimationFrame
 ↓
GSAP
 ↓
ScrollTrigger

Do not implement multiple competing scrolling systems.

If Lenis causes problems on mobile, use native scrolling there.
35. ANIMATION PERFORMANCE

This is one of the highest priorities.

The website must feel smooth and responsive.

Target approximately:

60 FPS

where hardware allows.

Prefer animating:

transform
opacity
clip-path

Avoid continuous animation of:

top
left
width
height

Avoid unnecessary:

filter
blur
large box shadows

Do not constantly update React state during scroll.
36. REACT PERFORMANCE

Animation should primarily happen outside the React rendering cycle.

Bad:

window.addEventListener("scroll", () => {
  setScrollPosition(window.scrollY);
});

Better:

React renders component
        ↓
GSAP controls animation
        ↓
browser renders transforms

Use React state only when the actual UI state needs to change.
37. GSAP CLEANUP

Every component that creates GSAP animations must clean them up.

Use GSAP context.

Conceptually:

useEffect(() => {
  const ctx = gsap.context(() => {
    // animation
  }, sectionRef);

  return () => ctx.revert();
}, []);

This prevents:

    duplicate animations
    memory leaks
    stale ScrollTriggers
    development-mode animation duplication

38. RESPONSIVE GSAP

Use GSAP matchMedia() when animation behavior differs substantially.

Example:

const mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  // desktop animation
});

mm.add("(max-width: 767px)", () => {
  // mobile animation
});

Desktop can have:

    more leaves
    stronger parallax
    larger movement distances

Mobile should have:

    fewer leaves
    weaker parallax
    shorter movement distances
    fewer simultaneous animations

39. ASSET ORGANIZATION

All assets must have meaningful names.

Bad:

IMG_9832.png
final2.png
new-final.png
image3.jpg

Good:

temple-background.webp
temple-foreground-left.webp
temple-foreground-right.webp
lotus-gold.webp
hanging-flower-garland.webp
hanging-leaves.webp
ganesha-symbol.webp
couple-photo.webp
venue-qr.webp

Organize them:

assets/
├── temple/
├── backgrounds/
├── decorations/
├── flowers/
├── leaves/
├── couple/
├── venue/
├── icons/
└── textures/

40. USER-PROVIDED ARTWORK

The user will provide custom background images and artwork.

The implementation must be designed around those assets.

When assets are supplied:

    Inspect their dimensions.
    Determine their intended role.
    Determine whether they belong in background, midground, or foreground.
    Preserve their visual quality.
    Optimize them where appropriate.
    Give them meaningful filenames.
    Place them into the appropriate asset directory.
    Build reusable components around them.

Do not arbitrarily replace the user's artwork with generic stock imagery.
41. LAYERED ARTWORK

If the user supplies multiple layers:

temple background
+
pillars
+
trees
+
flowers
+
foreground foliage

preserve those layers.

For example:

<TempleBackground />
<TempleMidground />
<ForegroundTrees />
<HangingDecorations />

This allows parallax and animation.

Do not flatten everything into one image unless there is a strong technical reason.
42. IMAGE OPTIMIZATION

Large artwork should be optimized.

Prefer:

WebP
AVIF

where appropriate.

Do not ship unnecessarily massive PNG files.

Use lazy loading for images that are not immediately visible.

The first viewport's critical assets should load as early as necessary.
43. LOADING SCREEN

If the artwork is sufficiently large that a loading state is necessary, use a very minimal loading screen.

Possible design:

Lotus / auspicious symbol
+
subtle fade

Do NOT create an artificial 5-second loading animation.

Hide the loader as soon as critical assets are ready.

The user should never wait just because the designer wanted a dramatic spinner.
44. ACCESSIBILITY

Use semantic HTML.

Use:

main
section
header
h1
h2
p
a
button

Meaningful images should have alt text.

Purely decorative artwork should use:

alt=""
aria-hidden="true"

Do not make important information dependent on animation.
45. REDUCED MOTION

Respect:

@media (prefers-reduced-motion: reduce)

When reduced motion is enabled:

    remove heavy leaf animations
    reduce parallax
    simplify image reveals
    minimize decorative movement
    keep all content visible and usable

The website should remain beautiful without animation.
46. OPTIONAL BACKGROUND MUSIC

If the user later provides an audio file, the website may support background music.

Do NOT force autoplay with sound.

Browsers often block it.

If implemented, provide a small unobtrusive music control.

For example:

♪ / 🔇

The music control must match the visual theme.

Audio is optional and should never interfere with the invitation itself.
47. NAVIGATION

No traditional navbar is required.

The primary navigation mechanism is simply:

scroll

A subtle scroll indicator can be used on the first section.

If a navigation control is eventually added, it should remain visually minimal.

Possible:

Invitation
Couple
Venue

But it must not dominate the temple design.
48. VISUAL HIERARCHY

Every section needs one primary focal point.
Section 1

Temple + couple names.
Section 2

Invitation + couple names.
Section 3

Couple photograph.
Section 4

Venue + QR.

Decorations should frame these elements rather than compete with them.
49. DECORATIVE MOTIFS

Use decorative elements consistently:

    lotus
    temple bells
    flowers
    leaves
    banana leaves
    peacock motifs
    elephant motifs
    temple pillars
    lamps
    ornamental arches
    auspicious symbols

Use them with restraint.

The goal is:

    rich and detailed

not:

    every possible Indian wedding decoration thrown onto the screen.

50. SECTION TRANSITIONS

Sections should share visual motifs.

For example:

Landing
   ↓
trees continue downward
   ↓
ornamental arch
   ↓
Invitation
   ↓
floating petals
   ↓
Couple
   ↓
lotus decoration
   ↓
Venue

Avoid abrupt background changes.

The whole page should feel physically connected.
51. PERFORMANCE RULE

Never prioritize animation over usability.

The website should still work if:

    GSAP fails
    smooth scrolling is unavailable
    animations are disabled
    some decorative assets fail

The core content must remain visible.

Animation is enhancement, not infrastructure.
52. NO UNNECESSARY FEATURES

Do not add:

    login
    authentication
    dashboard
    backend
    database
    user accounts
    React Router
    unnecessary APIs
    unnecessary third-party services
    social feeds
    comments
    generic contact forms

This is a wedding invitation.

Keep it focused.
53. SEO / METADATA

Add basic metadata:

Title:
Rahul & Kiran | Wedding Invitation

Description:
A celebration of Rahul & Kiran's wedding.

Also provide:

    viewport metadata
    theme color
    Open Graph metadata where appropriate

Use configurable names where practical.
54. BROWSER SUPPORT

Test on:

    Chrome
    Firefox
    Safari
    Edge
    Android Chrome
    iOS Safari

Pay particular attention to mobile viewport behavior.

Use:

100svh
100dvh

where appropriate rather than blindly relying on 100vh.
55. CODE QUALITY

Keep code:

    modular
    readable
    reusable
    logically separated
    appropriately commented
    free from unnecessary duplication

Avoid:

    giant components
    giant CSS files
    giant animation functions
    duplicated event markup
    magic numbers scattered everywhere
    unnecessary React state
    unnecessary dependencies

Animation constants should be named.

For example:

const DESKTOP_LEAF_COUNT = 28;
const MOBILE_LEAF_COUNT = 14;
const PARALLAX_INTENSITY = 0.08;

56. README

Provide a README explaining:

Installation
Development
Production build
Preview
Asset replacement
Changing names
Changing parents
Changing event details
Changing venue
Changing Google Maps URL
Replacing couple image
Replacing temple artwork
Changing colors
Changing fonts
Deployment

Basic commands:

npm install
npm run dev
npm run build
npm run preview

57. DEVELOPMENT ORDER

Implement in this order:
Phase 1

Create the React + Vite JavaScript project.
Phase 2

Create the modular folder structure.
Phase 3

Create theme variables and typography.
Phase 4

Implement the temple landing section.
Phase 5

Implement layered temple artwork.
Phase 6

Implement foreground tree/leaf movement.
Phase 7

Implement the invitation section.
Phase 8

Implement event configuration.
Phase 9

Implement the couple section.
Phase 10

Implement the flying-leaf reveal.
Phase 11

Implement the venue section.
Phase 12

Implement QR and Google Maps link.
Phase 13

Integrate GSAP ScrollTrigger.
Phase 14

Add optional Lenis smooth scrolling.
Phase 15

Optimize mobile animations.
Phase 16

Optimize images.
Phase 17

Implement reduced-motion support.
Phase 18

Test desktop and mobile.
Phase 19

Clean and refactor the final code.
58. IMPORTANT REFERENCE RULE

The provided screenshots are visual references, not instructions to blindly copy the website.

Preserve the characteristics that make the reference attractive:

    temple architecture
    layered artwork
    ornamental borders
    ivory background
    turquoise
    royal blue
    magenta
    gold
    traditional motifs
    elegant typography
    premium invitation-card composition
    scroll-driven experience

But adapt the design to the requested custom experience.

Especially:
Page 1

Traditional temple landing with animated foreground trees and foliage.
Page 2

Detailed traditional wedding invitation.
Page 3

Flying leaves reveal the couple photograph.
Page 4

Venue details + QR + Google Maps backup link.
59. ADDITIONAL REFERENCE IMAGE

The user will provide another screenshot/reference for the remaining section.

When that reference is provided:

    Analyze its layout.
    Analyze its typography.
    Analyze its spacing.
    Analyze its decorative elements.
    Analyze its color usage.
    Analyze its animation behavior if visible.
    Determine which parts fit the existing temple theme.
    Incorporate the useful design characteristics.
    Do not blindly clone the original website.

The fourth section should be refined after that reference is available.
60. FINAL VISUAL GOAL

The finished website should feel like:

Traditional Indian Temple Wedding
              +
Premium Printed Invitation
              +
Animated Artwork
              +
Cinematic Scroll Experience
              +
Modern Responsive Web Design

It should NOT feel like:

Random React website
+
Temple PNGs
+
Random GSAP animations

Every animation must have a visual purpose.
61. FINAL USER EXPERIENCE

The final experience should approximately feel like this:

┌─────────────────────────────────┐
│                                 │
│       ORNATE TEMPLE              │
│                                 │
│       RAHUL                      │
│          &                       │
│       KIRAN                      │
│                                 │
│       Scroll ↓                   │
│                                 │
└─────────────────────────────────┘
                ↓
        foreground foliage
        moves with scroll
                ↓
┌─────────────────────────────────┐
│                                 │
│       INVITATION                 │
│                                 │
│    Blessings / Parents          │
│                                 │
│        RAHUL & KIRAN             │
│                                 │
│       Event Details              │
│                                 │
└─────────────────────────────────┘
                ↓
          leaves appear
                ↓
      leaves fly across screen
                ↓
┌─────────────────────────────────┐
│                                 │
│          COUPLE PHOTO            │
│                                 │
│         RAHUL & KIRAN            │
│                                 │
└─────────────────────────────────┘
                ↓
        ornamental transition
                ↓
┌─────────────────────────────────┐
│                                 │
│            VENUE                 │
│                                 │
│        Venue Details             │
│                                 │
│          ┌─────────┐             │
│          │ QR CODE │             │
│          └─────────┘             │
│                                 │
│      Open in Google Maps         │
│                                 │
└─────────────────────────────────┘

62. FINAL ACCEPTANCE CRITERIA

The project is complete only when all of the following are satisfied:

    [ ] React is used.
    [ ] JavaScript is used instead of TypeScript.
    [ ] Vite is used.
    [ ] No React Router exists.
    [ ] No separate routes exist.
    [ ] Everything is one continuous scrolling page.
    [ ] Four major sections exist.
    [ ] Landing section has a strong temple aesthetic.
    [ ] Temple artwork can be layered when assets permit.
    [ ] Foreground trees respond naturally to scrolling.
    [ ] Hanging foliage has subtle ambient movement.
    [ ] Landing transitions naturally into invitation.
    [ ] Invitation contains configurable wedding information.
    [ ] Couple names have strong visual hierarchy.
    [ ] Events are configuration-driven.
    [ ] Page 3 uses the flying-leaf reveal.
    [ ] Couple photograph is elegantly presented.
    [ ] Venue section contains venue information.
    [ ] QR code opens the configured Google Maps location.
    [ ] Backup Google Maps button is provided.
    [ ] Website works on mobile.
    [ ] Website works on desktop.
    [ ] No horizontal scrolling occurs.
    [ ] Animations remain smooth.
    [ ] React is not unnecessarily re-rendering during scroll.
    [ ] Images are optimized.
    [ ] Below-fold images are lazy-loaded where appropriate.
    [ ] Mobile animation complexity is reduced.
    [ ] Reduced-motion support exists.
    [ ] Accessibility basics are implemented.
    [ ] GSAP animations are properly cleaned up.
    [ ] Content is separated from presentation.
    [ ] Assets are clearly named.
    [ ] Assets are organized inside the assets directory.
    [ ] README explains how to customize the website.
    [ ] The visual palette follows the supplied reference artwork.
    [ ] The final result feels like one cohesive animated wedding invitation.

MOST IMPORTANT PRINCIPLE

Do not build four webpages.

Build one continuous animated wedding invitation.

The user should feel like they are scrolling through a beautifully illustrated traditional Indian wedding invitation that has come alive.

The animation must be smooth, subtle, intentional, and performant.

The artwork, typography, colors, transitions, and spacing must work together as one visual system.

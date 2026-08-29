import { useEffect } from "react";
import LandingSection from "./components/landing/LandingSection";
import InvitationSection from "./components/invitation/InvitationSection";
import CoupleSection from "./components/couple/CoupleSection";
import VenueSection from "./components/venue/VenueSection";
import { setupSmoothScroll } from "./animations/smoothScroll";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { MEDIA_MOBILE } from "./config/theme";

function App() {
	const reducedMotion = useReducedMotion();
	const isMobile = useMediaQuery(MEDIA_MOBILE);

	// Lenis stays off for reduced-motion users and on mobile, where native
	// touch scrolling is more reliable than an inertia layer.
	useEffect(() => {
		if (reducedMotion || isMobile) return undefined;
		return setupSmoothScroll();
	}, [reducedMotion, isMobile]);

	return (
		<main>
			<div className="wedding-page" >
				<LandingSection />
				<InvitationSection />
				<CoupleSection />
				<VenueSection />

			</div>
		</main>
	);
}

export default App;

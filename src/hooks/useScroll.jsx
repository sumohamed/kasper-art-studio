import { useState, useEffect } from "react";
export const useScroll = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	// Changing header background on scrolll
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// unmount Event
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return { isScrolled };
};

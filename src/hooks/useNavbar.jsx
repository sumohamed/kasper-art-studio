import { useState, useEffect, useRef } from "react";

export const useNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isActive, setIsActive] = useState("home");
	const navRef = useRef(null);

	const handleToggleNav = () => {
		setIsOpen(!isOpen);
	};

	const handleActiveLink = (link) => {
		// get link title
		setIsActive(link);

		// close nav menu if it's open
		setIsOpen((prev) => !prev);
	};

	// Close navigation menu when user click any where outside navigation list
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false);
			}
		};

		const handleClickOutside = (event) => {
			// if navlist is open & there is a nav ref !=null & this nav ref doesn't have the value of this targeted event then close navlist
			if (
				isOpen &&
				navRef.current &&
				!navRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		document.addEventListener("mousedown", handleClickOutside);

		// unmount event
		return () => {
			window.removeEventListener("resize", handleResize);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);
	return { isOpen, isActive, handleActiveLink, handleToggleNav, navRef };
};

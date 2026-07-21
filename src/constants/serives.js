import { servicesIcons } from "../assets";

export const ourServices = {
	sectionHeader: {
		title: "Services",
		subtitle: "Discover our core art programs designed for all skill levels",
	},
	servicesList: [
		{
			id: "S1",
			iconName: servicesIcons.FaPalette,
			title: "Drawing & Painting",
			description:
				"Master oil, acrylic, and watercolor techniques with hands-on guidance from expert artists.",
		},
		{
			id: "S2",
			iconName: servicesIcons.FaCubes,
			title: "Sculpture & Pottery",
			description:
				"Learn clay modeling, pottery wheel basics, and 3D art creation in a fully equipped studio.",
		},
		{
			id: "S3",
			iconName: servicesIcons.FaLaptopCode,
			title: "Digital Art & Design",
			description:
				"Explore digital illustration, character design, and concept art using professional software.",
		},
		{
			id: "S4",
			iconName: servicesIcons.FaChild,
			title: "Kids Creative Zone",
			description:
				"Creative workshops and art activities designed to help children explore, learn, and express themselves.",
		},
	],
};

import {
	FaBars,
	FaBarsStaggered,
	FaChevronLeft,
	FaChevronRight,
	FaPalette,
	FaCubes,
	FaLaptopCode,
	FaChild,
	FaPlus,
} from "react-icons/fa6";

import {
	FaCertificate,
	FaUser,
	FaImage,
	FaChalkboardTeacher,
	FaPaintBrush,
	FaAward,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaClock,
	FaInstagram,
	FaBehance,
	FaDribbble,
	FaFacebookF,
} from "react-icons/fa";

import { MdOutlineMail } from "react-icons/md";

import Logo from "./logo.png";
import AboutImg from "./about.jpg";

import Sculptor from "./sculptor.mp4";

export const images = { Logo, AboutImg };
export const icons = { FaPlus, MdOutlineMail };
export const videos = { Sculptor };
export const carouselAngles = { FaChevronLeft, FaChevronRight };
export const statsIcons = { FaUser, FaPaintBrush, FaImage, FaAward };
export const navIcons = { FaBars, FaBarsStaggered };

export const servicesIcons = { FaPalette, FaCubes, FaLaptopCode, FaChild };
export const contactIcons = { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock };

export const featuresIcons = {
	FaUser,
	FaChalkboardTeacher,
	FaImage,
	FaCertificate,
};

export const socialLinks = [
	{
		id: "Behance",
		icon: FaBehance,
		href: "#",
	},
	{
		id: "Instagram",
		icon: FaInstagram,
		href: "#",
	},
	{
		id: "Dribbble",
		icon: FaDribbble,
		href: "#",
	},
	{
		id: "Facebook",
		icon: FaFacebookF,
		href: "#",
	},
];

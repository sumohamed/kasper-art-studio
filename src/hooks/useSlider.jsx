import { useState } from "react";

export default function useSlider(data = []) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
	};

	const goToSlide = (index) => {
		setCurrentIndex(index);
	};

	return {
		currentIndex,
		nextSlide,
		prevSlide,
		goToSlide,
		currentSlide: data[currentIndex],
	};
}

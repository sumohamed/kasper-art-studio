import useSlider from "../hooks/useSlider";
import styles from "./components.module.css";
import { carouselAngles } from "../assets";
import { useRef } from "react";
export const Carousel = ({
	sectionClass,
	data,
	showArrows = true,
	showDots = true,
	dotsType = "",
	children,
}) => {
	const LeftAngle = carouselAngles.FaChevronLeft;
	const RightAngle = carouselAngles.FaChevronRight;
	const touchStartX = useRef(0);

	const { currentIndex, nextSlide, prevSlide, goToSlide, currentSlide } =
		useSlider(data);

	if (!data || data.length === 0) return null;

	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = (e) => {
		const touchEndX = e.changedTouches[0].clientX;

		const distance = touchStartX.current - touchEndX;

		// Swipe left → next slide
		if (distance > 50) {
			nextSlide();
		}

		// Swipe right → previous slide
		if (distance < -50) {
			prevSlide();
		}
	};

	return (
		<section
			className={sectionClass}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === "ArrowRight") {
					nextSlide();
				}
				if (e.key === "ArrowLeft") {
					prevSlide();
				}
			}}
		>
			{children(currentSlide, currentIndex)}

			{showArrows && (
				<>
					<button
						onClick={prevSlide}
						className={`${styles.carouselArrow} ${styles.left}`}
					>
						<LeftAngle />
					</button>
					<button
						onClick={nextSlide}
						className={`${styles.carouselArrow} ${styles.right}`}
					>
						<RightAngle />
					</button>
				</>
			)}

			{showDots && (
				<div data-style={dotsType} className={styles.carouselDots}>
					{data.map((_, index) => (
						<button
							key={index}
							className={`${styles.dot} ${currentIndex === index ? styles.active : ""}`}
							onClick={() => goToSlide(index)}
						/>
					))}
				</div>
			)}
		</section>
	);
};

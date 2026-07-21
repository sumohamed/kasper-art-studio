import useSlider from "../hooks/useSlider";
import styles from "./components.module.css";
import { carouselAngles } from "../assets";

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

	const { currentIndex, nextSlide, prevSlide, goToSlide, currentSlide } =
		useSlider(data);

	if (!data || data.length === 0) return null;

	return (
		<section className={sectionClass}>
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

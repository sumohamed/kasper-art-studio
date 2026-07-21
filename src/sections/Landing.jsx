import styles from "./Sections.module.css";
import { Carousel, Overlay } from "../components";
import { heroSlides } from "../constants";

export const Landing = () => {
	return (
		<Carousel data={heroSlides} sectionClass={styles.landing}>
			{(slide) => (
				<div
					className={styles.slide}
					style={{ backgroundImage: `url(${slide.bgImage})` }}
				>
					<Overlay />
					<div className={styles.wrapper}>
						<article className={styles.content} key={slide.id}>
							<h1>
								{slide.title.split("|")[0].trim()} <br />{" "}
								{slide.title.split("|")[1].trim()}
							</h1>
							<p>{slide.description}</p>
						</article>
					</div>
				</div>
			)}
		</Carousel>
	);
};

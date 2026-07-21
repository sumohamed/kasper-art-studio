import styles from "./Sections.module.css";
import { Carousel } from "../components";
import { testimonials } from "../constants";

export const Testimonials = () => {
	const groupedTestimonials = [];

	for (let i = 0; i < testimonials.length; i += 2) {
		groupedTestimonials.push(testimonials.slice(i, i + 2));
	}

	return (
		<Carousel
			showArrows={false}
			sectionClass={styles.testimonials}
			data={groupedTestimonials}
			dotsType="borderd"
		>
			{(slide) => (
				<>
					{slide.map((item) => (
						<article key={item.id} className={styles.card}>
							<div className={styles.image}>
								<img src={item.image} alt={item.name} />
							</div>
							<div className={styles.text}>
								<h4>{item.name}</h4>
								<p>{item.quote}</p>
								<span>{item.role}</span>
							</div>
						</article>
					))}
				</>
			)}
		</Carousel>
	);
};

import styles from "./Sections.module.css";
import { SectionHeading } from "../components";
import { ourServices } from "../constants";

export const Services = () => {
	const { sectionHeader, servicesList } = ourServices;

	if (!servicesList) return <p>Loading...</p>;

	return (
		<section
			className={styles.services}
			aria-labelledby={sectionHeader.title.toLowerCase()}
		>
			<div className="container">
				<SectionHeading
					title={sectionHeader.title}
					description={sectionHeader.subtitle}
				/>

				<div className={styles.grid}>
					{servicesList.map((service) => {
						const Icon = service.iconName;

						return (
							<article key={service.id} className={styles.card}>
								<Icon className={styles.icon} />
								<div className={styles.content}>
									<h3>{service.title}</h3>
									<p>{service.description}</p>
									<button className={styles.bookBtn}>Book Now</button>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

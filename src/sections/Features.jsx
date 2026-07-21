import styles from "./Sections.module.css";
import { Overlay, SectionHeading } from "../components";
import { perks } from "../constants";

export const Features = () => {
	return (
		<section aria-labelledby="features" className={styles.features}>
			<Overlay />
			<SectionHeading readOnly={true} title="features" />
			<div className={styles.content}>
				<h3>Our Design Comes With...</h3>
				<ul>
					{perks.map((feature) => {
						const Icon = feature.iconName;
						return (
							<li key={feature.id}>
								<Icon className={styles.icon} />

								<span className={styles.title}>{feature.title}</span>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

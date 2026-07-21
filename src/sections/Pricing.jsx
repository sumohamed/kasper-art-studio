import styles from "./Sections.module.css";
import { SectionHeading } from "../components";
import { ourPrices } from "../constants/prices";

export const Pricing = () => {
	const { sectionHeader, plans } = ourPrices;

	if (!plans) return <p>Loading...</p>;

	return (
		<section className={styles.pricing}>
			<div className="container">
				<SectionHeading
					title={sectionHeader.title.toLowerCase()}
					description={sectionHeader.subtitle}
				/>

				<div className={styles.grid}>
					{plans.map((plan) => {
						return (
							<article key={plan.id} className={styles.card}>
								<div className={styles.info}>
									<h3>{plan.name.toUpperCase()}</h3>
									<p>
										<sup>{plan.currency}</sup>
										<span>{plan.price}</span>
										<sub>
											/
											{plan.period
												.split("", 2)
												.join("")
												.toUpperCase()}
										</sub>
									</p>
								</div>
								<ul className={styles.list}>
									{plan.features.map((feature, index) => (
										<li key={index}>{feature}</li>
									))}
								</ul>
								<button className={styles.buyBtn}>Buy Now</button>
							</article>
						);
					})}
				</div>

				<div className={styles.contactText}>
					<p className={styles.text}>
						Contact us if you have special request
					</p>
					<button className={styles.btn}>Contact Us</button>
				</div>
			</div>
		</section>
	);
};

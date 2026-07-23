import styles from "./Sections.module.css";
import { SectionHeading, StatusMessage } from "../components";
import { ourPrices } from "../constants/prices";
import { useContext } from "react";
import { BookingContext } from "../features/booking/BookingContext";
import { useStatusMsg } from "../hooks/useStatusMsg";

export const Pricing = () => {
	const { sectionHeader, plans } = ourPrices;
	const { setSelectedPlan, selectedService, selectedPlan } =
		useContext(BookingContext);
	const { showMessage, setShowMessage } = useStatusMsg();

	if (!plans) return <p>Loading...</p>;

	const handleBookingPlan = (plan) => {
		if (!selectedService) {
			setShowMessage(true);
		} else {
			setSelectedPlan(plan);
			setShowMessage(true);

			document.getElementById("contact")?.scrollIntoView({
				behavior: "smooth",
			});

			window.history.replaceState(null, "", "#contact");
		}
	};

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
								<button
									className={styles.buyBtn}
									onClick={() => handleBookingPlan(plan)}
								>
									Buy Now
								</button>
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
			{!selectedService && showMessage && (
				<StatusMessage
					dataType="error"
					message="Please Select A service First"
				/>
			)}
			{selectedService && selectedPlan && showMessage && (
				<StatusMessage
					dataType="success"
					message={`"${selectedPlan.name}" plan selected sucessfuly`}
				/>
			)}
		</section>
	);
};

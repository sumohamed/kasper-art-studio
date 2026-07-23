import styles from "./Sections.module.css";
import { SectionHeading, StatusMessage } from "../components";
import { ourServices } from "../constants";
import { useContext } from "react";
import { BookingContext } from "../features/booking/BookingContext";
import { useStatusMsg } from "../hooks/useStatusMsg";

export const Services = () => {
	const { sectionHeader, servicesList } = ourServices;
	const { selectedService, setSelectedService } = useContext(BookingContext);
	const { showMessage, setShowMessage } = useStatusMsg();

	const handleBooking = (serviceTitle) => {
		// Getting selected service value
		setSelectedService(serviceTitle);

		// Show success message
		setShowMessage(true);

		// Scroll to the new current section section
		document.getElementById("pricing")?.scrollIntoView({
			behavior: "smooth",
		});

		// Update the URL hash to match the current section
		window.history.replaceState(null, "", "#pricing");
	};

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
									<button
										className={styles.bookBtn}
										onClick={() => handleBooking(service.title)}
									>
										Book Now
									</button>
								</div>
							</article>
						);
					})}
				</div>
			</div>
			{showMessage && (
				<StatusMessage
					dataType="success"
					message={`"${selectedService}" selected successfully`}
				/>
			)}
		</section>
	);
};

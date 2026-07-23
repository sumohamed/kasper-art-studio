import { useContext, useState } from "react";
import { SectionHeading, StatusMessage } from "../components";
import { contactInfo } from "../constants";
import styles from "./Sections.module.css";
import { useStatusMsg } from "../hooks/useStatusMsg";
import { BookingContext } from "../features/booking/BookingContext";

export const Contact = () => {
	const [status, setStatus] = useState(null);

	const { showMessage, setShowMessage } = useStatusMsg();

	const {
		selectedService,
		setSelectedService,
		selectedPlan,
		setSelectedPlan,
	} = useContext(BookingContext);

	const [contactForm, setContactForm] = useState({
		username: "",
		email: "",
		subject: "",
		message: "",
	});

	const bookingSubject =
		selectedService && selectedPlan
			? `${selectedService} - ${selectedPlan.name} Plan`
			: "";

	const handleChange = (e) => {
		const { name, value } = e.target;

		setContactForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const finalSubject = bookingSubject || contactForm.subject;

		if (
			!contactForm.username.trim() ||
			!contactForm.email.trim() ||
			!finalSubject.trim() ||
			!contactForm.message.trim()
		) {
			setStatus({
				type: "error",
				message: "All fields are required.",
			});
			setShowMessage(true);

			return;
		}

		const formData = {
			...contactForm,
			subject: finalSubject,
		};

		console.log(formData);

		setSelectedService("");
		setSelectedPlan("");

		setContactForm({
			username: "",
			email: "",
			subject: "",
			message: "",
		});

		setStatus({
			type: "success",
			message: "Message sent successfully.",
		});

		setShowMessage(true);
	};

	return (
		<section className={styles.contact} aria-labelledby="contact">
			<div className="container">
				<SectionHeading
					title="contact"
					description="Have questions about our workshops, exhibitions, or upcoming events? We'd love to hear from you."
				/>

				<div className={styles.content}>
					<form onSubmit={handleSubmit} className={styles.contactForm}>
						<input
							className={styles.input}
							type="text"
							name="username"
							placeholder="Your Name"
							value={contactForm.username}
							onChange={handleChange}
						/>
						<input
							className={styles.input}
							type="email"
							name="email"
							placeholder="Your Email"
							value={contactForm.email}
							onChange={handleChange}
						/>
						<input
							className={styles.input}
							type="text"
							name="subject"
							placeholder="Subject"
							value={bookingSubject || contactForm.subject}
							readOnly={!!bookingSubject}
							onChange={handleChange}
						/>
						<textarea
							className={styles.input}
							name="message"
							placeholder="Your Message"
							value={contactForm.message}
							onChange={handleChange}
						></textarea>
						<button className={styles.submitBtn} type="submit">
							Send Message
						</button>
					</form>

					<ul className={styles.contactInfo}>
						{contactInfo.map((item) => {
							const Icon = item.iconName;
							return (
								<li key={item.id} className={styles.item}>
									<div className={styles.image}>
										<Icon />
									</div>
									<div className={styles.info}>
										<strong>{item.title}</strong>
										<span>{item.value}</span>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			{status && showMessage && (
				<StatusMessage dataType={status.type} message={status.message} />
			)}
		</section>
	);
};

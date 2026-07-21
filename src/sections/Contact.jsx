import { SectionHeading } from "../components";
import { contactInfo } from "../constants";
import styles from "./Sections.module.css";

export const Contact = () => {
	return (
		<section className={styles.contact} aria-labelledby="contact">
			<div className="container">
				<SectionHeading
					title="contact"
					description="Have questions about our workshops, exhibitions, or upcoming events? We'd love to hear from you."
				/>

				<div className={styles.content}>
					<form className={styles.contactForm}>
						<input
							className={styles.input}
							type="text"
							name="name"
							placeholder="Your Name"
						/>
						<input
							className={styles.input}
							type="email"
							name="mail"
							placeholder="Your Email"
						/>
						<input
							className={styles.input}
							type="text"
							name="subject"
							placeholder="Subject"
						/>
						<textarea
							className={styles.input}
							name="message"
							placeholder="Your Message"
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
		</section>
	);
};

import styles from "./Sections.module.css";
import { icons } from "../assets";
import { Overlay, SectionHeading } from "../components";

export const Subscribe = () => {
	const Icon = icons.MdOutlineMail;

	return (
		<section className={styles.subscribe}>
			<Overlay />
			<div className="container">
				<SectionHeading readOnly={true} title="Subscribe" />
				<div className={styles.grid}>
					<form className={styles.form}>
						<Icon className={styles.icon} />
						<input type="email" name="mail" placeholder="Your Email" />
						<button type="submit" className={styles.btn}>
							Subscribe
						</button>
					</form>
					<p className={styles.info}>
						Subscribe to receive news about workshops, exhibitions, and
						upcoming creative events.
					</p>
				</div>
			</div>
		</section>
	);
};

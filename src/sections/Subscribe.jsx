import styles from "./Sections.module.css";
import { icons } from "../assets";
import { Overlay, SectionHeading, StatusMessage } from "../components";
import { useState } from "react";
import { useStatusMsg } from "../hooks/useStatusMsg";

export const Subscribe = () => {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState(null);
	const { showMessage, setShowMessage } = useStatusMsg();

	const Icon = icons.MdOutlineMail;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email) {
			setStatus({
				type: "error",
				message: "Required Filed to subscribe",
			});
			setShowMessage(true);
			return;
		}

		console.log(email);

		setStatus({
			type: "success",
			message: "Thank you for connecting",
		});
		setShowMessage(true);
	};

	return (
		<section className={styles.subscribe}>
			<Overlay />
			<div className="container">
				<SectionHeading readOnly={true} title="Subscribe" />
				<div className={styles.grid}>
					<form className={styles.form} onSubmit={handleSubmit}>
						<Icon className={styles.icon} />
						<input
							type="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Your Email"
						/>
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
			{status && showMessage && (
				<StatusMessage dataType={status.type} message={status.message} />
			)}
		</section>
	);
};

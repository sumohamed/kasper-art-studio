import { useState, useEffect } from "react";
import styles from "./Sections.module.css";
import { Overlay } from "../components";
import { quotes } from "../constants";

export const Quote = () => {
	const [currentQuote, setCurrentQuote] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentQuote((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
		}, 5000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className={styles.quotes}>
			<Overlay />
			<div className="container">
				<div className={styles.card}>
					<q className={styles.quote}>{quotes[currentQuote].quote}</q>
					<span>{quotes[currentQuote].author}</span>
				</div>
			</div>
		</div>
	);
};

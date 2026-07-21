import styles from "./components.module.css";
import { icons } from "../assets";

export const PortfolioCard = ({ card, setOpenCard }) => {
	const OpenCardIcon = icons.FaPlus;
	return (
		<article key={card.id} className={styles.portfolioCard}>
			<button
				className={styles.modelBtn}
				type="button"
				onClick={() => setOpenCard(card.id)}
			>
				<OpenCardIcon className={styles.open} />
			</button>
			<img src={card.image} alt={card.title} className={styles.image} />
			<div className={styles.caption}>
				<h3>{card.title}</h3>
				<p>{card.author}</p>
			</div>
		</article>
	);
};

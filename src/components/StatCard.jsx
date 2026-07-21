// import useCounter from "../features/useCounter";
import styles from "./components.module.css";

export const StatCard = ({ stat }) => {
	// const { count } = useCounter(stat.number);
	const Icon = stat.iconName;
	return (
		<article className={styles.statCard}>
			<div className={styles.iconBox}>
				<Icon className={styles.icon} />
			</div>
			<div className={styles.number}>{stat.number}</div>
			<p className={styles.title}>{stat.title}</p>
		</article>
	);
};

import styles from "./components.module.css";
export const SubSection = ({ title, description, children }) => {
	return (
		<div className={styles.section}>
			<div className={styles.head}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className={styles.body}>{children}</div>
		</div>
	);
};

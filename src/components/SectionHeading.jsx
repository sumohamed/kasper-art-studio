import styles from "./components.module.css";
export const SectionHeading = ({ title, description, readOnly }) => {
	if (readOnly)
		return (
			<h2 id={title.toLowerCase()} className="sr-only">
				{title.toUpperCase()}
			</h2>
		);

	return (
		<div className={styles.sectionHeading}>
			<h2 id={title.toLowerCase()} className={styles.title}>
				{title.toUpperCase()}
			</h2>
			{description && <p>{description}</p>}
		</div>
	);
};

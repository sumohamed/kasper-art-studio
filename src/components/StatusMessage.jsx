import styles from "./components.module.css";

export const StatusMessage = ({ message, dataType = "success" }) => {
	return (
		<div data-type={dataType} className={styles.msg}>
			<p className={dataType === "success" ? styles.suc : styles.err}>
				{message}
			</p>
		</div>
	);
};

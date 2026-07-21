import styles from "./components.module.css";
export const Modal = ({ children, closeModal }) => {
	return (
		<div className={styles.modalWindow}>
			<button className={styles.close} onClick={closeModal}>
				x
			</button>
			<div className={styles.content}>{children}</div>
		</div>
	);
};

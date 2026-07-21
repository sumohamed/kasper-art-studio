import styles from "./components.module.css";

export const TabbedMenu = ({ tabs, selectedTab, onFilter }) => {
	return (
		<div className={styles.shuffle}>
			{tabs.map((tab) => (
				<button
					key={tab.title}
					className={selectedTab === tab.title ? styles.active : ""}
					onClick={() => onFilter(tab.title)}
				>
					{tab.title}
				</button>
			))}
		</div>
	);
};

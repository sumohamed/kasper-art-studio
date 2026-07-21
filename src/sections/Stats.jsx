import styles from "./Sections.module.css";
import { stats } from "../constants";
import { Overlay, StatCard } from "../components";

export const Stats = () => {
	return (
		<div className={styles.stats}>
			<Overlay />
			<div className="container">
				<div className={styles.grid}>
					{stats.map((item) => (
						<StatCard stat={item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	);
};

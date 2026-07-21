import { skills } from "../constants";
import styles from "./Sections.module.css";

export const Skills = () => {
	return (
		<div className={styles.skills}>
			{skills.map((skill) => {
				const dataProgress = `${skill.percentage}%`;
				return (
					<article className={styles.item} key={skill.id}>
						<h4>{skill.title}</h4>
						<div className={styles.progress}>
							<span
								style={{ width: dataProgress }}
								data-progress={dataProgress}
							></span>
						</div>
					</article>
				);
			})}
		</div>
	);
};

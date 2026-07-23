import styles from "./Sections.module.css";
import { images } from "../assets";
import { SectionHeading } from "../components";
import { Stats } from "./Stats";

export const About = () => {
	return (
		<section aria-labelledby="about" className={styles.about}>
			<div className={`container ${styles.container}`}>
				<SectionHeading
					title="about"
					description="Curabitur arcu erat, accumsan id imperdiet et, porttitor at
					sem. Mauris blandit aliquet elit, eget tincidunt."
				/>
				<div className={styles.content}>
					<article className={styles.info}>
						<h4>About Kasper</h4>
						<p>
							Kasper is a creative space where artists can learn,
							practice, and share their work. Through workshops,
							mentorship, and community events, we support creators at
							different stages of their artistic journey.
						</p>
						<p>
							We believe that art grows through experience and
							collaboration. From first sketches to public exhibitions,
							our programs help artists develop skills and build
							confidence in their work.
						</p>
					</article>
					<div className={styles.image}>
						<img
							className={styles.img}
							decoding="async"
							src={images.AboutImg}
							alt="art exhibition"
						/>
					</div>
				</div>
			</div>
			<Stats />
		</section>
	);
};

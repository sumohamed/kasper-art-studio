import styles from "./Sections.module.css";
import { videos } from "../assets";
import { Overlay, SectionHeading } from "../components";

export const Video = () => {
	return (
		<section className={styles.video}>
			<Overlay />
			<SectionHeading readOnly={true} title="videos" />

			<video controls autoPlay muted loop>
				<source src={videos.Sculptor} type="video/mp4" />
			</video>
			<article className={styles.content}>
				<h2>Creativity Takes Shape</h2>
				<p>
					From the first sketch to the final exhibition, every artwork
					tells a story of learning, practice, and dedication.
				</p>
			</article>
		</section>
	);
};

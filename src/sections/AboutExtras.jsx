import { SectionHeading, SubSection } from "../components";
import styles from "./Sections.module.css";
import { Skills } from "./Skills";
import { Testimonials } from "./Testimonials";

export const AboutExtras = () => {
	return (
		<section className={styles.aboutExtras}>
			<SectionHeading readOnly={true} title="more info" />
			<div className={`container ${styles.content}`}>
				{/* Testimonials */}
				<SubSection
					title="What Our Artists Say"
					description="Feedback and experiences shared by members of our creative community."
				>
					<Testimonials />
				</SubSection>

				{/* Skills */}
				<SubSection
					title="Learn and Improve"
					description="Build your artistic skills through practice, guidance, and hands-on experience."
				>
					<Skills />
				</SubSection>
			</div>
		</section>
	);
};

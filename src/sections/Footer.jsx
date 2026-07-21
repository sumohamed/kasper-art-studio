import { images, socialLinks } from "../assets";
import styles from "./Sections.module.css";
export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.content}`}>
				<img
					className={styles.logo}
					decoding="async"
					src={images.Logo}
					alt="Kasper Template Logo"
				/>
				<p className={styles.desc}>
					A creative space for learning, creating, and sharing art.
				</p>
				<div className={styles.socialLinks}>
					{socialLinks.map((link) => {
						const Icon = link.icon;
						return (
							<a key={link.id} href={link.href} className={styles.icon}>
								<Icon />
							</a>
						);
					})}
				</div>

				<div className={styles.copyrights}>
					<p>
						&copy; 2026 <span>Kasper</span> All Right Reserved
					</p>
					<p>
						developed by: <strong>sally mohamed</strong>
					</p>
				</div>
			</div>
		</footer>
	);
};

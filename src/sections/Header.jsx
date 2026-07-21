import styles from "./Sections.module.css";
import { images, navIcons } from "../assets";
import { navigationMenu } from "../constants";
import { useScroll } from "../hooks/useScroll";
import { useNavbar } from "../hooks/useNavbar";

export const Header = () => {
	const { isScrolled } = useScroll();
	const { isOpen, isActive, navRef, handleToggleNav, handleActiveLink } =
		useNavbar();
	const Icon = isOpen ? navIcons.FaBarsStaggered : navIcons.FaBars;

	return (
		<header
			className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
		>
			<div className={`container ${styles.wrapper}`}>
				<a className={styles.logo}>
					<img
						decoding="async"
						src={images.Logo}
						alt="Kasper Template Logo"
					/>
				</a>
				<nav className={styles.nav}>
					<button
						className={styles.toggleNavBtn}
						onClick={handleToggleNav}
					>
						<Icon className={styles.icon} />
					</button>
					<ul
						className={`${styles.navlist} ${isOpen ? styles.open : ""}`}
						ref={navRef}
					>
						{navigationMenu.map((item) => (
							<li key={item.title}>
								<a
									href={item.path}
									onClick={() => handleActiveLink(item.title)}
									className={`${styles.navlink} ${isActive === item.title ? styles.active : ""}`}
								>
									{item.title.toUpperCase()}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

import styles from "./Sections.module.css";
import {
	SectionHeading,
	TabbedMenu,
	PortfolioCard,
	Modal,
} from "../components";
import { useEffect, useState } from "react";
import { categories } from "../constants";

export const Portfolio = () => {
	const [portfolioData, setPortfolioData] = useState(null);
	const [selectedTab, setSelectedTab] = useState("all");
	const [openCard, setOpenCard] = useState(null);

	useEffect(() => {
		fetch("/data/portfolios.json")
			.then((res) => res.json())
			.then((data) => setPortfolioData(data))
			.catch((err) =>
				console.log(
					`something went wrong with fetching portfolios, ${err}`,
				),
			);
	}, []);

	if (!portfolioData) return <p>Loading...</p>;

	const filteredPortfolios =
		selectedTab === "all"
			? portfolioData.sectionList
			: portfolioData.sectionList.filter(
					(item) => item.category === selectedTab,
				);

	const handelSelectedTab = (item) => {
		setSelectedTab(item);
	};

	return (
		<section
			className={styles.portfolio}
			aria-labelledby={portfolioData.sectionHeader.title.toLowerCase()}
		>
			<div className="container">
				<SectionHeading
					title={portfolioData.sectionHeader.title}
					description={portfolioData.sectionHeader.subtitle}
				/>

				<TabbedMenu
					tabs={categories}
					selectedTab={selectedTab}
					onFilter={handelSelectedTab}
				/>
			</div>

			<div className={styles.portfoliosCards}>
				{filteredPortfolios.map((card) => (
					<div key={card.id}>
						<PortfolioCard card={card} setOpenCard={setOpenCard} />
						{openCard === card.id && (
							<Modal closeModal={() => setOpenCard(null)}>
								<img
									src={card.image}
									alt={card.title}
									className={styles.image}
								/>
							</Modal>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

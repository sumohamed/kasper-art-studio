import {
	About,
	AboutExtras,
	Contact,
	Features,
	Footer,
	Header,
	Landing,
	Portfolio,
	Pricing,
	Quote,
	Services,
	Subscribe,
	Video,
} from "./sections";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main id="home">
			<Header />
			<Landing />
			<Services />
			<Features />
			<Portfolio />
			<Video />
			<About />
			<AboutExtras />
			<Quote />
			<Pricing />
			<Subscribe />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;

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
		window.history.scrollRestoration = "manual";

		window.scrollTo(0, 0);

		window.history.replaceState(null, "", window.location.pathname);
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

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

// TODO : use Meta data to change favicon, title and meta tags..
const App = () => {
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

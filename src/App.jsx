import { GlobalStyle } from './assets/styles/global';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { SectionOne } from './components/SectionOne';
import { Buttons } from './components/Button';
import { Footer } from './components/Footer';

export function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<GlobalStyle />
			<SectionOne />
			<Buttons variante="calltoaction" texto="Saiba mais" />
			<Buttons variante="secondarybutton" texto="Saiba mais" />
			<Footer />
		</>
	);
}

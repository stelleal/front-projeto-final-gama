import { GlobalStyle } from './assets/styles/global';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { SectionOne } from './components/SectionOne';
import { Buttons } from './components/Button';
<<<<<<< HEAD
import {Card} from './components/Cards'
=======
>>>>>>> 2a7dc18674096d10f565368713c27610417a4ec5
import { Footer } from './components/Footer';

export function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<GlobalStyle />
			<SectionOne />
<<<<<<< HEAD
			<Card/>
			<Buttons variante="calltoaction" texto="Saiba mais" />
			<Buttons variante="secondarybutton" texto="Saiba mais" />
=======
			{/* <Buttons variante="calltoaction" texto="Saiba mais" />
			<Buttons variante="secondarybutton" texto="Saiba mais" /> */}
>>>>>>> 2a7dc18674096d10f565368713c27610417a4ec5
			<Footer />
		</>
	);
}

import { GlobalStyle } from './assets/styles/global';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Info } from './components/Info';
import { Buttons } from './components/Button';
// import {Card} from './components/Cards'
import { Footer } from './components/Footer';
// import { Regions } from './components/Regions';

export function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<GlobalStyle />
			<Info />
			{/* <Card/>	 */}
			{/* <Buttons variante="calltoaction" texto="Saiba mais" />
			<Buttons variante="secondarybutton" texto="Saiba mais" /> */}
			<Footer />
		</>
	);
}
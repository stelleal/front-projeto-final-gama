import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './assets/styles/global';
import { Buttons } from './components/Button';

export function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<GlobalStyle />
			<Buttons variante="calltoaction" texto="Saiba mais" />
			<Buttons variante="secondarybutton" texto="Saiba mais" />
		</>
	);
}

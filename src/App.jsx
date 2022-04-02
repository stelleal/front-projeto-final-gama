import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './assets/styles/global';

export function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<GlobalStyle />
		</>
	);
}

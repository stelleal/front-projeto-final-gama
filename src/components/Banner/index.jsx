import { Background } from './styles';
import { Buttons } from '../Button';

export function Banner() {
	return (
		<Background>
			<div className="container">
				<div>
					<h1>Nosso Slogan</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta dolorum laborum aperiam expedita molestiae doloremque esse? Magni, in amet?</p>
					<Buttons variante="banner" texto="Saiba mais" />
				</div>
			</div>
		</Background>
	);
}

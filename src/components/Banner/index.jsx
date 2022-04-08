import { Background } from './styles';
import { Buttons } from '../Button';

export function Banner() {
	return (
		<Background>
			<div className="container">
				<div>
					<h1>Cafés cultivados para despertar a realeza que habita em nós</h1>
					<p>Momentos reais merecem qualidade e cuidado, e nossos grãos são cultivados e preparados para fazer seu momento ser majestoso</p>
					<Buttons givenClass="calltoaction" text="Saiba mais" />
				</div>
			</div>
		</Background>
	);
}

import { SectionInfo, SectionText } from './styles';
import { Buttons } from '../Button';

export function Infobox() {
	return (
		<>
			<SectionText>
				<div>
					<h2>
						Aqui você irá encontrar os melhores grãos selecionados cuidadosamente para
						entrar na sua casa
					</h2>
					<p>
						De norte à sul, o Brasil produz cafés que encantam o mundo todo e nosso
						trabalho é trazer todo esse encanto para suas casas. Nossos produtos são
						adequados aos mais diversos modos de preparo e temos um compromisso gigante
						com sustentabilidade.
					</p>
				</div>
			</SectionText>

			<SectionInfo>
				<h1>Como funciona?</h1>
				<ul>
					<li>
						<div>
							<h1>1</h1>
						</div>
						<h4>Escolha a região do grão</h4>
					</li>
					<li>
						<div>
							<h1>2</h1>
						</div>
						<h4>Escolha o produto e o tipo de café</h4>
					</li>
					<li>
						<div>
							<h1>3</h1>
						</div>
						<h4>Pague através do nosso WhatsApp</h4>
					</li>
					<li>
						<div>
							<h1>4</h1>
						</div>
						<h4>Entregaremos no seu endereço</h4>
					</li>
				</ul>
				<Buttons givenClass="primarybutton" text="Quero escolher agora" />
			</SectionInfo>
		</>
	);
}

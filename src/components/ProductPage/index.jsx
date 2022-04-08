import { Container } from './styles';
import { Buttons } from '../Button';

import tempImg from '../../assets/images/coffee2.png';

export function ProductPage() {
	return (
		<Container>
			<div className="content">
			<span> <a href="/">˂ Voltar</a></span>
				<div className="productImg">
					<img src={tempImg} alt="" />
				</div>

				<div className="productInfo">
					<h1>ASTRO CAFÉ DESCAFEÍNADO ESPECIAL MOÍDO 250G</h1>
					<p>
						Produzido com o exclusivo processo Swiss Water, que extrai 99,9% da cafeína
						sem fazer uso de produtos químicos. Um café especial, com grãos cuidadosamente
						selecionados e torra perfeita, que mantém aroma e sabor intenso, acidez suave
						e corpo médio, sem os efeitos da cafeína.
					</p>

          <Buttons givenClass="primarybutton" text="Comprar" />
				</div>
			</div>
		</Container>
	);
}

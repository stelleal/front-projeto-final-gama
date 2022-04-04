import { Section } from './styles';
import coffeebeans from "../../../src/assets/images/coffee-beans.svg";

export function SectionOne () {
    return (
        <Section>
            <div>
				<h2>Aqui você irá encontrar os melhores grãos selecionados cuidadosamente para entrar na sua casa</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo urna et bibendum nulla. Sed interdum consectetur in sit. Non non in donec habitant risus, lacinia metus mi, donec. A sapien, gravida purus orci, congue amet. Diam vitae venenatis eu elit vitae nunc. Nunc nulla faucibus orci in ipsum in fringilla eget. Nunc nulla faucibus orci in ipsum in fringilla eget.</p>
			</div>
            <img src={coffeebeans} alt="Logo" />
        </Section>
    )
}
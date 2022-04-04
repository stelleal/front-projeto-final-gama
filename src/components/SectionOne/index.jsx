import { Section } from './styles';
import { Buttons } from '../Button';
import coffeebeans from "../../../src/assets/images/coffee-beans.svg";

export function SectionOne () {
    return (
        <Section>
<<<<<<< HEAD
            <div>
				<h2>Aqui você irá encontrar os melhores grãos selecionados cuidadosamente para entrar na sua casa</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo urna et bibendum nulla. Sed interdum consectetur in sit. Non non in donec habitant risus, lacinia metus mi, donec. A sapien, gravida purus orci, congue amet. Diam vitae venenatis eu elit vitae nunc. Nunc nulla faucibus orci in ipsum in fringilla eget. Nunc nulla faucibus orci in ipsum in fringilla eget.</p>
			</div>
            <img src={coffeebeans} alt="Logo" />
=======
                <section>
                    <div>
                        <h2>Aqui você irá encontrar os melhores grãos selecionados cuidadosamente para entrar na sua casa</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta dolorum laborum aperiam expedita molestiae doloremque esse? Magni, in amet?</p>
                    </div>
                    <img src={coffeebeans} alt="Logo" />
                </section>
                <section className='info'>
                    <h1>Como funciona?</h1>
                    <ul>
                        <li><div className='steps'><h1>1</h1></div><h4>Escolha a região do grão</h4></li>
                        <li><div className='steps'><h1>2</h1></div><h4>Escolha o produto e o tipo de café</h4></li>
                        <li><div className='steps'><h1>3</h1></div><h4>Pague através do nosso WhatsApp</h4></li>
                        <li><div className='steps'><h1>4</h1></div><h4>Entregaremos no seu endereço</h4></li>
                    </ul>
                    <Buttons variante="calltoaction" texto="Quero escolher agora" />
                </section>
>>>>>>> 2a7dc18674096d10f565368713c27610417a4ec5
        </Section>
    )
}
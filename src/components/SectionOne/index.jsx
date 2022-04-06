import { Section } from './styles';
import coffeebeans from "../../../src/assets/images/coffee-beans.svg";

export function SectionOne () {
    return (
        <Section>
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
                        <li><h4>Escolha a região do grão</h4></li>
                        <li><h4>Escolha o produto e o tipo de café</h4></li>
                        <li><h4>Pague através do nosso WhatsApp</h4></li>
                        <li><h4>Entregaremos no seu endereço</h4></li>
                    </ul>
                </section>
        </Section>
    )
}
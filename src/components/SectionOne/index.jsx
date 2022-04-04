import { Section } from './styles';
import coffeebeans from "../../../src/assets/images/coffee-beans.svg";

export function SectionOne () {
    return (
        <Section>
            <div>
				<h2>Nosso Slogan</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta dolorum laborum aperiam expedita molestiae doloremque esse? Magni, in amet?</p>
			</div>
            <img src={coffeebeans} alt="Logo" />
        </Section>
    )
}
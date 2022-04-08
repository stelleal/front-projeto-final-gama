import { Buttons } from '../Button';
import { Section } from "./styles";

export function Regionsbox() {
    return (
        <Section>
            <div id='title'>
                <h1>Grãos do Brasil</h1>
                <p>Aqui você irá escolher de qual região você quer seu café</p>
            </div>
            <div id='buttonsregion'>
                <Buttons givenClass="secondarybutton" text="Centro-oeste" />
                <Buttons givenClass="secondarybutton" text="Nordeste" />
                <Buttons givenClass="secondarybutton" text="Norte" />
                <Buttons givenClass="secondarybutton" text="Sudeste" />
                <Buttons givenClass="secondarybutton" text="Sul" />
                <Buttons givenClass="secondarybutton" text="Todos" />
            </div>
        </Section>
    )
}
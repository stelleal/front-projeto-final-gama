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
                <Buttons variante="secondarybutton" texto="Centro-oeste" />
                <Buttons variante="secondarybutton" texto="Nordeste" />
                <Buttons variante="secondarybutton" texto="Norte" />
                <Buttons variante="secondarybutton" texto="Sudeste" />
                <Buttons variante="secondarybutton" texto="Sul" />
                <Buttons variante="secondarybutton" texto="Todos" />
            </div>
        </Section>
    )
}
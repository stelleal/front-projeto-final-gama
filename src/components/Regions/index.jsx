 import { Buttons } from "../Button"

 export function Regions() {
 <section id='title'>
                    <div>
                        <h1>Grãos do Brasil</h1>
                        <p>Aqui você irá escolher de qual Estado você quer seu café</p>
                    </div>
                    <div id='regionsbuttons'>
                        <Buttons variante="region" texto="Centro-oeste" />
                        <Buttons variante="region" texto="Nordeste" />
                        <Buttons variante="region" texto="Norte" />
                        <Buttons variante="region" texto="Sudeste" />
                        <Buttons variante="region" texto="Sul" />
                        <Buttons variante="region" texto="Todos" />
                    </div>
</section> 
}
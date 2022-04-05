import { Buttons } from "../Button";
import { Container } from "./styles";
import coffeepack from "../../../src/assets/images/coffee-pack.svg";

export function Ship() { 
    return (
        <Container>
             <img src={coffeepack} alt="Grãos de café" />
            <div>
                <h1>Aproveite nosso frete grátis para compras acima de R$150</h1>
                <p>Comprando mais de R$150 reais em produtos, você ganha frete grátis para qualquer região do Brasil. </p>
                <Buttons variante="calltoaction" texto="Comprar agora" />
            </div>   
        </ Container>
 )
}
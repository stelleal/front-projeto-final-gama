import { Buttons } from "../Button";
import { Container } from "./styles";

export function Orangebox() { 
    return (
        <Container>
            <div>
                <h1>Aproveite nosso frete grátis para compras acima de R$150</h1>
                <p>Comprando mais de R$150 reais em produtos, você ganha frete grátis para qualquer região do Brasil. </p>
                <Buttons givenClass="calltoaction" text="Comprar agora" />
            </div>   
        </ Container>
 )
};
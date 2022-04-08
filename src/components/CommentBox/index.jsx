import Comment from "../Comments";
import { Buttons } from '../Button';
import { Row, Container } from "./style";

export default function CommentBox() {
    return (
        <Container id="depoimentos">
                <h1>O que estão falando dos nossos cafés</h1>
                <Row>
                    <Comment h2="Aroma incrível" text="”Um café de sabor encorpado e aroma inesquecível, virou comentário entre meus vizinhos de prédio que já sabem de onde vem o cheirinho de café no final da tarde.”" name="João da Silva" />
                    <Comment h2="O melhor dos Bom Dia!" text="”Gosto de despertar e tomar uma boa xícara de café, e hoje posso desfrutar desse prazer com facilidade pois sei que os cafés da RoyalCoffee são deliciosos, eles têm um sabor único e marcante”" name="Maria Clara" />
                    <Comment h2="Nunca provei nada igual" text="”Gosto de variar no modo de preparo e aqui posso encontrar cafés com torras de nível adequado e moagens perfeitas, então posso ter um momento perfeito que vai desde o preparo até o consumo do meu café!”" name="Fernando Pessoa" />
                </Row>
                <Buttons givenClass="primarybutton" text="Quero escolher agora" />
        </Container>
    )
}
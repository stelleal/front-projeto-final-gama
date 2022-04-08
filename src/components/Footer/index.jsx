import { Container } from "./styles";
import { List } from "../Lists";
import logowhiteImg from "../../../src/assets/images/logo-white-simple.svg";
import instagramImg from "../../../src/assets/images/ig.svg";
import facebookImg from "../../../src/assets/images/fb.svg";
import twitterImg from "../../../src/assets/images/twitter.svg";


const listAbout = [
    {
      text: "Quem somos",
      link: "#",
    },
    {
      text: "Como funciona?",
      link: "#",
    },
    {
      text: "Contatos",
      link: "#",
    },
  ];

const listQuestions = [
    {
      text: "Nossa política de entrega",
      link: "#",
    },
    {
      text: "Política de privacidade",
      link: "#",
    },
    {
      text: "FAQ",
      link: "#",
    },
  ];

export function Footer() {
    return (
        <Container>
            <footer>
                <List title="Nos conheça" itens={listAbout} />
                <List title="Tire suas dúvidas" itens={listQuestions} />
                <div>
                    <h4>Nos siga nas redes</h4>
                    <ul id="socialbuttonslist">
                        <li><a href="." className="socialbutton"><img src={instagramImg} alt="Instagram" /></a></li>
                        <li><a href="." className="socialbutton"><img src={facebookImg} alt="Facebook" /></a></li>
                        <li><a href="." className="socialbutton"><img src={twitterImg} alt="Twitter" /></a></li>
                    </ul>
                </div>
                <a href="."><img src={logowhiteImg} alt="Logo White" /></a>
            </footer>
        </Container>
    )
}
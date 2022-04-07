import { Section } from "./styles";
import { List } from "../Lists";
// import { Buttons } from '../Button';
import logowhite from "../../../src/assets/images/logo-white-simple.svg";
import instagram from "../../../src/assets/images/ig.svg";
import facebook from "../../../src/assets/images/fb.svg";
import twitter from "../../../src/assets/images/twitter.svg";


const listaConheca = [
    {
      nome: "Quem somos",
      link: "#",
    },
    {
      nome: "Como funciona?",
      link: "#",
    },
    {
      nome: "Contatos",
      link: "#",
    },
  ];

const listaDuvida = [
    {
      nome: "Nossa política de entrega",
      link: "#",
    },
    {
      nome: "Política de privacidade",
      link: "#",
    },
    {
      nome: "FAQ",
      link: "#",
    },
  ];

export function Footer() {
    return (
        <Section>
            <footer>
                <List titulo="Nos conheça" itens={listaConheca} />
                <List titulo="Tire suas dúvidas" itens={listaDuvida} />
                <div>
                    <h4>Nos siga nas redes</h4>
                    <ul id="socialbuttons">
                        <li><a href="." className="socialbutton"><img src={instagram} alt="Instagram" /></a></li>
                        <li><a href="." className="socialbutton"><img src={facebook} alt="Facebook" /></a></li>
                        <li><a href="." className="socialbutton"><img src={twitter} alt="Twitter" /></a></li>
                    </ul>
                </div>
                <a href="."><img src={logowhite} alt="Logo White" /></a>
            </footer>
        </Section>
    )
}
import { Section } from "./styles";
// import { Buttons } from '../Button';
import logowhite from "../../../src/assets/images/logo-white-simple.svg";
import instagram from "../../../src/assets/images/ig.svg";
import facebook from "../../../src/assets/images/fb.svg";
import twitter from "../../../src/assets/images/twitter.svg";

export function Footer() {
    return (
        <Section>
            <footer>
                <div>
                    <h4>Nos conheça</h4>
                    <ul>
                        <li><a href=".">Quem somos</a></li>
                        <li><a href=".">Como funciona?</a></li>
                        <li><a href=".">Contatos</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Tire suas dúvidas</h4>
                    <ul>
                        <li><a href=".">Nossa política de entrega</a></li>
                        <li><a href=".">Política de privacidade</a></li>
                        <li><a href=".">FAQ</a></li>
                    </ul>
                </div>
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
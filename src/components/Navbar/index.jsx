import { Container } from "./styles";
import logo from "../../../src/assets/images/logo.svg";

export function Navbar() {
  return (
    <Container>
      
        <ul>
          <li><a href=".">Quem Somos</a></li>
          <li><a href=".">Como Funciona</a></li>
        </ul>
        <a href=""><img src={logo} alt="Logo" /></a>
        <ul> 
          <li><a href=".">Perguntas Frequentes</a></li>
          <li><a href=".">Newsletter</a></li>
        </ul>
      
    </Container>
  )
}
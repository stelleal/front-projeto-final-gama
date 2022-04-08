import { Container } from "./styles";
import logo from "../../../src/assets/images/logo.svg";

export function Navbar() {
  return (
    <Container>
        <div className="wrapper">         
            <a href="/#aboutUs">Quem Somos</a>
            <a href="/#howItWorks">Como Funciona</a>
            <a className="logo" href="."><img src={logo} alt="Logo" /></a>
            <a href="/#fretegratis">Frete Grátis</a>
            <a href="/#depoimentos">Depoimentos</a>
        </div>
    </Container>
  )
};
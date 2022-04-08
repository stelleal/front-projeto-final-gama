import "./style.css";
import imagem from "../../assets/images/coffee1.png";
import { Buttons } from "../Button";
import { Link } from "react-router-dom";

export function Card () {
  return ( 
  <> 
    <div className="row">
      <div className='card'>
      <img className='img-card' src={imagem} alt="coffee" />
        <h3>Café beta 200g</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero culpa dolorem saepe minus. Tempora, tempore unde? Dolor, quibusdam saepe!</p>
        <p>Moido | Nordeste | Amargo</p>
        <Link to = "/product">
          <Buttons givenClass="primarybutton" text="Comprar" />
        </Link>
      </div>
      <div className='card'>
      <img className='img-card' src={imagem} alt="coffee" />
        <h3>Café beta 200g</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero culpa dolorem saepe minus. Tempora, tempore unde? Dolor, quibusdam saepe!</p>
        <p>Moido | Nordeste | Amargo</p>
        <Link to = "/product">
          <Buttons givenClass="primarybutton" text="Comprar" />
        </Link>
      </div>
      <div className='card'>
      <img className='img-card' src={imagem} alt="coffee" />
        <h3>Café beta 200g</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero culpa dolorem saepe minus. Tempora, tempore unde? Dolor, quibusdam saepe!</p>
        <p>Moido | Nordeste | Amargo</p>
        <Link to = "/product">
          <Buttons givenClass="primarybutton" text="Comprar" />
        </Link>
      </div>
      <div className='card'>
      <img className='img-card' src={imagem} alt="coffee" />
        <h3>Café beta 200g</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero culpa dolorem saepe minus. Tempora, tempore unde? Dolor, quibusdam saepe!</p>
        <p>Moido | Nordeste | Amargo</p>
        <Link to = "/product">
          <Buttons givenClass="primarybutton" text="Comprar" />
        </Link>
      </div>
    </div>
  </> 
  )}

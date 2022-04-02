import "./style.css";

export function Buttons(props) {
    return ( 
        <button className={`button ${props.variante}`}>{props.texto}</button>
    )
  }


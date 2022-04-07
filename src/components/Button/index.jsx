import "./style.css";

export function Buttons(props) {
    return ( 
        <button className={`button ${props.givenClass}`}>{props.text}</button>
    )
  }


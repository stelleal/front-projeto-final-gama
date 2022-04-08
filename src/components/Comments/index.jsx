import { Commentcard } from "./style"
import Stars from "../../assets/images/stars.png"

export default function Comment(props) {
    return(        
             <Commentcard>
                <h2>{props.h2} </h2>
                <p>”{props.text}.”</p>
                <img src={Stars} alt="Nota dos Consumidores" />
                <h2>{props.name}</h2>
            </Commentcard>      
    );
}
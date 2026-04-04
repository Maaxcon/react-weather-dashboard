import type {ButtonT} from "../type"
function Button({text,onClick}: ButtonT){
    return(
        <button onClick={onClick}>{text}</button>
    )

}

export default Button
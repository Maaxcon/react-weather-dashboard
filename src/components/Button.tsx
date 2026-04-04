import type { Button as ButtonProps } from "../type"

function Button({ text, onClick }: ButtonProps) {
    return(
        <button onClick={onClick}>{text}</button>
    )

}

export default Button

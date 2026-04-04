import type { ButtonT } from "../type"

function Button({ text, onClick, isActive }: ButtonT) {
    return(
        <button
            onClick={onClick}
            data-active={isActive ? "true" : undefined}
            aria-pressed={isActive}
        >
            {text}
        </button>
    )

}

export default Button

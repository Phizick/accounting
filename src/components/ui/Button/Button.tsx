import React from "react";
import ButtonStyles from './Button.module.css'

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    text: string,
    type: 'blue' | 'white'
    extraClass?: string
}

export const Button: React.FC<IButtonProps> = ({
    text,
    extraClass = '',
    type = 'blue',
    ...rest
}) => {

    const className = type === 'blue' ? `${ButtonStyles.buttonBlue} ${extraClass}` : `${ButtonStyles.buttonWhite} ${extraClass}`
    const textClassName = type === 'blue' ? `${ButtonStyles.textBlue}` : `${ButtonStyles.textWhite}`

    return (
        <button
            className={className}
            {...rest}
            >
            <p className={textClassName}>{text}</p>
        </button>
    )
}
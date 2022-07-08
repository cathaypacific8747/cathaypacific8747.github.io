import React, { useContext } from 'react';
import { ActionContext } from '../App'
import './Button.scss'

interface ButtonSettings {
    text: string,
    goto?: string,
    disabled?: boolean
}

const Button: React.FC<ButtonSettings> = ({ text, goto=null, disabled=false }) => {
    const { playButtonSound, setPage } = useContext(ActionContext)
    const handleClick = () => {
        (!disabled) && playButtonSound();
        goto && setPage(goto)
    }

    return <div className={`btn${disabled ? ' disabled' : ''}`} onClick={handleClick}>
        <div className="text">{text}</div>
        <div className="bg">
            <div className="left"></div>
            <div className="right"></div>
        </div>
    </div>
}

export default Button;
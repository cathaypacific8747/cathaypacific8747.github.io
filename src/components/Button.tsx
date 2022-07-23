import React, { useContext } from 'react';
import { ActionContext } from '../App'
import './Button.scss'
import { useNavigate } from 'react-router-dom';

interface ButtonSettings {
    text: string,
    goto?: string,
    disabled?: boolean
}

const Button: React.FC<ButtonSettings> = ({ text, goto=null, disabled=false }) => {
    const { playButtonSound } = useContext(ActionContext)
    let navigate = useNavigate();

    const handleClick = () => {
        (!disabled) && playButtonSound();
        goto && navigate(goto)
    }

    return <div className={`btn${disabled ? ' disabled' : ''}`} onClick={handleClick}>
        <div className="b-text">{text}</div>
        <div className="b-bg">
            <div className="b-left"></div>
            <div className="b-right"></div>
        </div>
    </div>
}

export default Button;
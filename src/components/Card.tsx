// import React, { useContext } from 'react';
// import { ActionContext } from '../App'
import './Card.scss'
// import { useNavigate } from 'react-router-dom';

interface CardSettings {
    title?: string,
    subtitle?: string,
    thumbPath?: string,
    goto?: string,
    dispatchSelected: (() => void),
    selected: boolean
}

const Button: React.FC<CardSettings> = ({ title, subtitle, thumbPath=null, goto=null, dispatchSelected, selected }) => {
    // const { playButtonSound } = useContext(ActionContext)
    // let navigate = useNavigate();

    // const handleSelect = () => {
    //     if (selected) {
    //         playButtonSound();
    //         goto && navigate(goto);
    //     }
    // }

    return <div className={`card${selected ? ' selected' : ''}`} onClick={dispatchSelected}>
        <div className="thumb">
            <div className="hover"></div>
            <div className="base" style={thumbPath ? {backgroundImage: thumbPath} : {}}></div>
        </div>
        <div className="text">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
        </div>
    </div>
}

export default Button;
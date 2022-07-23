import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ActionContext } from '../App'
import './Card.scss'

interface CardSettings {
    title: string,
    subtitle: string,
    thumbPath?: string,
    selected: boolean
    dispatchSelected: (() => void),
    goto: string,
}

const Card: React.FC<CardSettings> = ({ title, subtitle, thumbPath=null, selected, dispatchSelected, goto }) => {
    const { playButtonSound } = useContext(ActionContext)
    let navigate = useNavigate();

    const handleNavigate = () => {
        playButtonSound();
        navigate(goto)
    }

    return <div className={`card${selected ? ' selected' : ''}`} onClick={dispatchSelected} onDoubleClick={handleNavigate}>
        <div className="thumb" onClick={handleNavigate}>
            <div className="hover"></div>
            <div className="base" style={thumbPath ? {backgroundImage: `url(${thumbPath})`} : {}}></div>
        </div>
        <div className="text">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
        </div>
    </div>
}

export default Card;